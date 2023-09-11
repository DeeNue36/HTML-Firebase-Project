// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9oeT47pcT9nGeFmQBOiesj_spMkmxw8U",
  authDomain: "pavilion-f92c4.firebaseapp.com",
  databaseURL: "https://pavilion-f92c4-default-rtdb.firebaseio.com",
  projectId: "pavilion-f92c4",
  storageBucket: "pavilion-f92c4.appspot.com",
  messagingSenderId: "258984530011",
  appId: "1:258984530011:web:42bfdf92d6bc0481a52f7e",
  measurementId: "G-W20MV45X29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbInstance = getDatabase()

const button = document.getElementById("contact");
console.log('button',button)
button.addEventListener("click", function(event){
  event.preventDefault()
  const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    console.log(name);
     push(ref(dbInstance, 'messages'), {
        name: name,
       message: message,
    })
});