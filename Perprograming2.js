/* */

var cohortArray = [ "scott", "kristy", "natalie", "charlie", "sam", "zach", "nathan", "paul", "anthony", "liz", "eric", "jeremy", "chris", "brooks", "altamir", "amber", "joe", "kenzie", "matthew", "robby", "mark","scott"]
var revealed = []
$(document).ready(function(){
	//console.log("yup");
	
	$('#container').append("<button class = 'button-click'>Create</button>");
	$('#container').on('click','.button-click',buttonClick);
	$('#container').on('click','.remove',buttonRemove);

	//for each student in the cohortArray,
	for (var i = 0; i < cohortArray.length;i++) {

		// embed the student name in a paragraph and a div
		//append the whole thing to #container div 
		$('#container').append('<div id=' + i + '> <p>' + cohortArray[i] + '</p> </div>');
		//I've assigned a number id - i - to each new div so we
		//can track which div is next in line to be revealed via slideDown

		//hide the new div 
		$('#container').children().last().hide();

		//append a remove button to our new div, under the paragraph with the student name
		$('#container').children().last().append("<button class = 'remove'> Remove </button>");
	    
	}

//keep track of how many times the Create button is clicked
var counter = 0;

function buttonClick() {

	//slideDown to reveal the next student at the top of the list
	// assign 
	if (cohortArray.length>counter) {
		$("#" + counter).slideDown(); 
		counter++;
	} else {
		location.reload();
	}
	
}

function buttonRemove (){
	//fade out the parent div containing the clicked Remove Button
	$(this).parent().fadeOut();
}

});



// // Each time you click the button, you should reveal the next person in the array.
// // That person should be revealed via a slideDown animation.
// //


// // In addition to that person's name, also include a remove button.
// // Clicking on the remove button should fire off an 
// //animation that makes the person's name fade out (in addition to the button 
// 	//that was clicked).


// // If you click the 'create' button enough times, you will exhaust 
// //the list of people in it (basically, you get to the end of the array).
// // When this happens, remove EVERYONE from the DOM, and start the experience over.


// // })

// //  });


// // HARD MODE
// // Have people appear in a 'box' that has equal width and height. 
//The person's name should appear in the center of the box. 
//Style however you would like to make the 'box' appear, well, 'box-like'.

// // PRO MODE
// // Use .animate to not have the person fade out completely, 
//but down to 5%. Clicking on the button again should restore the 
//full opacity of that person.

// // Good luck and have fun!