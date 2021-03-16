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
            delay: 5000,
        },
        navigation: {
            nextEl: '.i-slide-nav--next',
            prevEl: '.i-slide-nav--prev',
        },
        pagination: {
            el: '.i-slide-dots',
        },
    });


    $('.card-wish').click(function(e) {
        e.preventDefault();
        console.log('wish');
        $(this).toggleClass('active');
    })
});

