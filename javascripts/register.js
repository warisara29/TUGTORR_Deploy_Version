var firebaseConfig = {
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
var signUp = document.getElementById("btn-register");

signUp.addEventListener("click", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirmPassword = document.getElementById("confirm-password").value

    if (password === confirmPassword) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
            // [START sendemailverification]
            firebase.auth().currentUser.sendEmailVerification().then(function() {
                // Email Verification sent!
                // [START_EXCLUDE]
                alert('Email Verification Sent!');
                // [END_EXCLUDE]
            });
            // [END sendemailverification]
          
            alert("congrates "+ name +",  sign up successfully!!")
            window.location = "login.html"
        }) 
        .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    }

    console.log(email)
    console.log(password)
})
