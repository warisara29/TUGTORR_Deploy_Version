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

firebase.database().ref('Storage').once('value').then(function(snapshot){
  var name = snapshot.val().name
  var category = snapshot.val().category
  var description = snapshot.val().description
  var images = snapshot.val().images
  var price = snapshot.val().price

  console.log("name :" + name)
  console.log(category)
  console.log(description)
  console.log(images)
  console.log(price)
})



  