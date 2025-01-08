// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATT1x1iAWSTagTKaIjGjV1b7wCbLy-6Aw",
  authDomain: "acpartners-6346f.firebaseapp.com",
  projectId: "acpartners-6346f",
  storageBucket: "acpartners-6346f.firebasestorage.app",
  messagingSenderId: "275249969941",
  appId: "1:275249969941:web:282ab612c976287a7f471c",
  measurementId: "G-Z3X68Y983V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);