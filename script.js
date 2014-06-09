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

 	$('#list').on( 'click', '.item', function(){ $(this).parent().toggleClass("done"); });
 	$('#list').on( 'dblclick', '.item', function(){ $(this).parent().fadeOut(); });

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
				var comma = /[\n,\t]/;

				splitString(origString, comma);
	  });

	$('#list ul').sortable();

	$('a[href$="#"]').click(function(event) { event.preventDefault(); });


})