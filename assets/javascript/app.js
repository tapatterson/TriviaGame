// Run the following after the browser loads
window.onload = function(){
	// Variables
	var intervalId;
	// Timer starts at 120 seconds
	var timer = 120;
	// Tracks questions answered correct and incorrect
	var numCorrect = 0;
	var numIncorrect= 0;

	// $("start").on("click", decrement);
	// $("stop").on("click", stop);

	// Once user presses start, activate the timer
	function start(){
		intervalId = setInterval(decrement,1000);
		// console.log(intervalId);
		// Post timer to html page
		$("#timeRemaining").html(timer);
	}
	// Run the timer down. Once gets to zero alert "Time is up"
	function decrement(){
		timer--;
		$("#timeRemaining").html("<h2>"Time Remaining:  + timer + "</h2>");
			timeUp();
			alert ("Sorry...Time is up!");
		}


	}
	// When time is up alert player and run the stop function
	function timeUp(){
		if (timer===0){
		alert("Sorry...Time's up!");
		stop();
		}
	}
}
 	// When the submit button is pressed, stop timer. Then calculate number correct and incorrect
 	$(".submit").on("click", function(){
 		timeUp();   
 	 	if ("choices").value==="true"{
 		numCorrect+++;
 	}

 	if ("choices").value==="false"{
 		numIncorrect+++;
 	}
 	
 
 	 })
 	// This function clears the timer and number correct/incorrect. It basically starts the game over
 	function stop(){
 		clearInterval(intervalId);
 	}


 	
 	
