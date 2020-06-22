$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

var join_button = document.getElementById("join-us")
join_button.onclick = function () {
    location.href = "join-us"
}

// toggle login logout
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


// check if user login or log out
const loggedOUT = document.querySelector('#logout');
const loggedIN = document.querySelector('#login');
console.log(loggedIN)
console.log(loggedOUT)

firebase.auth().onAuthStateChanged(function (user) {
    console.log(user)
    if (user) {
        loggedIN.style.display = 'block'
        loggedOUT.style.display = 'none'
    } else {
        loggedIN.syle.display = 'none'
        loggedOUT.style.display = 'block'
    }
})

function signOut() {
    firebase.auth().signOut()
    .then( function() {
        alert('signout success!!')
    })
}


