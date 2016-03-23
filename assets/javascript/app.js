// link to firebase
var trainSchedule = new Firebase("https://train-scheduler.firebaseio.com/");

// 2. Button for adding train
$("#addTrainBtn").on("click", function(){

	// Takes user input value and trims it
	var trainName = $("#trainName").val().trim();
	var trainDestination = $("#trainDestination").val().trim();
	var firstTrain = moment($("#firstTrain").val().trim(), "HH:mm").format("HHmm");
	var trainFrequency = $("#trainFrequency").val().trim();

	// variables to add new train data
	var newTrain = {
		name:  trainName,
		destination:  trainDestination,
		first: firstTrain,
		frequency:  trainFrequency
	}

	// Uploads to firebase
	trainSchedule.push(newTrain);

	// Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.destination); 
	console.log(newTrain.first);
	console.log(newTrain.frequency);

	// Alert when new train added
	alert("New train schedule added");

	// Clears all text boxes when done adding
	$("#trainName").val("");
	$("#trainDestination").val("");
	$("#firstTrain").val("");
	$("#trainFrequency").val("");

	// Prevents moving to new page
	return false;
});

// Adds info to page
trainSchedule.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Stores everything into a variable
	var trainName = childSnapshot.val().name;
	var trainDestination = childSnapshot.val().destination;
	var firstTrain = childSnapshot.val().first;
	var trainFrequency = childSnapshot.val().frequency;

	// Logs everything to console
	console.log(trainName);
	console.log(trainDestination);
	console.log(firstTrain);
	console.log(trainFrequency);
});
