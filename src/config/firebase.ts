// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const appAuthDomain = process.env.REACT_APP_AUTH_DOMAIN;
const appProjectId = process.env.REACT_APP_PROJECT_ID;
const appStorage = process.env.REACT_APP_STORAGE_BUCKET;
const appMessagingId = process.env.REACT_APP_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: appAuthDomain,
  projectId: appProjectId,
  storageBucket: appStorage,
  messagingSenderId: appMessagingId,
  appId: appId
};

// Print the process.env variables to the terminal
console.log("process.env:", process.env);
console.log("firebaseConfig:", firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);