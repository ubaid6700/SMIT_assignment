import {
    auth,
    db,
    serverTImestamp,
    collection,
    getDocs,
    addDoc,
    onAuthStateChanged,
    Signout
} from './firebaseConfig.js'

var checkifcurrentisloggedinornot = document.querySelector('.checkifcurrentisloggedinornot');

onAuthStateChanged(auth, async (user) => {
    console.log('user is log in');
    if (user) {
        console.log('log in');
        const uid = user.uid;
        console.log(onAuthStateChanged[0]);

        checkifcurrentisloggedinornot[0].inneerHTMl = '';
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log('document data', docSnap.data());
            checkifcurrentisloggedinornot[0].innerHTML = `<span class="logoutbtnrouteragainnagain">Logout <span class='ms-3'>${docSnap.data().signupFirstName} ${docSnap.data().signupLastName}</span></span>`
            fooone()
        }
        else {
            console.log("No such document!");
        }
    }
    else {
        // location.href = './index.html'
        checkifcurrentisloggedinornot[0].innerHTML = ''
        checkifcurrentisloggedinornot[0].innerHTML = '<span class="loginrouteragainnagain">Login</span>'
        fooone()
    }
});

const fooone = () => {
    var logout = document.querySelector('.logoutbtnrouteragainnagain');
    var login = document.querySelector('.loginrouteragainnagain');
    
    // Rest of your code for attaching event listeners
    if(logout){
        logout.addEventListener('click', () => {
            var one = confirm("Are you sure you want to logout")
            console.log("Logout Hogya");
            if(one == true){
                signOut(auth).then(() => {
                    // Sign-out successful.
                }).catch((error) => {
                    // An error happened.
                });
            }
        });
    }
        
    if(login){
        login.addEventListener('click', () => {
            location.href = './loginpage.html';
        });
    }
    
    var num = document.querySelector(".wanttopost");
    
    num.addEventListener('click', () => {
        location.href = './yourprofile.html';
    });
};