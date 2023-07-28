const firebaseConfig = {
    apiKey: "AIzaSyCe_059iDsKxdiE2f6mt-IGsSbMf2F02UE",
    authDomain: "let-chat-web-app-cda5d.firebaseapp.com",
    databaseURL: "https://let-chat-web-app-cda5d-default-rtdb.firebaseio.com",
    projectId: "let-chat-web-app-cda5d",
    storageBucket: "let-chat-web-app-cda5d.appspot.com",
    messagingSenderId: "154661682185",
    appId: "1:154661682185:web:0fe4b71151241391c2ccd8"
  };
    
    firebase.initializeApp(firebaseConfig);

User_name=localStorage.getItem("User_name");
    room_name=localStorage.getItem("room_name");

    function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:User_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";


    }
