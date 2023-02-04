
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFUPGG7orsFVPcIfArt1hT06FkpUXAZuk",
  authDomain: "mhlservicos-8123f.firebaseapp.com",
  projectId: "mhlservicos-8123f",
  storageBucket: "mhlservicos-8123f.appspot.com",
  messagingSenderId: "166378202393",
  appId: "1:166378202393:web:cc86cb5b4062bc203dd188",
  measurementId: "G-SWBQFTN0SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
