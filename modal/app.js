'use strict';

$(document).ready(function() {
		
		// Creating modal window 
    $('.modal').dialog({
  		bgiframe: true,
      autoOpen: false,
      modal: true,
      width: '600px',
      appendTo: '.wrapper',
      hide: { effect: 'fold', duration: 1000 },
      close: function(){
      	$('body').css('background', 'RGB(255, 255, 255)');
      }
    });

    // Showing modal window
    $('.popUp').on('click', function() {
    	$('body').css('background', 'RGB(40, 42, 54)');
    	$('.modal').dialog('open');

    	// Closing window 
    	$('.modal').bind('click', function() {
    		$(this).dialog('close');
    		$('body').css('background', 'RGB(255, 255, 255)');
    	});
    });

    // Custom closing the modal

    $('.closeModal').on('click', function() {
    	
    	$('.modal').dialog('close');
    });
});