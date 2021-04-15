import firebase from "firebase/app";

var firebaseConfig = {
    apiKey: "AIzaSyCBy1meTKMYUKA19Fl0hA1Rz9SbJqiYXrg",
    authDomain: "chat-411a5.firebaseapp.com",
    databaseURL: "https://chat-411a5-default-rtdb.firebaseio.com",
    projectId: "chat-411a5",
    storageBucket: "chat-411a5.appspot.com",
    messagingSenderId: "724509450780",
    appId: "1:724509450780:web:a6a43afd8f032756ab75d9"
  };

export default firebase.initializeApp(firebaseConfig);