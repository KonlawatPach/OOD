const firebaseConfig = {
    apiKey: "AIzaSyCmFbafJEvQ-tPNuLgRxuHL4HAoENuW-e0",
    authDomain: "learning-outcome-142a2.firebaseapp.com",
    projectId: "learning-outcome-142a2",
    storageBucket: "learning-outcome-142a2.appspot.com",
    messagingSenderId: "141747473582",
    appId: "1:141747473582:web:4ac7969af3b227a400713f"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();