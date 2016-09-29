$(document).ready(function() {

///// Anchor Smooth Scroll /////
  $('.main-menu a').click(function(e){

    e.preventDefault();
        
    var target = $(this).attr('href');
        
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
  });

///// Section-1 Slider CSS /////    
  //Auto Switching Images for Slider CSS
  function bannerSwitcher() {
    $next = $('.sec-1-input').filter(":checked").next('.sec-1-input');
    if ($next.length) $next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
  }

  var bannerTimer = setInterval(bannerSwitcher, 5000);

  $('nav .controls label').click(function() {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
  });
}); ///// Ready End /////
