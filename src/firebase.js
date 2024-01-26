// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAB9q5zirLbL2ZMf-U43VYXp_aRD6vYdY",
  authDomain: "react-auth-c1fb7.firebaseapp.com",
  projectId: "react-auth-c1fb7",
  storageBucket: "react-auth-c1fb7.appspot.com",
  messagingSenderId: "202418303536",
  appId: "1:202418303536:web:798da5ac45e4233b8bf3f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
