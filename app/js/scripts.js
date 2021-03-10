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
    
});

