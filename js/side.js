function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
    document.querySelector('.toggle-button .green').classList.toggle('white');
}

const menu = document.querySelector('#sidebar ul');

menu.addEventListener('mouseover', e => {
    if (e.target.classList.contains('fa')){
        e.target.style.opacity = .2;
        e.target.nextElementSibling.style.opacity = 1;
    }
});


menu.addEventListener('mouseout', e => {
    if (e.target.classList.contains('fa')) {
        e.target.style.opacity = 1;
        e.target.nextElementSibling.style.opacity = 0;
    }
});

(function ($) {

    "use strict";
    
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