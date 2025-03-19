const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  autoplayButtonOutput: false,
  speed: 3000,
  controls: false,
  navPosition: "bottom",
  responsive: {
    1051: {
      nav: false,
    },
    1050: {
      nav: true,
    }
  }
});
document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});
// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         dots: false,
//         speed: 1200,
//         slidesToShow: 1,
//         adaptiveHeight: false,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/left-arrow.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/right-arrow.png"></button>',
//         responsive: [
//           {
//             breakpoint: 992,
//             settings: {
//               dots: true,
//               arrows: false,
//             }
//           }
//         ],

    
//       });
// });

