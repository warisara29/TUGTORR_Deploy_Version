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
              // Confirm the link is a sign-in with email link.
              if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
                // Additional state parameters can also be passed via URL.
                // This can be used to continue the user's intended action before triggering
                // the sign-in operation.
                // Get the email if available. This should be available if the user completes
                // the flow on the same device where they started it.
                var email = window.localStorage.getItem('emailForSignIn');
                if (!email) {
                  // User opened the link on a different device. To prevent session fixation
                  // attacks, ask the user to provide the associated email again. For example:
                  email = window.prompt('Please provide your email for confirmation');
                }
                // The client SDK will parse the code from the link for you.
                firebase.auth().signInWithEmailLink(email, window.location.href)
                .then(function(result) {
                  // Clear email from storage.
                  window.localStorage.removeItem('emailForSignIn');
                  // You can access the new user via result.user
                  // Additional user info profile not available via:
                  // result.additionalUserInfo.profile == null
                  // You can check if the user is new or existing:
                  // result.additionalUserInfo.isNewUser
                })
                .catch(function(error) {
                  // Some error occurred, you can inspect the code: error.code
                  // Common errors could be invalid email and invalid or expired OTPs.
                });
              }
                // Email Verification sent!
                // [START_EXCLUDE]
                alert('Email Verification Sent!, Please go to your email and verify you email');
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
