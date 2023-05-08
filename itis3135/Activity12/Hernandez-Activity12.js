$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        captions: true,
        speed: 1000,
        pagerType: 'short',
        pause: 3000,
    });
});