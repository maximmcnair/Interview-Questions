$(document).ready(function () {


    //Modal popup
	//Activate modal when button is pressed
    $('#modal_trigger').click(function(){
        $('#modal_overlay').fadeIn('fast',function(){ 
            $('#modal_popup').css('display', 'block'); //Overwrite CSS rule to display the modal
        });
    });
	
	//Close modal when button is pressed
    $('#boxclose').click(function(){
        $('#modal_popup').css('display', 'none'); //Overwrite CSS rule to close the modal
        $('#modal_overlay').fadeOut('fast');
     
    });
	
});