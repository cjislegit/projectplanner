import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyDJum5zLa_bNXUju7zlEqtaYppIwlcfA5M',
  authDomain: 'projectplanner-38589.firebaseapp.com',
  databaseURL: 'https://projectplanner-38589.firebaseio.com',
  projectId: 'projectplanner-38589',
  storageBucket: 'projectplanner-38589.appspot.com',
  messagingSenderId: '643308481505',
  appId: '1:643308481505:web:25f9966b102a4b8c'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
