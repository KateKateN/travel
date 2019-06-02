$('.slider').slick({
	autoplay: true,
	// autoplaySpeed: 2000,
	// speed: 1000,
	// 3000 seconds
	// centerMode: true,
	// centerPadding: '25px',
	cssEase: 'ease-in-out',
	arrows: true,
	// fade: true,
	// draggable: false,
	infinite: false,
	edgeFriction: 0.3,
	pauseOnDotsHover: true,
	// // vertical: true
	// rows: 2,
	// slidesPerRow: 2
	slidesToShow: 2,
	  responsive: [
    {
      breakpoint: 768,
      settings: {
      	arrows: false,
        dots: true,
      	// centerMode: true,
      	// centerPadding: '48px',
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // ,
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2
    //   }
    // },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
