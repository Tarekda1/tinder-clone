import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDhCrdkLsH22gsp4dqEOsXufW1m-coPZvU',
	authDomain: 'tinder-clone-fcefa.firebaseapp.com',
	databaseURL: 'https://tinder-clone-fcefa.firebaseio.com',
	projectId: 'tinder-clone-fcefa',
	storageBucket: 'tinder-clone-fcefa.appspot.com',
	messagingSenderId: '68287753116',
	appId: '1:68287753116:web:ea6b4fdc211501751d7659',
	measurementId: 'G-JDV40J0DVJ'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
