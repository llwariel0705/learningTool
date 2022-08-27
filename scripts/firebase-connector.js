// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCfq2wQ-6Tz3EICVe2--mON-4S3hhI68Tw",
    authDomain: "best-learning-tool-818af.firebaseapp.com",
    projectId: "best-learning-tool-818af",
    storageBucket: "best-learning-tool-818af.appspot.com",
    messagingSenderId: "268096597912",
    appId: "1:268096597912:web:453c9a53a110e29e3a45ed",
    measurementId: "G-LGQ4KGTLJP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);