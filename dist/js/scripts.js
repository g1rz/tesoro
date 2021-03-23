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
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            991: {
                slidesPerView: 3
            }
        }
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
                slidesPerView: 4
            },
            768: {
                slidesPerView: 4,
                direction: 'horizontal',
            },
            991: {
                slidesPerView: 4,
                direction: 'vertical'
            },
            1400: {
                slidesPerView: 4,
                direction: 'vertical'
            }
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
                direction: 'vertical'
            }
        },
    });


    $('.card-wish').click(function(e) {
        e.preventDefault();
        console.log('wish');
        $(this).toggleClass('active');
    });


    $('.menu-btn').click(function(e) {
        $(this).toggleClass('active');
        $('.menu-mobile').slideToggle()
    });


    $('.selector__head').click(function() {
        // $('.selector').removeClass('active');
        // $('.selector__body').slideUp(300);
        $(this).parent().toggleClass('active');
        $(this).siblings('.selector__body').slideToggle(300);
    });

    $('.selector__label').click(function() {
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

    $('.goto').click(function(e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
    });

    $('.goto--accordion').click(function() {
        var el = $(this).attr('href');
        
        $(el).parent().find('.accordion__item-title').removeClass('active');
        $(el).parent().find('.accordion__item-content').slideUp();

        $(el).find('.accordion__item-title').addClass('active');
        $(el).find('.accordion__item-content').slideDown();
    });

    $('.c-filter-btn').click(function() {
        $(this).toggleClass('active');
        $('.mobile-filter').slideToggle(300);
    });

    $('.accordion__item-title').click(function() {
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
        $('.footer-social').insertAfter($('.footer-item:last-child'))
    }

    if ($(window).width() <= 576) {
        $('.i-slide__btn').appendTo($(this).parents('.i-slide'))
    }


    $(document).mouseup(function(e) {
        var selector = $('.selector');
    
        if (!selector.is(e.target) && selector.has(e.target).length === 0) {
            selector.removeClass('active');
            $('.selector__body').slideUp(300);
        }
    });
});

