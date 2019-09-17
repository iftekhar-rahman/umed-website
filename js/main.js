jQuery(document).ready(function($){


    //jQuery smooth scroll
    $('li.smooth-menu a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '100';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    $("li.smooth-menu").on("click", function() {
        $("li.smooth-menu").removeClass("active");
        $(this).addClass("active");
    });

    AOS.init({
        offset: 200,
        duration: 1000,
    });

    $(".header-area").sticky({ topSpacing: 0 });

    $(".menu-bars").on('click', function(){
        $('.mainmenu').addClass('active');
    });
    $(".close-btn, .mainmenu ul li a").on('click', function(){
        $('.mainmenu').removeClass('active');
        return false;
    });

    



    

    

});