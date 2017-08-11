$(document).ready(function(){
  var scrollLink = $('.scroll');
  // Smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
  // Active link switching
  $(window).scroll(function(){ //everything happening on scroll
    var scrollBar = $(this).scrollTop();
    scrollLink.each(function(){
      var secOf = $(this.hash).offset().top;
      if(secOf <= scrollBar){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
});
