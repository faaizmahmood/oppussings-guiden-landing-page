$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 15,
      responsiveClass: true,
      autoplay: true,
      autoplayHoverPause: true,
      nav:true,
      navText:["←","→"],
      
      autoplayTimeout: 3000,
      
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 1,
          },
          1000: {
              items: 1,
          }
      }
  });
});