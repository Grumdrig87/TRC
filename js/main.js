jQuery(document).ready(function($) {
  // slide to id
  $('[data-scroll]').click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
  // burger
  $('[data-burger]').click(function() {
    $('html').toggleClass("open");
    $(this).toggleClass("open");
    $('[data-nav]').toggleClass("open");
    $('body').toggleClass('open');
});

//slider
if (jQuery('[data-about]').length > 0) {
  $('[data-about]').slick({
      dots: false,
      adaptiveHeight: true,
      speed: 300,
      slidesToShow: 1,
      infinite: true,
  });
}
  
 
   //miss click burger
   function closeBurger () {
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("[data-blkscr]"); // тут указываем ID элемента
      if (div.is(e.target)) { // и не по его дочерним элементам
        $('body').removeClass('open');
        $('html').removeClass("open");
        $('[data-burger]').removeClass("open");
        $('[data-nav]').removeClass("open");
      }
    });
  };
  closeBurger();
  //accordeon
  $('[data-flor]').click(function(){
    $(this).toggleClass('open');
    $(this).parent().find('[data-florinfo]').slideToggle(500)
  })
  // adaptive

    if ($(window).width() < 769) {
      if (jQuery('[data-news]').length > 0) {
        $('[data-news]').slick({
            dots: false,
            arrows: false,
            speed: 300,
            slidesToShow: 2,
            infinite: true,
            responsive: [{
              breakpoint: 577,
              settings: {
                  slidesToShow: 1
              }
          } ]
        });
      }
    }
});