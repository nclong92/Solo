// preloader
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut("slow");
})

// Team
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 1
            },
            992 : {
                items: 2
            }
        }
    });
});

// Progress Bars
$().ready(function () {
    $("#progress-elements").waypoint(function () {

        // alert('Hello waypoints');
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });

        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });
});

// Responsive Tabs
$().ready(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

// Portfolio
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

// Magnifier
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
});

// Testimonials
$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});

// Stats
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// Clients
$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});

// Navigation
// Show & hide white navigation
$(function () {

    showHideNav();

    $(window).scroll(function () {
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            $("#back-to-top").fadeIn();
        } else {
            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function() {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        // get section id like #home, #about, #work ...
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// Animation
$(function(){
    new WOW().init();
})