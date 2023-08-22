// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXnT9puJCbtox4g_lUbbiWGIc-20he91Y",
  authDomain: "react-journal-app-4a24f.firebaseapp.com",
  projectId: "react-journal-app-4a24f",
  storageBucket: "react-journal-app-4a24f.appspot.com",
  messagingSenderId: "486600351565",
  appId: "1:486600351565:web:58475dff28e7e8de89e104",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
