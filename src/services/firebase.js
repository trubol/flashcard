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
      console.log("george");
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
const CSS=[];
const HTML=[];
const JavaScriptArr =[];
const ReactArr=[];

async function getFlashCards() {
    cards.length=0;
    CSS.length=0;
    HTML.length=0;
    JavaScriptArr.length=0;
    ReactArr.length=0;
    const querySnapshot = await getDocs(collection(db, "flashcards"));
querySnapshot.forEach((doc) => {
  cards.push(doc.data());
  switch (doc.data().Category) {
    case "CSS":
    CSS.push(doc.data());
    break;

    case "HTML":
    HTML.push(doc.data());
    break;

    case "JavaScript":
    JavaScriptArr.push(doc.data());
    break;

    case "React":
    ReactArr.push(doc.data());
    break;

    default:
      break;
  
  }

});
return cards;
}

// call this function when data needs to be displayed
function getData() {
    return cards;
}

function getCSSData() {
  return CSS;
}

function getHTMLData() {
  return HTML;
}

function getJavaScriptData() {
  return JavaScriptArr;
}

function getReactData() {
  return ReactArr;
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

export {firebase, db, login, getFlashCards, getData, getCSSData, getHTMLData, getJavaScriptData, getReactData, AddFlashCard};