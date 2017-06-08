// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzOhS0A9w8TsHQBuLi5ENjPtVpcgkEKgg",
    authDomain: "train-scheduler-784fe.firebaseapp.com",
    databaseURL: "https://train-scheduler-784fe.firebaseio.com",
    projectId: "train-scheduler-784fe",
    storageBucket: "train-scheduler-784fe.appspot.com",
    messagingSenderId: "1071471997153"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

//inital values
var trainName="";
var destination="";
var firstTrain="";
var frequency="";

//Capture click button
$("#run-search").on("click", function(event){
    event.preventDefault();

//Grab values from text boxes
trainName=$("#train-name").val().trim();
destination=$("#destination-input").val().trim();
firstTrain=$("#train-time-input").val().trim();
frequency=$("#frequency-input").val().trim();

// Code for handling the push
database.ref().push({
  trainName: trainName,
  destination: destination,
  firstTrain: firstTrain,
  frequency: frequency
    });
});

// Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
 database.ref().on("child_added", function(childSnapshot) {

 // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().trainName);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().firstTrain);
    console.log(childSnapshot.val().frequency);

  // full list of items to the well
  $("#new-data").append(
  		"<tr><td id='trainName'> " + childSnapshot.val().trainName +
     	"</td> <td><span id='destination'> " + childSnapshot.val().destination +
     	"</td> <td></span><span id='frequency'> " + childSnapshot.val().frequency +
     	"</td> <td></span><span id='firstTrain'> " + childSnapshot.val().firstTrain +   	 
     	"<td> </span></tr>");
});