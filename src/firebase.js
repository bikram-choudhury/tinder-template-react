import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCurjA-ChUOrtOG70bQIrpt1cgOWwE-soU",
    authDomain: "tinder-clone-a8abd.firebaseapp.com",
    databaseURL: "https://tinder-clone-a8abd.firebaseio.com",
    projectId: "tinder-clone-a8abd",
    storageBucket: "tinder-clone-a8abd.appspot.com",
    messagingSenderId: "118984390952",
    appId: "1:118984390952:web:bbbbd61953b4593f66f81d",
    measurementId: "G-195PCGX0LZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;