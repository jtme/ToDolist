$(document).ready(function() {
 	
 	var list_item = $('.item');
 	// turn item on and off 
	list_item.on('click', function(){ $(this).toggleClass("done"); });
	// remove on doubleclick
	list_item.on('dblclick', function(){ $(this).hide(); });
 	
 	// use enter to add items
	$('#input').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#input').click();
		};
	});	
	//click to add items
	  $('#input').click (function(){
	  	var add_value = $('input').val();
	  	var new_item = $("<li class=\"item\"><span>" + add_value + "</span></li>");
	  	var Alist = $('#id1 li').length;
		var Blist = $('#id2 li').length;
		
		if(add_value.length>0)
			{
			  			if (Alist > Blist) {
							new_item.appendTo('#id2'); 
						} 
						else {
							new_item.appendTo('#id1'); 
						}			
			}
			else {
				$('input').animate({'background-color': "#E56C75"}, 200);
				$('input').animate({'background-color': "#A6BBC5"}, 100);
			}
		$('input').val('');
	  });

 // list drag drop ?? between 2 ULs ??
$('#id1, #id2').sortable();

})