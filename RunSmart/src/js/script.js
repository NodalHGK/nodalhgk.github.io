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


