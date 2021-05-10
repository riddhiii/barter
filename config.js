import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCdViwWbv_8S9vLMWdYfeIqqPnPhRowasY",
  authDomain: "barter-system-13540.firebaseapp.com",
  projectId: "barter-system-13540",
  storageBucket: "barter-system-13540.appspot.com",
  messagingSenderId: "1032038238623",
  appId: "1:1032038238623:web:97714c71138d8b8faa55aa"
};

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
