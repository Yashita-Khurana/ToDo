  import firebase from 'firebase';
  import 'firebase/firestore';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD5anKqBUBclCrtgNOlXNY-wcQhFFAgLqQ",
  authDomain: "todo-app-f6a8c.firebaseapp.com",
  projectId: "todo-app-f6a8c",
  storageBucket: "todo-app-f6a8c.appspot.com",
  messagingSenderId: "72003955682",
  appId: "1:72003955682:web:8369f546083e529fc767bb",
  measurementId: "G-D6W94RDSTQ"
  });


  const db = firebaseApp.firestore();

  export default db ;
