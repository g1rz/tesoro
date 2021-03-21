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

    $('.c-filter-btn').click(function() {
        $(this).toggleClass('active');
        $('.mobile-filter').slideToggle(300);
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

