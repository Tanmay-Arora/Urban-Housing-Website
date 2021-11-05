$(document).ready(function(){       
  var scroll_pos = 0;
  $(document).scroll(function() { 
    
      scroll_pos = $(this).scrollTop();
      if(scroll_pos > 50) {
       
          $("nav").css('background-color', '#181616c9');
      } else {
          $("nav").css('background-color', 'transparent');
      }
  });
});

function flip() {
  $('.card').toggleClass('flipped');
}

