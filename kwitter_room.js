
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBsMDB71-mjLPQ-IXnBgbVOFlijru5Iypo",
    authDomain: "kwitter-a4bf8.firebaseapp.com",
    databaseURL: "https://kwitter-a4bf8-default-rtdb.firebaseio.com",
    projectId: "kwitter-a4bf8",
    storageBucket: "kwitter-a4bf8.appspot.com",
    messagingSenderId: "631376993522",
    appId: "1:631376993522:web:012ac83611b0da5947046b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+ "</div><hr>";
document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}  

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function Chat() {
    window.location = "chat.html";
}

function Game() {
    window.location = "Game.html";
}


