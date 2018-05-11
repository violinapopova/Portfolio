/* Mobile device side nav */

function openNav() {
    document.getElementById("mobileSideNav").style.width = "100px";
}

function closeNav() {
    document.getElementById("mobileSideNav").style.width = "0";
}

$('document').ready(function() {
    $('#showFirst').click( function() {
        var $div = $('#' + $(this).data('href'));
        $('.collapseFirst').not($div).hide();
        $div.slideToggle();
    });
});

$('document').ready(function() {
    $('#showSecond').click( function() {
        var $div = $('#' + $(this).data('href'));
        $('.collapseSecond').not($div).hide();
        $div.slideToggle();
    });
});
