
$(document).ready(function () {

    $('button.close-popup').click(function () {
        $('.price_compare_popup').css('display', 'none');
    });

    $('a.show-popup').click(function () {
        $('.price_compare_popup').css('display', 'block');
    });

    $('.owl-carousels').owlCarousel({

        nav: true,
        margin: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            400: {
                items: 2,
                nav: true
            },
            600: {
                items: 4,
                nav: true
            },
            1000: {
                items: 6,
                nav: true,
                dots: true
            }
        }
    });

    $('.items-8').owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 4,
                nav: true
            },
            1000: {
                items: 8,
                nav: true,
                loop: true
            }

        }
    });
    $('.owl-nav').removeClass('disabled');

});

