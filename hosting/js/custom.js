$(function() {



    /* Smooth scroll to Plans Block
    ====================================*/

    $("#js-get-started").on("click", function(e) {

        e.preventDefault();
        var plansOffset = $("#js-plans").offset().top;

        $("html, body").animate({
            scrollTop: plansOffset
        }, 500);

    });




    /* Fixed header when scroll
    ====================================*/

    var headerH = $("#js-header").height(),
        navH = $("#js-nav-container").innerHeight();

    $(document).on("scroll", function() {

        var documentScroll = $(this).scrollTop();

        if(documentScroll > headerH) {
            $("#js-nav-container").addClass("fixed");

            $("#js-header").css({
                "paddingTop": navH
            });
        } else {
            $("#js-nav-container").removeClass("fixed");
            $("#js-header").removeAttr("style");
        }

    });




    /* Smooth scroll to the pages block
    ====================================*/

    $("#js-nav a").on("click", function(e) {

        e.preventDefault();

        var currentBlock = $(this).attr("href"),
            currentBlockOffset = $(currentBlock).offset().top;

        $("html, body").animate({
            scrollTop: currentBlockOffset - 20
        }, 500);

    });




    /* Modals
    ====================================*/

    $(".js-modal").each(function() {
        var modalWidth = $(this).innerWidth() / 2;

        $(this).css({
            "marginLeft": "-" + modalWidth + "px"
        });
    });

    $(".js-show-modal").on("click", function(e) {

        e.preventDefault();

        var currentModal = $(this).attr("href");

        $(currentModal).fadeIn(500);
        $("body").append("<div class='overlay' id='js-overlay'></div>").addClass("open-modal");

    });


    $(".js-modal-close").on("click", function(e) {

        e.preventDefault();
        $(".js-modal").fadeOut(100);
        $("body").removeClass("open-modal");
        $("#js-overlay").remove();

    });


    $("body").on("click", "#js-overlay", function() {
        $(".js-modal").fadeOut(100);
        $("body").removeClass("open-modal");
        $("#js-overlay").remove();
    });




    /* FAQ
    ========================*/

    /*$(".js-faq-title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this);

        if( !$this.hasClass("active") ) {
            $(".js-faq-content").slideUp();
            $(".js-faq-title").removeClass("active");
        }

        $this.toggleClass("active");
        $this.next().slideToggle();

    });*/


    $(".js-faq-title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this),
            answerId = $this.attr("href"),
            questionParent = $this.parents(".faq");

        questionParent.toggleClass("test");

        if( !$this.hasClass("active") ) {
            $(".js-faq-content").slideUp();
            $(".js-faq-title").removeClass("active");
        }

        $this.toggleClass("active");
        $(answerId).slideToggle();

    });



    /* Popup
    ========================*/

    $(".js-popup-hover").hover(function() {

        var $this = $(this),
            popupId = $this.attr("href");

        $(popupId).fadeIn();


    }, function() {

        $(".js-popup").fadeOut();
    }, 200);



    /* Company Blog text toggle
    ========================*/

    $(".js-read-more").on("click", function(e) {

        e.preventDefault();

        var $this = $(this),
            text = $this.text();

        if( text == "Read More" ) {
            $this.text("Hide");
        } else {
            $this.text("Read More");
        }

        $(this).prev(".js-blog-content").toggleClass("hidden");

    });





    /* Slick.js http://kenwheeler.github.io/slick/
    ========================*/

    $('#js-testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: false
    });


    $(".js-slider-prev").on("click", function() {
        $('#js-testimonials-slider').slick("slickPrev");
    });

    $(".js-slider-next").on("click", function() {
        $('#js-testimonials-slider').slick("slickNext");
    });



    /* WOW.js https://github.com/matthieua/WOW
    ========================*/

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       150,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();




    /* Placeholders https://github.com/mathiasbynens/jquery-placeholder
    ========================*/


    $('input, textarea').placeholder();






    /* Counter Up https://github.com/bfintal/Counter-Up
    ========================*/
    $('.js-counter-comments').counterUp({
        delay: 10,
        time: 1500
    });


    $('.js-counter-likes').counterUp({
        delay: 10,
        time: 3000
    });





    /* Typed https://github.com/mattboldt/typed.js
    ========================*/

    $(".js-typed").typed({
        strings: ["Strength in equality.The power of dreams", "Second sentence."],
        typeSpeed: 40,
        backSpeed: 0,
        backDelay: 800,
        loop: true,
        contentType: 'html',
        showCursor: true,
        cursorChar: "|",
    });



    /* iCheck https://github.com/fronteed/icheck
    ========================*/

    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-red',
        radioClass: 'iradio_flat-red',
    });

    $('.js-rules').on('ifChecked', function(event){
        $(".js-modal-close").removeAttr("disabled");
    });

    $('.js-rules').on('ifUnchecked', function(event){
        $(".js-modal-close").attr("disabled", "disabled");
    });

    $('.js-rules').on('ifToggled', function(event){
        $(".js-modal-close").toggleClass("active");
    });



    $('.js-check-all').on('ifClicked', function(event){

        if( $(this).is(":checked") ) {
            $(".js-filter-group input").iCheck('uncheck');
        } else {
            $(".js-filter-group input").iCheck('check');
        }

    });

    $('.js-filter-group input').on('ifUnchecked', function(event){
        $(".js-check-all").iCheck('uncheck');
    });





});
