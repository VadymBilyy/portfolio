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
          cursorChar: "|",
        });


      /*-----adding img in document list------------------*/
        var icon = $("<i class='fa fa-arrow-circle-right' aria-hidden='true'></i>");
        $(".documents li").prepend(icon);
       
    /*---------------------Links rediretion---------------------------*/
    $(".navbar-right li a").on("click", function(e){
      e.preventDefault();
      var id = $(this).attr("href");
      var idOffset = $(id).offset().top - 20;
      $("html, body").animate({
        scrollTop: idOffset
      }, 500);
    });

  /*----------------form-validation-------------------------*/
  $("#ask-contact-form").validate({
    rules: {
      client_name: {
        required:true
      },
      client_phone: {
        required: true,
         digits: true
      }
    },
    messages: {
      client_name:{
        required: "Введите имя" 
      },
      client_phone: {
        required: "Введите e-mail"
      }
    },
    focusCleanup: true,
    focusInvalid: false,

  });
/*------------same hight for blocks-----------*/
   function setEqualHeight(columns){
        var tallestColumn = 0;
        columns.each(function(){
          var currentHeight = $(this).height();
          if (currentHeight > tallestColumn){ tallestColumn = currentHeight }
        });
        columns.height(tallestColumn);
    }
    
    setEqualHeight($(".offer-item"))
    


      });//jQuery end