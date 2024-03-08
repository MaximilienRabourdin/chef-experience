// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Ajoutez ces imports

const firebaseConfig = {
  apiKey: "AIzaSyAnYBC2D9wcm8Wivat0mBuD26uVdUc-Wuo",
  authDomain: "joy-blast-729ee.firebaseapp.com",
  projectId: "joy-blast-729ee",
  storageBucket: "joy-blast-729ee.appspot.com",
  messagingSenderId: "306294317900",
  appId: "1:306294317900:web:a099683af0a4dead7465e9",
  measurementId: "G-S2FBK2VPK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialisez Firestore
const db = getFirestore();

const logResponses = async (answers) => {
  try {
    const response = await addDoc(collection(db, "responses"), {
      answers: answers,
    });
    console.log("Réponses soumises avec succès !", response);
  } catch (error) {
    console.error("Échec de la soumission des réponses :", error.message, error.stack);
  }
};

export default logResponses;
