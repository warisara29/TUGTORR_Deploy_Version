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


// login function
var login = document.getElementById("login");

login.addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var admin = "admin@admin.com"

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(){
        // init app
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var email = user.email;
                if (email == admin) {
                    alert("sign in successfully")
                    window.location.href = "admin.html"
                } else {
                    alert("sign in successfully")
                    window.location.href = "index.html"
                }
            } else {
                alert('error!!')
            }
        })
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
})

//login with google

function google_login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().useDeviceLanguage();
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        alert('SUCCESS!!')
        console.log('token is ' + token)
        console.log('user is '+ user)

        //window.location.href = "index.html"
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        alert('ERROR!!!!')
        console.log(errorCode)
        console.log(errorMessage)
        //window.location.href = "register.html"
      });
}

// login with facebook

function facebook_login() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().useDeviceLanguage();
    provider.setCustomParameters({
        'display': 'popup'
    });
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...

        alert('SUCCESS!!')
        console.log('token is ' + token)
        console.log('user is '+ user)

        window.location.href = "index.html"

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

function checkUser() {
    var check = firebase.auth().currentUser
    console.log("current user is " + check)
} 






 
