$(function() {
  var jumboH = $('.jumbotron').height();
  $(window).scroll(function() {
    if ($(this).scrollTop() > jumboH ) {
      $('.navbar-default').addClass('sticky');
      $('.return').show(1000);
    } else {
      $('.navbar-default').removeClass('sticky');
      $('.return').hide(1000);
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
