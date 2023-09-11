// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import  {getDatabase,ref, push  }  from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";


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
initializeApp(firebaseConfig);
const dbInstance = getDatabase();

let data = [];

const form = document.getElementById("submit");
console.log('button',form)
form.addEventListener("click", function(event){
  event.preventDefault()
  var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    if (!name || !message) return;
    document.getElementById('msg').innerHTML = "loading..."
    document.getElementById('text').innerHTML = ""
    document.getElementById('contact').classList.add("button--loading");
     const post = push(ref(dbInstance, 'messages'), {
       name: name,
       message: message,
    });
    post.then((res) => {

      data.push({name, message});
     
      document.getElementById('contact').classList.remove("button--loading");
      document.getElementById('text').innerHTML = "Contact Us";
      document.getElementById('submit').reset();
      document.getElementById('msg').style.display = 'block';
      document.getElementById('msg').innerHTML = "successful"
    }).catch((err) => {
      document.getElementById('msg').style.display = 'block';
      document.getElementById('msg').innerHTML = "failed"
      document.getElementById('contact').classList.remove("button--loading");
      document.getElementById('text').innerHTML = "Contact Us";
    })

    console.log(data)
     
});