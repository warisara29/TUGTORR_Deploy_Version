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

//forget password
function forgetPassword() {
        var email = document.getElementById('email').value
        firebase.auth().sendPasswordResetEmail(email).then(function() {
            alert('password reset email sent!')
        }).catch(function(error) {
            var errerCode = error.code
            var errorMessage = error.message
            if (errorCode == 'auth/invalid-email') {
                alert(errorMessage)
            } else if (errorCode == 'auth/use-not-found') {
                alert(errorMessage)
            }
            console.log(error)
        })
}