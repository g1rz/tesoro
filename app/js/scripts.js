/* Локализация datepicker */
$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ],
    monthNamesShort: [
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
    ],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: '',
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

function mf_height_function() {
    if ($(window).width() > 991) {
        var mt_height = $('.toolbar').innerHeight();
        $('footer').css('padding-bottom', mt_height + 'px');
    }

    var mf_height = $('footer').innerHeight();
    $('body').css('padding-bottom', mf_height + 'px');
}

$(window).on('load resize change', function () {
    mf_height_function();
});

$(document).ready(function () {
    var introSlider = new Swiper('.intro-slider', {
        loop: true,
        // effect: 'fade',
        speed: 500,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            nextEl: '.i-slide-nav--next',
            prevEl: '.i-slide-nav--prev',
        },
        pagination: {
            el: '.i-slide-dots',
        },
    });

    var reviewSlider = new Swiper('.r-slider', {
        loop: true,
        // effect: 'fade',
        speed: 500,
        slidesPerView: 3,
        navigation: {
            nextEl: '.r-slide-nav--next',
            prevEl: '.r-slide-nav--prev',
        },
        pagination: {
            el: '.r-slide-dots',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
        },
    });

    var cardThumbsSlider = new Swiper('.card-thumbs', {
        loop: true,
        // effect: 'fade',
        speed: 500,
        slidesPerView: 4,
        navigation: {
            nextEl: '.card-thumbs-nav--next',
            prevEl: '.card-thumbs-nav--prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 4,
                direction: 'horizontal',
            },
            991: {
                slidesPerView: 4,
                direction: 'vertical',
            },
            1400: {
                slidesPerView: 4,
                direction: 'vertical',
            },
        },
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var cardPhotosSlider = new Swiper('.card-photos', {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        thumbs: {
            swiper: cardThumbsSlider,
        },
        breakpoints: {
            768: {
                direction: 'horizontal',
            },
            991: {
                direction: 'vertical',
            },
        },
    });

    var newsSlider = new Swiper('.news-slider', {
        loop: true,
        // effect: 'fade',
        speed: 500,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            nextEl: '.n-slide-nav--next',
            prevEl: '.n-slide-nav--prev',
        },
        pagination: {
            el: '.n-slide-dots',
        },
    });

    var readMoreSlider = new Swiper('.read-more-slider', {
        loop: true,

        // slidesPerView: 2,
        navigation: {
            nextEl: '.read-more-nav__item--next',
            prevEl: '.read-more-nav__item--prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
                slidesPerColumn: 2,
                // spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 1,
            },
        },
    });

    $('.card-wish').click(function (e) {
        e.preventDefault();
        console.log('wish');
        $(this).toggleClass('active');
    });

    $('.menu-btn').click(function (e) {
        $(this).toggleClass('active');
        $('.menu-mobile').slideToggle();
    });

    $('.selector__head').click(function () {
        // $('.selector').removeClass('active');
        // $('.selector__body').slideUp(300);
        $(this).parent().toggleClass('active');
        $(this).siblings('.selector__body').slideToggle(300);
    });

    $('.selector__label').click(function () {
        var value = $(this).siblings('input[type="radio"]').val();
        var $parent = $(this).closest('.selector');

        if ($(this).find('.selector__label-check').length > 0) {
            var check = $(this).find('.selector__label-check').html();

            $parent.find('.selector__check ').html(check);
        }
        $parent.removeClass('active');
        $parent.find('.selector__body').slideUp(300);
    });

    $('.to-top').click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
    });

    $('.goto').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
    });

    $('.goto--accordion').click(function () {
        var el = $(this).attr('href');

        $(el).parent().find('.accordion__item-title').removeClass('active');
        $(el).parent().find('.accordion__item-content').slideUp();

        $(el).find('.accordion__item-title').addClass('active');
        $(el).find('.accordion__item-content').slideDown();
    });

    $('.c-filter-btn').click(function () {
        $(this).toggleClass('active');
        $('.mobile-filter').slideToggle(300);
    });

    $('.accordion__item-title').click(function () {
        if (!$(this).hasClass('active')) {
            $('.accordion__item-title').removeClass('active');
            $(this).addClass('active');

            $('.accordion__item-content').slideUp();
            $(this).siblings('.accordion__item-content').slideDown();
        } else {
            $('.accordion__item-content').slideUp();
            $(this).removeClass('active');
        }
    });

    if ($(window).width() <= 768) {
        $('.footer-social').insertAfter($('.footer-item:last-child'));
    }

    if ($(window).width() <= 576) {
        $('.i-slide__btn').appendTo($(this).parents('.i-slide'));
    }

    $(document).mouseup(function (e) {
        var selector = $('.selector');

        if (!selector.is(e.target) && selector.has(e.target).length === 0) {
            selector.removeClass('active');
            $('.selector__body').slideUp(300);
        }
    });

    $('.amount__btn').click(function () {
        var el = $(this);
        var quanity = el.siblings('input');
        var quanityNum = parseInt(quanity.val());
        if (el.hasClass('amount__btn--minus')) {
            quanityNum--;
        } else {
            quanityNum++;
        }
        quanityNum = quanityNum <= 0 ? 1 : quanityNum;

        quanity.val(quanityNum);
        quanity.trigger('change');
    });

    $('.amount__input').change(function () {
        console.log('change');
        this.style.width = (this.value.length + 1) * 5 + 'px';
    });

    $('.tab-links__item--goto').click(function (e) {
        e.preventDefault();

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var content = $(this).attr('href');
        $('.sign-form-wrap').not(content).removeClass('active');
        $(content).addClass('active');
    });

    $('.history-item__head').click(function () {
        $(this).parent().toggleClass('active');
        $(this).siblings('.history-item__content').slideToggle();
    });

    $('.history-item').eq(0).addClass('active');
    $('.history-item').eq(0).find('.history-item__content').slideDown();

    // $('.menu-main__item.dropdown').mouseover(function() {
    //     console.log('enter');
    //     $(this).find('.submenu').slideDown();
    // })

    // $('.menu-main__item.dropdown').mouseout(function() {
    //     console.log('exit');
    //     $(this).find('.submenu').slideUp();
    // })

    $('.del-item-basket').click(function (e) {
        e.preventDefault();
        var $line = $(this).closest('.basket-table__line');
        var newProductCount = parseInt($('.product-count').text()) - 1;

        $('.product-count').text(newProductCount);

        $line.fadeOut(600);

        setTimeout(function () {
            $line.remove();

            if (newProductCount === 0) {
                $('.basket-table__head').fadeOut();
                $('.basket-bottom').fadeOut();

                $('.basket-content').append(
                    $(
                        '<div class="text-center"><p>Корзина пуста</p><a class="btn btn--active" href="#">Перейти в каталог</a></div>',
                    ),
                );
            }
        }, 600);
    });

    $('.delete-link').click(function (e) {
        e.preventDefault();
        $('.basket-table').fadeOut();
        $('.basket-bottom').fadeOut();

        setTimeout(function () {
            $('.basket-table').remove();
            $('.basket-bottom').remove();
        }, 600);

        $('.basket-content').append(
            $(
                '<div class="text-center"><p>Корзина пуста</p><a class="btn btn--active" href="#">Перейти в каталог</a></div>',
            ),
        );
    });

    $('.card-del').click(function (e) {
        var $card = $(this).closest('.cols');

        $card.fadeOut(600);

        setTimeout(function () {
            $card.remove();
        }, 600);
    });

    $('.search-pc').click(function (e) {
        e.preventDefault();
        $('.header-search').slideToggle();
    });

    $(window).on('scroll load', function () {
        $(this).scrollTop() > 1000
            ? $('.to-top').addClass('active')
            : $('.to-top').removeClass('active');

        var toTop = $('.to-top');
        var footer = $('footer');

        var posFooter = footer.offset().top - $(window).scrollTop(); // расстояние от подвала до верха экрана
        var windowHeight = $(window).height();

        if (posFooter <= windowHeight) {
            console.log(windowHeight - posFooter);
            toTop.css('bottom', 50 + windowHeight - posFooter + 'px');
        } else {
            toTop.css('bottom', '50px');
        }
    });

    $('.datepicker').datepicker();
});
