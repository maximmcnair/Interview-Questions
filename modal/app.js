$(document).ready(function () {

    //Modal popup
	//Activate modal when button is pressed
    $('.modal_trigger').click(function(){
	
          //get the number (ID) of the modal window and store it in the name attribute of the trigger
		  var modal_num = $(this).attr('name');
  
          //call function to show the modal 
		  show_modal(modal_num);
		  
    });
	
	$('.close_modal').click(function(){  
  
		//call function to close the modal by clicking anywhere on the overlay
		close_modal();
  
    });
	
});

function close_modal() {  
  
	//hide the modal popup
    $('.modal_popup').fadeOut(600);
    //hide the overlay
    $('#modal_overlay').fadeOut(600);  
  
}  

function show_modal(modal_num) {  
  
    $('#modal_overlay').css({ 'display' : 'block', opacity : 0});  //set the modal overlay opacity to 0 so we can fade it into view next
    $('.modal_popup').css({'display' : 'block', opacity : 0}); //set the modal popup opacity to 0 so we can fade it into view next
        
	//fade in the overlay to 80% opacity
    $('#modal_overlay').fadeTo(600, 0.8);
	//fade in popup
    $('.modal_popup').fadeTo(600, 1);
  
    //show the modal window  
    $('#'+modal_num).fadeIn(600);  
  
}  



