$(function(){
  var nav = $('.header');

  $(window).scroll(function(){
    if($(window).scrollTop() <= 60){
      nav.removeClass('header-scroll');
    } else {
      nav.addClass('header-scroll');
    }
  });
});