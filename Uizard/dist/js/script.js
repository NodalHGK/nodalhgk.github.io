const slider1 = tns({
  container: '.promo__slider',
  items: 5,
  slideBy: 'page',
  autoplay: true,
  nav: false,
  seed: 300,
  autoplayTimeout: 0,
  loop: true,
  controlsContainer: false,
  controls: false,
  autoplayButtonOutput: false,
  gutter: 30,
  autoWidth: true,
});
const sliders = document.querySelectorAll('.reviews__slider');
const slider = tns({
  container: '.reviews__slider',
  items: 5,
  slideBy: 'page',
  autoplay: true,
  nav: false,
  seed: 300,
  autoplayTimeout: 0,
  loop: true,
  controlsContainer: false,
  controls: false,
  autoplayButtonOutput: false,
  autoWidth: true,
  axis: "vertical",
});

