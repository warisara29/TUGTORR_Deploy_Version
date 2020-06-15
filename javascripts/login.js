const firebaseConfig = {
    apiKey: "AIzaSyBTsuGF9QEwGQDM1F_4nn2EpMgh5maLNWQ",
    authDomain: "tugtorr-691a5.firebaseapp.com",
    databaseURL: "https://tugtorr-691a5.firebaseio.com",
    projectId: "tugtorr-691a5",
    storageBucket: "tugtorr-691a5.appspot.com",
    messagingSenderId: "1048933698438",
    appId: "1:1048933698438:web:4476a50309f38b4af6fa07"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// sign up function
var login = document.getElementById("login");

login.addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){
        console.log("sigin successfully")
        window.location = 'index.html'
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });


    console.log(email)
    console.log(password)
})

//sign in with facebook
var provider = new firebase.auth.FacebookAuthProvider();

function facebook_login() {
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token)
        console.log(user)
    }).catch(function(error) {
        console.log(error.code)
        console.log(error.message)
    })
}
 
