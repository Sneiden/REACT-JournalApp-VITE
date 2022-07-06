// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4VytzRfMUAWogcKBeRFqjC9tO9z5oVyM",
  authDomain: "react-app-curso-25010.firebaseapp.com",
  projectId: "react-app-curso-25010",
  storageBucket: "react-app-curso-25010.appspot.com",
  messagingSenderId: "700256853870",
  appId: "1:700256853870:web:25694481929df729d1eb7f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp )