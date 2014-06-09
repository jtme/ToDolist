$(document).ready(function() {
 
  	//create a function to add item to list. 
 	function addtolist(a) {
	  	//console.log("Original input: " + a);
		var clean_input = $('<div>').text(a).html();
		//console.log("Clean input: " + clean_input);
		var new_item = $("<li> <span class=\"item\">" + clean_input + "</span></li>");
		
		if(a.length>0)
			{new_item.appendTo('#list ul'); }
		else {
				$('input').animate({'background-color': "#E56C75"}, 200);
				$('input').animate({'background-color': "#A6BBC5"}, 100);
			}
		$('input').val('');
   }

 	var list_item = $('.item');
 	// turn item on and off 
	list_item.on('click', function(){ $(this).parent().toggleClass("done"); });
	// remove on doubleclick
	list_item.on('dblclick', function(){ $(this).parent().fadeOut(); });
 	// use enter to add items
	$('#input').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#input').click();
		};
	});	
	  $('#input').click (function(){
	  	
				function splitString(stringToSplit, separator) {
				  var arrayOfStrings = stringToSplit.split(separator);
				  for (var i=0; i < arrayOfStrings.length; i++){
					    console.log(arrayOfStrings[i]);
						addtolist(arrayOfStrings[i]);}
				}

				var origString = $('input').val()
				var comma = ",";

				splitString(origString, comma);
	  });
	$('#list ul').sortable();

})