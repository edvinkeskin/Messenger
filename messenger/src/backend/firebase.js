// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD98w1WQZ1U4zJjKqL-cwsYv16zsIQdZ58",
    authDomain: "messenger-4.firebaseapp.com",
    projectId: "messenger-4",
    storageBucket: "messenger-4.appspot.com",
    messagingSenderId: "960682339940",
    appId: "1:960682339940:web:ecbc5615f2dd49b5567971",
    measurementId: "G-T3C2R28FMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

