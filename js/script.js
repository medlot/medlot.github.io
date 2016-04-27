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
  
  updateArrowSections();
  $( window ).resize(function() {
    updateArrowSections();
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
     var $this = $(this),
         $child = $this.children('.box_title'),
         parentHeight = $this.height(),
         childHeight = $child.height();

     var mrgTop = (parentHeight - childHeight ) / 2;
     $child.css('margin-top', mrgTop);
  });
}
function resetMarg(){
   $( '.box_color' ).each(function() { 
     $(this).children('.box_title').css('margin-top', '0px');
  });
} 
 
function updateArrowSections(){
  if ($(window).width() <= 768) {changePos(); resetMarg();}
  else if($(window).width() > 768) { fixMarg(); resetPos(); }
}