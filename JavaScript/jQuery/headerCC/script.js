// headerをスクロールすると、色が変わる
$(window).on('scroll', function () {
  if ($('.first-v').height() < $(this).scrollTop()) {
      $('.header').addClass('change-color');
  } else {
      $('.header').removeClass('change-color');
  }
});