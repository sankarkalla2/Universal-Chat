// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBojMs9LOQJldSIWXp4FBXiM8Ub-l7I-2M",
  authDomain: "universal-chat-19738.firebaseapp.com",
  projectId: "universal-chat-19738",
  storageBucket: "universal-chat-19738.appspot.com",
  messagingSenderId: "145601066456",
  appId: "1:145601066456:web:15e7a80760481dd4222ead",
  measurementId: "G-X1L1CHQL1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
