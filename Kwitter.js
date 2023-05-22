 var firebaseConfig = {
    apiKey: "AIzaSyBM-QCbqpTHDWyYhPYX4qRcQk9dd8tvn-M",
    authDomain: "chat-lab-fb06f.firebaseapp.com",
    databaseURL: "https://chat-lab-fb06f-default-rtdb.firebaseio.com",
    projectId: "chat-lab-fb06f",
    storageBucket: "chat-lab-fb06f.appspot.com",
    messagingSenderId: "55672382886",
    appId: "1:55672382886:web:b26ac2881d798e80d59b67"
  };
  
  
  firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";

}