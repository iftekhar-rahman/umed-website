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

    // var scrollLink = $('.scroll');

    // // Smooth Scrolling
    // scrollLink.click(function(e){
    //     e.preventDefault();
    //     $('body,html').animate({
    //         scrollTop: $(this.hash).offset().top
    //     }, 1000);
    //     $(".header-top").addClass("inheight");
    // });

    // $(window).scroll(function(){
    //     var scrollBarLocation = $(this).scrollTop();

    //     scrollLink.each(function(){
    //         var sectionOffset = $(this.hash).offset().top -60;

    //         if( sectionOffset <=  scrollBarLocation ){
    //             $(this).parent().addClass('active');
    //             $(this).parent().siblings().removeClass('active');
    //         }
    //     });
    // });

    $(".header-area").sticky({ topSpacing: 0 });


    // $(window).scroll(function(){
    //     if ($(this).scrollTop() > 0) {
    //        $('.header-area').addClass('sticky-header');
    //     } else {
    //        $('.header-area').removeClass('sticky-header');
    //     }
    // });

    // $('select').niceSelect();

    // homepage-slides
	// $(".homepage-slides").owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	nav: true,
	// 	dots: false,
    //     autoplay: false,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	// });

    

    // $("#range_49").ionRangeSlider({
    //     type: "single",
    //     min: 150,
    //     max: 250,
    //     from: 200,
    //     to: 250,
    //     prefix: "£",
    //     step: 1,
    //     onFinish: function(data) {
    //         maxValue = data.from;
    //         alert("Your Value: " + maxValue);
    //     }
    // });


    // $(".logo-carousel-wrap").owlCarousel({
    //     items: 5,
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         580: {
    //             items: 3,
    //             margin: 3,
    //             nav: false
    //         },
    //         720: {
    //             items: 4,
    //             margin: 3,
    //             nav: false
    //         },
    //         960: {
    //             items: 5
    //         },
    //         1140: {
    //             items: 6
    //         }

    //     }
    // });

    // $(".feature-carousel-wrap").owlCarousel({
    //     items: 4,
    //     loop: true,
    //     nav: true,
    //     dots: true,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //             margin: 0,
    //             nav: false
    //         },
    //         481: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         720: {
    //             items: 3,
    //             margin: 15,
    //             nav: false
    //         },
    //         960: {
    //             items: 3,
    //             margin: 25,
    //         },
    //         1140: {
    //             items: 4
    //         }

    //     }
    // });




	// $(".bodytype-carousel-wrap").magnificPopup({
	// 	type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
	// });




    

    

});