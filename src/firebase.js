import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDrWSuQM8DyaT_EPHNuylrHtqJ_utVfsY",
  authDomain: "discord-8a2f5.firebaseapp.com",
  databaseURL: "https://discord-8a2f5.firebaseio.com",
  projectId: "discord-8a2f5",
  storageBucket: "discord-8a2f5.appspot.com",
  messagingSenderId: "518889561466",
  appId: "1:518889561466:web:02b123737a342bf39dcac3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;