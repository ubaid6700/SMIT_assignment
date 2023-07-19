// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import {
    getDatabase,
    ref,
    set,
    onValue,
    get,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import { 
    doc, 
    setDoc,
    getDoc,
    getFirestore, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAxFOIdQfMKjI60AvDhR1sHoxOVh4-N8M",
  authDomain: "social-media-application-ae9fc.firebaseapp.com",
  projectId: "social-media-application-ae9fc",
  storageBucket: "social-media-application-ae9fc.appspot.com",
  messagingSenderId: "688184096694",
  appId: "1:688184096694:web:a514ee52c79bdb404a3317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const db = getDatabase();
const db = getFirestore();

let signup_btn = document.getElementById("signup_btn");
signup_btn.addEventListener("click", function() 
{
    let signup_email = document.getElementById("signup_email");
    let signup_password = document.getElementById("signup_password");
    
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(userCredential);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });;
})

    let signin_btn = document.getElementById("signin_btn");
    signin_btn.addEventListener("click", function () 
    {
    let signin_email = document.getElementById("signin_email");
    let signin_password = document.getElementById("signin_password");

    signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then(async(userCredential) => 
    {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        location.href = './login/index.html'
    })
    .catch((error) => 
        {
        const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error", errorMessage);
    });

});
