// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ht-blog-9ff47.firebaseapp.com",
  projectId: "ht-blog-9ff47",
  storageBucket: "ht-blog-9ff47.appspot.com",
  messagingSenderId: "458078923429",
  appId: "1:458078923429:web:70858c0d5366a706cdfb4c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);