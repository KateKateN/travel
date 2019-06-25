$(document).ready(function(){
   $('.travel-places-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      prevArrow: '<div class="lft-arrow"><img src="img/ico/slim-left.png"></div>',
      nextArrow: '<div class="rt-arrow"><img src="img/ico/slim-right.png"></div',
      responsive: [
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 4,
            //  slidesToScroll: 3,
            //  infinite: true,
            //  dots: true
           }
         },
         {
           breakpoint: 1000,
           settings: {
             slidesToShow: 3,
            //  slidesToScroll: 2
           }
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
            //  slidesToScroll: 1
           }
         }
         // You can unslick at a given breakpoint now by adding:
         // settings: "unslick"
         // instead of a settings object
       ]
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

   // animations
   new WOW().init();

   // map
   // function initMap(){
   //    var pos = {lat:49.842786, lng:24.027603};
   //    var opt = {
   //       center: pos,
   //       zoom: 14
   //       styles: [
   //          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
   //          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
   //          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
   //          {
   //            featureType: 'administrative.locality',
   //            elementType: 'labels.text.fill',
   //            stylers: [{color: '#d59563'}]
   //          },
   //          {
   //            featureType: 'poi',
   //            elementType: 'labels.text.fill',
   //            stylers: [{color: '#d59563'}]
   //          },
   //          {
   //            featureType: 'poi.park',
   //            elementType: 'geometry',
   //            stylers: [{color: '#263c3f'}]
   //          },
   //          {
   //            featureType: 'poi.park',
   //            elementType: 'labels.text.fill',
   //            stylers: [{color: '#6b9a76'}]
   //          },
   //          {
   //            featureType: 'road',
   //            elementType: 'geometry',
   //            stylers: [{color: '#38414e'}]
   //          },
   //          {
   //            featureType: 'road',
   //            elementType: 'geometry.stroke',
   //            stylers: [{color: '#212a37'}]
   //          },
   //          {
   //            featureType: 'road',
   //            elementType: 'labels.text.fill',
   //            stylers: [{color: '#9ca5b3'}]
   //          },
   //          {
   //            featureType: 'road.highway',
   //            elementType: 'geometry',
   //            stylers: [{color: '#746855'}]
   //          },
   //          {
   //            featureType: 'road.highway',
   //            elementType: 'geometry.stroke',
   //            stylers: [{color: '#1f2835'}]
   //          },
   //          {
   //            featureType: 'road.highway',
   //            elementType: 'labels.text.fill',
   //            stylers: [{color: '#f3d19c'}]
   //          },
   //          {
   //            featureType: 'transit',
   //            elementType: 'geometry',
   //            stylers: [{color: '#2f3948'}]
   //          },
   //          {
   //            featureType: 'transit.station',
   //            elementType: 'labels.text.fill',
   //            stylers: [{color: '#d59563'}]
   //          },
   //          {
   //            featureType: 'water',
   //            elementType: 'geometry',
   //            stylers: [{color: '#17263c'}]
   //          },
   //          {
   //            featureType: 'water',
   //            elementType: 'labels.text.fill',
   //            stylers: [{color: '#515c6d'}]
   //          },
   //          {
   //            featureType: 'water',
   //            elementType: 'labels.text.stroke',
   //            stylers: [{color: '#17263c'}]
   //          }
   //       ]
   //    };

   //    var map = new google.maps.Map(document.getElementById('map'), opt);

   //    var marker = new google.maps.Marker({
   //       position: pos,
   //       map: map,
   //       title: 'Hello World!',
   //       icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
   //       animation: google.maps.Animation.DROP,
   //    });
   //    marker.addListener('click', toggleBounce)

   //    var info = new google.maps.InfoWindow({
   //       content: "<h3>This is my plase</h3><p>Simple description</p>"
   //    });
   //    marker.addListener('click', function(){
   //       info.open(map, marker);
   //    });
   // }
   //    function toggleBounce() {
   //       if (marker.getAnimation() !== null) {
   //          marker.setAnimation(null);
   //       } else {
   //         marker.setAnimation(google.maps.Animation.BOUNCE);
   //       }
   //    }
   // initMap();
});
 
