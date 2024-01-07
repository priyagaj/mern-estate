// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4a03d.firebaseapp.com",
  projectId: "mern-estate-4a03d",
  storageBucket: "mern-estate-4a03d.appspot.com",
  messagingSenderId: "1024261951941",
  appId: "1:1024261951941:web:bc396293d784b72d4fbbac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);