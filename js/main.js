$(document).ready(function(){
   $('.travel-places-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      prevArrow: '<div class="lft-arrow"><img src="img/ico/slim-left.png"></div>',
      nextArrow: '<div class="rt-arrow"><img src="img/ico/slim-right.png"></div',
   });
   
   //    $(".bookmark i").mouseenter(function(){
   //        $(this).addClass('fas').removeClass('far');
   //    });
   //    $(".bookmark i").mouseleave(function(){
   //       $(this).addClass('far').removeClass('fas');
   //    });

   // $(".bookmark").click(function(){
   //       $("i", this).toggleClass("fas far"); 
   //       $(".bookmark i").off("mouseleave");
   // });

   $(".bookmark").mouseenter(function() {
      $("i", this).addClass('fas').removeClass('far');
    });
    $(".bookmark").mouseleave(function() {
        if($("i", this).data('clicked')){
           $("i", this).off("mouseleave")
     }else{
      $("i", this).addClass('far').removeClass('fas');
     }
    });
    
    $(".bookmark").click(function() {
       if($("i", this).hasClass("fas")){
         //  ("i", this).addClass("fas");
       }
      $("i", this).data('clicked', true);
      $("i", this).toggleClass("far fas")
      /* $(".item").off("mouseleave"); */
    });

   //  main slider nav
   var visible = 0;
	function showSlide(){
      $(".main-slider-wrapper").hide();
      $(".main-slider-wrapper:eq(" + visible + ")").show();
   }
   $(".next-country").on("click", function(){
      if(visible == $(".main-slider-wrapper").length-1){
         visible = 0;
      }else{
         visible++;
      }
      showSlide();
   });
   $(".prev-country").on("click", function(){
      if(visible == 0){
         visible = $(".main-slider-wrapper").length-1; 
      }else{
         visible--;
      }
      showSlide();
   });

//animations
new WOW().init();


 });
 
