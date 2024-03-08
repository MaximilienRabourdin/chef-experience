// Fonction contact.js

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());

app.post('/api/contact', async (req, res) => {
  try {
    // Récupérez les données du formulaire depuis le corps de la requête
    const { name, email, message } = req.body;

    // Configurez le service d'envoi de courriel (nodemailer)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'votre_email@gmail.com',
        pass: 'votre_mot_de_passe',
      },
    });

    // Configurez l'e-mail de destination
    const mailOptions = {
      from: 'votre_email@gmail.com',
      to: 'destinataire@example.com',
      subject: 'Nouveau message de contact',
      text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Envoyez l'e-mail
    await transporter.sendMail(mailOptions);

    // Répondez au client avec un statut 200
    res.status(200).send('Message envoyé avec succès.');
  } catch (error) {
    // En cas d'erreur, répondez avec un statut 500 et un message d'erreur
    console.error(error);
    res.status(500).send('Une erreur s\'est produite lors de l\'envoi du message.');
  }
});

// Exposez l'application Express en tant que fonction serverless
module.exports = app;
