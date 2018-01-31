// JavaScript Document

var movieData;
var movieChosen;
var eventData;
var eventChosen;

//Ticketmaster API
var ticketmasterURL = "";
var ticketmasterKey = "VFqKbEqAQRwPLtAKW0UynnLWlq3YTFkY";
var ticketmasterSecret = "X0iHZkGjS3HUf3Y1";

//Google Maps API
var gMapsDirKey = "AIzaSyB40cmHuwMhUBf1kD6wbqr9lXL4C6R4a5M";


// Initialize Firebase
var config = {
	apiKey: "AIzaSyDNzLkz1J-tdFkbsERtH1DGNOJy-QRDXMY",
	authDomain: "dinnermovieapi.firebaseapp.com",
	databaseURL: "https://dinnermovieapi.firebaseio.com",
	projectId: "dinnermovieapi",
	storageBucket: "",
	messagingSenderId: "658504571017"
};
firebase.initializeApp(config);

var database = firebase.database();