// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBYJlikSTIk0K0_61nZE2Wp89EHjmG8428",
    authDomain: "webapp-8cc7d.firebaseapp.com",
    projectId: "webapp-8cc7d",
    storageBucket: "webapp-8cc7d.firebasestorage.app",
    messagingSenderId: "422035049758",
    appId: "1:422035049758:web:166a8642c5677daff48d0f",
    measurementId: "G-RJQKH72EPQ"
  };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  export { auth, provider };
