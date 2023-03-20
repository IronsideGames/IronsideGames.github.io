$(document).ready(function () {
    $(".picture").hide();
    $(".picture:first").fadeIn(1000);
    $(".picture").click(function () {
        $(this).fadeOut(1000);
        var next = ($(this).next().length) ? $(this).next() : $(".picture:first");
        next.fadeIn(1000);
    });
});