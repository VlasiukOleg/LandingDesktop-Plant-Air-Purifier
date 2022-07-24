

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startposition: 1,
    items: 3,
});

$('.slider__btn--prev').click(function () {
    
    owl.trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
});



