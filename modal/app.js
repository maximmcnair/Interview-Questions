$(function() {

    //gets button and modal content by checking for comments (using regex) and then wraps them in divs.
    //this was done so that elements could be identified without changing the HTML mark-up but it is far from ideal.
    var html = $('body').html();
        html = html.replace(/<!-- Modal Content Start -->([\s\S]*)<!-- Modal Content End -->/, "<div id='dialog'>$1</div>");
        html = html.replace(/<!-- Modal Trigger -->([\s\S]*)<\/button>/, "<div id='dialog-button'>$1</div>");
    $('body').html(html);

    //uses the jQuery UI dialog plugin to set up the modal
    var dialog = $('#dialog').dialog({
        modal: true,
        resizable: false,
        draggable: false,
        autoOpen: false,
        dialogClass: 'reusable-modal',
        open: function() {
            $(".ui-widget-overlay").bind("click", function() {
                $("#dialog").dialog("close");
            });
        },
        show: {
            effect: "fade",
            duration: 100
        },
        hide: {
            effect: "fade",
            duration: 100
        }
    });

    //event handler to open modal when button clicked
    $("#dialog-button button").click(function() {
        dialog.dialog("open");
    });

});