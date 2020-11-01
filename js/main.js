
   $(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

})
   $(document).ready(function () {
    // Super Slide
    $('#slides').superslides({
        play : 5000,
        animation : 'fade',
        pagination : true
    });

    // typed js 
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ['Web designer','Web Developer', 'Apps Developer'],
        typeSpeed: 40,
        loop: true,
        showCursor: false
      });
        //counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });  
        //Owl OwlCarousel
        $('.owl-carousel').owlCarousel({
            loop:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            }
        });
        
        // Easy Pie Chart
    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: 'white',
        trackColor: false,
        scaleColor: false,
        lineWidth : 4,
        size : 152,
        onStep:function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    // Smoth Scroll
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition-50}, "slow");
        });
        //fancy app
        $('[data-fancybox]').fancybox();
        //Sort and Filter
        //apply Filter
        $("#filters a").click(function() {

            $("#filters .current").removeClass("current");
            $(this).addClass("current");
    
            var selector = $(this).attr("data-filter");
    
            $(".items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 1500,
                    easing: 'linear',
                    queue: false
                }
            });
    
            return false;
        });


    });


