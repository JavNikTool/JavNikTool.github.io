(function($) {
    $(function() {
      
      $('ul.section-4__ul').on('click', 'li:not(.li-active)', function() {
        $(this)
          .addClass('li-active').siblings().removeClass('li-active')
          .closest('div.container').find('div.section-4__catalog').removeClass('catalog-active').eq($(this).index()).addClass('catalog-active');
      });
      //поп-ап окно
     
     $('.popup__close').on('click', function() {
      $('.wrapper, .popup').fadeOut('slow');
    });

    $('.section-4__order').each(function(i) {
      $(this).on('click', function() {
        $('.section-4__text-popup').text($('.section-4__text').eq(i).text())
        $('.wrapper, .popup').fadeIn('slow');
      });
    });



    const menu = document.querySelector('.header__list'),
    menuItem = document.querySelectorAll('.header__items'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active-hamburger');
        menu.classList.toggle('active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active-hamburger');
            menu.classList.toggle('active');
        })
    })


    });
    })(jQuery);