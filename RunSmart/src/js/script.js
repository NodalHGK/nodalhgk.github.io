
const slider1 = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  autoplayButtonOutput: false,
  speed: 1000,
  controls: false,
  navPosition: "bottom",
  preventScrollOnTouch: 'force',
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
  slider1.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
    slider1.goTo('next');
});

const sliders = document.querySelectorAll('.catalog__inner');

sliders.forEach((sliderContainer, index) => {
  const slider2 = tns({
    container: sliderContainer,
    items: 1,
    slideBy: 'page',
    autoplay: false,
    autoplayButtonOutput: false,
    speed: 1000,
    controls: false,
    nav:false,
    preventScrollOnTouch: 'force'
  });
  document.querySelector(`.prev-second[data-index="${index}"]`).addEventListener('click', function () {
    slider2.goTo('prev');
  });
  document.querySelector(`.next-second[data-index="${index}"]`).addEventListener('click', function () {
      slider2.goTo('next');
  });
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
    // Modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    //Close
    $('.modal__close').on('click', function(){
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    //Mini
    $('.button_catalog').on('click', function(){
      $('.overlay, #order').fadeIn('slow');
    });
    // Меняем описание в карточке    
    $('.button_catalog').each(function(i) {
      $(this).on('click', function () {
          $('#order .modal__descr').text($('.catalog__subtitle').eq(i).text());    
      });
    });
    //Валидация форм
    function valideForms(form){
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста введите свое имя",
            minlength: jQuery.validator.format("Минимальное кол-во символов {2}")
          },
          phone: "Пожалйуста введите свой телефон",
          email: {
            required: "Пожалуйста введите свой E-mail",
            email: "Ваш почтовый адрес должен иметь формат name@domain.com"
          }
        }
      });
    };

    valideForms('#consultation-form');
    valideForms('#consultat form');
    valideForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-9999");

    $('form').submit(function(e) {
      e.preventDefault();

      if (!$(this).valid()) {
        return;
      }

      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        $('#consultat, #order').fadeOut();
        $('.overlay, #thanks').fadeIn();
        $('form').trigger('reset');

      });
      return false;
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
    
    $("a[href^='#']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
  });
  })(jQuery);

  const hiddenElements = document.querySelectorAll('.reviews__wrapper' );

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
