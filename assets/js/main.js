$(document).ready(function(){
  var scrollLink = $('a');
  // Smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
  // Active link switching
  $(window).scroll(function(){
    var scrollBarLocation = $(this).scrollTop();
    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top // you can substract -20 
      if(sectionOffset <= scrollBarLocation){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
});
