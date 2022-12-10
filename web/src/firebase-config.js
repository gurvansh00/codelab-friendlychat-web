/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBoBDfhDGU-SM2K4q9ZUpQUNta2DZmZZ60",
  authDomain: "athena-c87e1.firebaseapp.com",
  projectId: "athena-c87e1",
  storageBucket: "athena-c87e1.appspot.com",
  messagingSenderId: "258653281543",
  appId: "1:258653281543:web:0f1b82fd87d3b03d2339a2"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
