// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "blog-app-c5957.firebaseapp.com",
  projectId: "blog-app-c5957",
  storageBucket: "blog-app-c5957.firebasestorage.app",
  messagingSenderId: "6360988306",
  appId: "1:6360988306:web:4f1022d5617408cd77044b",
  measurementId: "G-V1LGTJ4SVY",
  databaseURL: import.meta.env.VITE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)

export { auth, db }