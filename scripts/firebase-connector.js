// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCVwudyPqSf5q7Z7DPJfuYaLidJomk1Ojc",
    authDomain: "best-learning-tool-49be7.firebaseapp.com",
    projectId: "best-learning-tool-49be7",
    storageBucket: "best-learning-tool-49be7.appspot.com",
    messagingSenderId: "628369169429",
    appId: "1:628369169429:web:41be390ffc6ec6baf9821c",
    measurementId: "G-0D4C6Z5D5K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
