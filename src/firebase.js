import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCUYu7DTsdzu_2pGxG0IPnoBkDmNQ5-7gQ",
    authDomain: "clone-c933e.firebaseapp.com",
    databaseURL: "https://clone-c933e.firebaseio.com",
    projectId: "clone-c933e",
    storageBucket: "clone-c933e.appspot.com",
    messagingSenderId: "1037959171425",
    appId: "1:1037959171425:web:bd704b79d0860dde4b0920"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }


