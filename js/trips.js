$(".contentContainer").css("min-height", $(window).height())


$('#menu li').click(function() {
  $('.current').removeClass('current');
  $(this).addClass('current');
});

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
