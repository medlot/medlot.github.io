(function($){ 

 

  //WOW Animation
  var wow = new WOW(
  {
      boxClass:     'wow',      
      animateClass: 'animated',  
      offset:       0,           
      mobile:       true,        
      live:         true,        
      callback:     function(box) { 
      },
      scrollContainer: null  
    }
  );
  wow.init(); 

 


  if ($(window).width() < 768) {changePos(); }
  else { fixMarg(); resetPos(); }
  $(window).scroll(function() {
    if ($(window).width() < 768) {changePos(); }
    else { fixMarg(); resetPos(); }
  });


   
                           
     

})(jQuery); 


function changePos(){
   $( '.box_2' ).each(function() { 
      var $el = $(this).prev('.box_gray');   
      $(this).insertBefore($el); 
  });
}
function resetPos(){
   $( '.box_2' ).each(function() { 
      var $el = $(this).next('.box_gray');   
      $(this).insertAfter( $el); 
  });
}
function fixMarg(){
   $( '.box_color' ).each(function() {
     var boxHeight = $(this).siblings('.box_gray').height();
     var mrgTop = (boxHeight -100) / 2;
     $(this).children('.box_title').css('margin-top', mrgTop);
  });
}
 
 