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
var frequency="";
var nextArrival="";
var minutesAway="";

// // At the initial load, get a snapshot of the current data.
// database.ref().on("value", function(snapshot) {

// 	// Change the HTML to reflect the value
//     $("#trainNameCurrent").html(trainName);
//     $("#destinationCurrent").html(destination);
//     $("#frequencyCurrent").html(frequency);
//     $("#arrivalCurrent").html(nextArrival);
//     $("#minAwayCurrent").html(minutesAway);

//     console.log(snapshot.val().destination);

// }, function(errorObject){
// 	console.log("The read failed: " + errorObject.code);
// });

database.ref().on("child_added", function(childSnapshot) {
		// Change the HTML to reflect the value
    $("#trainNameCurrent").html(trainName);
    $("#destinationCurrent").html(destination);
    $("#frequencyCurrent").html(frequency);
    $("#arrivalCurrent").html(nextArrival);
    $("#minAwayCurrent").html(minutesAway);

    console.log(childSnapshot.val().destination);

}, function(errorObject){
	console.log("The read failed: " + errorObject.code);
});


$("#run-search").on("click", function(){

	event.preventDefault();
	 var trainName=$("#search-term").val().trim();
	 var destination=$("#destination-input").val().trim();
	 var frequency=$("#frequency-input").val().trim();
	 var nextArrival=$("#train-time-input").val().trim();

	 console.log(trainName)

	// Save new value to Firebase
  	database.ref().push({
    trainName: trainName,
    destination: destination,
    frequency: frequency,
    nextArrival: nextArrival,
    minutesAway: minutesAway
 	});

  	// Log the value of clickCounter
  	console.log(trainName);
  	console.log(destination);
  	console.log(frequency);

  	// Change the HTML Values
  $("#trainNameCurrent").html(trainName);
  $("#destinationCurrent").html(destination);
  $("#frequency").html(frequency);
  $("#arrivalCurrent").html(destination);
  $("#minAwayCurrent").html(minutesAway);
});