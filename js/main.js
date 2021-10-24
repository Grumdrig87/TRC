jQuery(document).ready(function($) {
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
      speed: 300,
      slidesToShow: 1,
      infinite: true,
      // responsive: [{
      //     breakpoint: 993,
      //     settings: {
      //         slidesToShow: 2
      //     }
      // },{
      //   breakpoint: 769,
      //   settings: {
      //       slidesToShow: 1
      //   }
      // } ]
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
  // adaptive

    if ($(window).width() < 994) {
      
    }
});