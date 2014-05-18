$(document).ready(function() {



  // input field
  $('#input').click (function() {
 	
 	var add_value = $('input').val();

 	if(!$.trim(add_value)) {
			$('input').val('Item cannot be empty');
		} else {
			var Alist = $('#id1 li').length
			var Blist = $('#id2 li').length
			//figure out the logic where to add item
			    //if (Alist > Blist) 
			    //	alert('A')
			    	//var Activelist = "#id1"
			    //else
			    //	alert('B')
			    	//var Activelist = "#id2"
	var new_item = $("<li>" + "<span>" + add_value + "</span>" +"</li>");
		    new_item.appendTo('#id1');
		    new_item.slideDown();
		   	$('input').val("");

		};
  });

$('.col').sortable({ axis: "y" });
  	// on enter add to list

 // list drag drop

 // list on click mark 

})