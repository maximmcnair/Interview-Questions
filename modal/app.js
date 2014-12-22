'use strict';

$(document).ready(function() {
	
    $('.modal').dialog({
  		bgiframe: true,
      autoOpen: false,
      modal: true,
      hide: { effect: 'fold', duration: 1000 } 
    });

    $('.popUp').on('click', function() {
    	$('body').css('background', 'RGBA(40, 42, 54,0.7)');
    	$('.modal').dialog('open');
    	$('.modal').bind('click', function() {
    		$(this).dialog('close');
    		$('body').css('background', 'RGBA(255,255,255,1)');
    	});
    });
});