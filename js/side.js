
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active')
}

(function ($) {

    "use strict";

// Parallax Js
    function initParallax() {
        $('#service').parallax("50%", 50);
        $('#about').parallax("50%", 40);
        $('#portfolio').parallax("50%", 30);
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
    
})(jQuery);