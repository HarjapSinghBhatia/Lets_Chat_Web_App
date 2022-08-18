// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC-Fr1kHKls0-nWPgqyErFzc2zCaFd2d5k",
  authDomain: "lets-chat-web-app-bdebd.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-bdebd-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-bdebd",
  storageBucket: "lets-chat-web-app-bdebd.appspot.com",
  messagingSenderId: "445740701425",
  appId: "1:445740701425:web:b4149bd50f65b132ccbb50"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
    
}



