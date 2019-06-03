$(document).ready(function(){
   $('.travel-places-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      arrows: true,
      dots: true,
      autoplaySpeed: 2000,
   });
   
   // $(".bookmark").hover(function () {
   //       $("i", this).addClass('fas');
   // }, function () {
   //       $(this).removeClass('far');
   // });

   $(".bookmark").mouseover(function(){
      $("i", this).addClass('fas').removeClass('far');
    });
    $(".bookmark").mouseout(function(){
      $("i", this).addClass('far').removeClass('fas');
    });



 });

   // $("p").mouseover(function(){
   //    $("p").css("background-color", "yellow");
   //  });
   //  $("p").mouseout(function(){
   //    $("p").css("background-color", "lightgray");
   //  });


//  });