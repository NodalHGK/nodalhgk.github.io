const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  autoplayButtonOutput: false,
  speed: 1000,
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

(function($) {
  $(function() {
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog__product').eq(i).toggleClass('catalog__product_active');
          $('.catalog__list').eq(i).toggleClass('catalog__list_active');
        })
      });
    };

    toggleSlide('.catalog__details');
    toggleSlide('.catalog__back');

  });
  })(jQuery);

  const hiddenElements = document.querySelectorAll('.reviews__wrapper');

  function checkVisibility() {
    hiddenElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('reviews__wrapper_visible'); // Добавляем класс для появления
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);

  checkVisibility();
