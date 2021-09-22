import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB8o5uzFM1bLgoIJX6S5dT3VXbkAQnT168",
    authDomain: "csa-flashcardapp-85d5f.firebaseapp.com",
    projectId: "csa-flashcardapp-85d5f",
    storageBucket: "csa-flashcardapp-85d5f.appspot.com",
    messagingSenderId: "961561909209",
    appId: "1:961561909209:web:feca6941e805e50c712bc8"
  };

  const firebase=initializeApp(firebaseConfig);
  const db=getFirestore();

async function AddFlashCard(card) {
    try {
        const docRef = await addDoc(collection(db, "flashcards"), {
          Category: card.Category,
          Term: card.Term,
          Definition: card.Definition
          
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const cards=[]; //call this when the app loads so that the data will be loaded
async function getFlashCards() {
    cards.length=0;
    const querySnapshot = await getDocs(collection(db, "flashcards"));
querySnapshot.forEach((doc) => {
  cards.push(doc.data());
});
return cards;
}

// call this function when data needs to be displayed
function getData() {
    return cards;
}

function login(email, password) {
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export {firebase, db, login, getFlashCards, getData};