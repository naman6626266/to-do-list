// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0JoQl5tE-suJxFeut9c5l2IrHoWhDAww",
  authDomain: "to-do-list-da50c.firebaseapp.com",
  projectId: "to-do-list-da50c",
  storageBucket: "to-do-list-da50c.appspot.com",
  messagingSenderId: "726530004128",
  appId: "1:726530004128:web:fcd2f71c58a6aad149e5c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;