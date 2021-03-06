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

function signOut() {
    firebase.auth().signOut()
    .then( function() {
        alert('signout success!!')
        window.location.href = "login.html"
    })
}

//add product

function popupTest() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "block";
        }
    }
}

function upLoad() {

    const ref = firebase.storage().ref("product images")
    const file = document.querySelector("#image").files[0]
    const name = file.name

    const metadata = {
        contentType: file.type
    }

    const task = ref.child(name).put(file, metadata)

    task.then(snapshot => snapshot.ref.getDownloadURL())
    .then( url => {
        console.log(url)
         //get input value
        var name = document.getElementById("product-name").value
        var category = document.getElementById("category").value
        var images = url
        var description = document.getElementById("description").value
        var price = document.getElementById("price").value

        //push data to firebase project
        firebase.database().ref("Storage").push( {
            name: name,
            category: category,
            description: description,
            price: price,
            image: images      
        }).then( function() {
            alert("New product uploaded !")
        })
    })
}



