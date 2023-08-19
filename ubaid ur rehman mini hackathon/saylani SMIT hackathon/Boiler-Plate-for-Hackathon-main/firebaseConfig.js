import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

// auth cdn link
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// firestore cdn link
import { getFirestore,doc, setDoc,serverTimestamp, collection, getDocs,getDoc,query, orderBy, limit, deleteDoc ,addDoc , updateDoc   } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

// storage cdn link
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";


const firebaseConfig = {
  apiKey: "AIzaSyBy284pswN8AMkba4gBvAoxqo1CcOr6JN4",
  authDomain: "pre-hackhaton.firebaseapp.com",
  projectId: "pre-hackhaton",
  storageBucket: "pre-hackhaton.appspot.com",
  messagingSenderId: "797706320662",
  appId: "1:797706320662:web:7731e73f5201b9cae3ae37"
};
  
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

  
export {
app,
auth,
db,
storage,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
doc,
setDoc,
serverTimestamp,
collection,
getDocs,
getDoc,
query,
orderBy,
limit,
deleteDoc,
addDoc,
updateDoc,
onAuthStateChanged,
ref,
uploadBytesResumable,
getDownloadURL,
signOut
};


// add data with firebase uniqueid
// try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }f
  


// Add data to Firestore code with custom uniqeid
// await setDoc(doc(db, "cities", "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   });


// time stamp code
// timestamp: serverTimestamp()


// code for get all data without unique id
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });


// code for get data from firestore in uinqueid
// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   console.log("No such document!");
// }


// code to bring data in descending order and also in limit
// const q = query(citiesRef, orderBy("name", "desc"), limit(3));


// code to bring data in asscending order and also in limt
// const q = query(citiesRef, orderBy("name"), limit(3));


// code to delete data in firestore with uniqueid
// await deleteDoc(doc(db, "cities", "DC"));


// code to update document in firestore
// const washingtonRef = doc(db, "cities", "DC");
// await updateDoc(washingtonRef, {
//   capital: true
// });


// code for sign up code with email and password
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });


// code for sign in with email and password
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });


// check if current user has sign in 
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
//       const uid = user.uid;
//       // ...
//     } else {
//       // User is signed out
//       // ...
//     }
//   });




// code to upload files on storage
// /function fooone() {

//  var imagefile = document.querySelector('.fileupload')   
// const storageRef = ref(storage, `image/${imagefile.files[0].name}`);
// console.log(imagefile.files[0].name);

// const uploadTask = uploadBytesResumable(storageRef, imagefile.files[0]);

// uploadTask.on('state_changed', 
//   (snapshot) => {
    
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     // console.log('Upload is ' + progress + '% done');
//     switch (snapshot.state) {
//       case 'paused':
//         console.log('Upload is paused');
//         break;
//       case 'running':
//         console.log('Upload is running');
//         break;
//     }
//   }, 
//   (error) => {
//     console.log(error);
//   }, 
//   () => {
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log('File available at', downloadURL);
//     });
//   }
// );
// }

// var foobtn = document.querySelector('#foobtn')
// foobtn.addEventListener('click', fooone);




// code to sign out the person
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
