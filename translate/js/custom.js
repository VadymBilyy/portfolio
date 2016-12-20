 $(function(){
      //--------------WOW animate.css-------------------------------
      (function(){new WOW().init();})()

      //-----------------------typedJs------------------------------
        $(".js-typed-2").typed({
          strings: ["качество и профессионализм", "qualidade e professionalismo"],
          typeSpeed: 10,
          startDelay:500,
          backSpeed: 0,
          backDelay: 2000,
          loop: true,
          contentType: 'html',
          showCursor: true,
          cursorChar: "|"
        });


      /*-----adding img in document list------------------*/
        var icon = $("<i class='fa fa-arrow-circle-right' aria-hidden='true'></i>");
        $(".documents li").prepend(icon);

      /*-------------google-map---------------------------*/
        (function(){
          var map;
          
          function initMap() {
            var myLatLng = {lat: 40.6161771, lng: -8.6247532};
            map = new google.maps.Map(document.getElementById('map'), {
              center: myLatLng,
              zoom: 12,
              scrollwheel: false,
            });

            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'Translate center\nJunta de freguesia de sao bernardo'
            });
          }
          
          initMap();

        })();
    /*---------------------Links rediretion---------------------------*/
    $(".navbar-right li a").on("click", function(e){
      e.preventDefault();
      var id = $(this).attr("href");
      var idOffset = $(id).offset().top - 20;
      $("html, body").animate({
        scrollTop: idOffset
      }, 500);
    });






      });//jQuery end