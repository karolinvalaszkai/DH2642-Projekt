// Import the Firebase modules
import firebase from 'firebase';

// Initalize and export Firebase.
firebase.initializeApp({
  apiKey: "AIzaSyAQ00JZHT0IUIltxU6kUT9TXbm8ACBZjOg",
  authDomain: "dh2642-projekt.firebaseapp.com",
  databaseURL: "https://dh2642-projekt.firebaseio.com",
  projectId: "dh2642-projekt",
});

const firestore = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

export { firebase, firestore };
