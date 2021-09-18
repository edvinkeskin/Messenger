// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD98w1WQZ1U4zJjKqL-cwsYv16zsIQdZ58",
    authDomain: "messenger-4.firebaseapp.com",
    projectId: "messenger-4",
    storageBucket: "messenger-4.appspot.com",
    messagingSenderId: "960682339940",
    appId: "1:960682339940:web:ecbc5615f2dd49b5567971",
    measurementId: "G-T3C2R28FMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

class FirebaseHandler {
    writeUserData(userId, name, email, message) {
        set(ref(database, 'users/' + userId), {
            username: name,
            email: email,
            message: message
        });
    }

    sendMessage(sender, recipient, message) {
        let u1, u2;
        if (sender > recipient) {
            u1 = sender;
            u2 = recipient;
        } else {
            u1 = recipient;
            u2 = sender
        }

        let path_name = 'chats/' + u1 + "_" + u2
        set(ref(database, path_name), {
            sender: sender,
            recipient: recipient,
            message: message
        });
    }
}


//read
/*
const starCountRef = ref(database, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    updateStarCount(postElement, data);
});
 */



export default FirebaseHandler;
