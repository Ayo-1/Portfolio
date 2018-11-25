function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active')
}

(function ($) {

    "use strict";

    // Projects Slider
    $('.owl-project').owlCarousel({
        animateOut: 'fadeOut',
        loop: true,
        autoplayHoverPause: false,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            900: {
                items: 3,
            }
        }
    });

    // Parallax Js
    function initParallax() {
        $('#about').parallax("50%", 50);
        $('#service').parallax("50%", 40);
        $('#projects').parallax("50%", 30);
        $('#contact').parallax("50%", 10);
        }
    initParallax();
        
    // smoothscroll js
    $(function() {
        $('#home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

    // scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });



    
})(jQuery);