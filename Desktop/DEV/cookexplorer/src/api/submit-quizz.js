const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

// Initialiser Firebase avec vos clés d'API
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  }),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

// Créer un transporteur Nodemailer avec vos informations d'authentification
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Exporter la fonction serverless
module.exports = async (req, res) => {
  try {
    // Récupérer les réponses depuis le corps de la requête
    const { answers } = req.body;

    // Enregistrer les réponses dans Firestore
    const responseRef = await db.collection('responses').add({
      answers,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    // Envoyer les réponses par e-mail
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'maximilien.rabourdin@gmail.com',
      subject: 'Nouvelle réponse au quiz',
      text: `Nouvelle réponse au quiz. Réponse ID: ${responseRef.id}`,
    };

    await transporter.sendMail(mailOptions);

    // Répondre avec le succès et l'ID de la réponse
    res.status(200).json({ success: true, responseId: responseRef.id });
  } catch (error) {
    console.error(error);

    // Répondre avec une erreur et un message d'erreur
    res.status(500).json({ success: false, error: 'Internal Server Error', errorMessage: error.message });
  }
};
