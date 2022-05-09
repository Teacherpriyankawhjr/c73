import firebase from "firebase";

require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAghsCrXU-YHi-l7BU5OtNNYgSJogd1nXU",
  authDomain: "elib00.firebaseapp.com",
  projectId: "elib00",
  storageBucket: "elib00.appspot.com",
  messagingSenderId: "750754181390",
  appId: "1:750754181390:web:ad8a3222a2d156e2f3275f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();