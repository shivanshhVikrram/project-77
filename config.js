import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD8IZLnteCCbwScxKX9EH44vFjFyHYbx10",
  authDomain: "barter-system-7dd4c.firebaseapp.com",
  databaseURL: "https://barter-system-7dd4c.firebaseio.com",
  projectId: "barter-system-7dd4c",
  storageBucket: "barter-system-7dd4c.appspot.com",
  messagingSenderId: "194901605734",
  appId: "1:194901605734:web:3c265339284ca079341ca7"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
