
var option_one = "";    //Initial value of first and second dropdown values to blank as nothing had been chosen
var option_two = "";

function myFunction() {
    document.getElementById("firstDropdown").classList.toggle("show"); //To show the first dropdown list
}

function secFunction() {
	document.getElementById("secondDropdown").classList.toggle("show"); //To show the second dropdown list
}

$(document).ready(function() {
$(".first_dropdown").click(function() {
	option_one = $(this).text();           //Once the first dropdown value had been clicked on, it will be saved to option_one
	$("#firstOne").text(option_one);       //and the current content in the first span text will be replaced.
	document.getElementById("firstDropdown").classList.toggle("show");
});

$(".second_dropdown").click(function() {
	option_two = $(this).text();           //The same goes for the second dropdown value, it will be saved to option_two
	$("#secondOne").text(option_two);      //and replace the second span class
	document.getElementById("secondDropdown").classList.toggle("show");
});

$('.first_dropdown, .second_dropdown').click( function() {
		console.log("done");
		if (option_one != "" && option_two != "") {         //Only search after both biter and bitee had been chosen
			$.getJSON("seed-data.json", function(data) {

			$.each(data, function (i, elem) {                //Search through seed-data.json
    			if (elem.biter === option_one && elem.bitee === option_two) { //Once the matching results had been found
    				$("#result").html("<p class=\"font_one p_margin\">found one!</p><a href="+elem.link+" class=\"for_links\">" + elem.headline + "...</a>"); //The result will be displayed
    				return false;
        		}

        		else { //If results are not found
              //Another result will be displayed
        			$("#result").html("<br/><p><span class=\"font_one\">as far as we know a </span>" + option_one + "<span class=\"font_one\"> has never bitten a </span>" + option_two + "<span class=\"font_one\"> .</span></p>");
        		}

			});
		});
	}


});

});
