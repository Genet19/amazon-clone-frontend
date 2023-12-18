// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC0lrLRDiVdsCFMDzHlTEMerebuErx1sKM",
	authDomain: "clone-909a6.firebaseapp.com",
	projectId: "clone-909a6",
	storageBucket: "clone-909a6.appspot.com",
	messagingSenderId: "820392428719",
	appId: "1:820392428719:web:b45a9c93d094fe83f7005a",
	measurementId: "G-KFP4BDT8YM"
};

// Initialize Firebase

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db,auth}