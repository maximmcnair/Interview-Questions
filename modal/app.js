$(document).ready(function(){

    modal = '.js-customModal-toggle';
    triggerShow = '.js-button-modalTrigger';
    triggerHide = '.js-customModal-toggle';

    $(triggerShow).on('click', function(){
        show(modal);
    });

    $(triggerHide).on('click', function(){
        hide(modal);
    });

});

function show(data){
    $(data).show();
}
function hide(data){
    $(data).hide();
}