// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU2ty_Bexfb1JhzL8iFzPBmX-7TuwDLtg",
  authDomain: "netflix-gpt-b7d96.firebaseapp.com",
  projectId: "netflix-gpt-b7d96",
  storageBucket: "netflix-gpt-b7d96.appspot.com",
  messagingSenderId: "132986805518",
  appId: "1:132986805518:web:18bd7b70df0a3303ab0b5f",
  measurementId: "G-HRR5Q179D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();