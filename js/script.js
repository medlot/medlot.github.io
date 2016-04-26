(function($){ 

  //scrollSpy 		
  $(window).scroll(function(){
  	var offsetTop = $('#navScroll').offset().top;
  	 if (offsetTop >= 500){ 
  	 	$('#navScroll').addClass('fixed-nav');
  	 	//$('.navbar-brand img').animate({width: "50px"}, 500); 
  	 	$('.navbar-brand img').css( "width",  "50px"); 
  	 }else if (offsetTop < 500){
  	 	$('#navScroll').removeClass('fixed-nav');
  	 	//$('.navbar-brand img').animate({width: "80px"}, 500); 
  	 	$('.navbar-brand img').css( "width",  "80px"); 
  	 } 
  });

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

  // animateText($('.parag_anim'));
  setTimeout( function(){displayBubble($('.bubble1')) } , 1000);

  setTimeout( function(){ animateText($('.bu1_prg')); } , 1100);

  setTimeout( function(){
                          displayBubble($('.bubble2')); 
                          $('.jennyTyp').css('display', 'block');
                        }  , 4800);

  setTimeout( function(){ animateText($('.bu2_prg'));  } , 4900);

  setTimeout( function(){
                          $('.jennyTyp').css('display', 'none'); 
                          displayBubble($('.bubble3')) 
                        } , 17800);
  setTimeout( function(){animateText($('.bu3_prg')) } , 17900);
  setTimeout( function(){
                          displayBubble($('.bubble4'));
                          $('.jennyTyp2').css('display', 'block');
                        } , 22500);

  setTimeout( function(){
                          animateText($('.bu4_prg')) 
                        } , 22600);
   setTimeout( function(){
                         $('.jennyTyp2').css('display', 'none');
                        } , 30100);
                           
     

})(jQuery);
 




 function animateText(el){
    var text = el.text();

    var length = text.length;
    var timeOut;
    var character = 0;


    (function typeWriter() { 
        timeOut = setTimeout(function() {
            character++;
            var type = text.substring(0, character);
            el.text(type);
            typeWriter();
            
            if (character == length) {
                clearTimeout(timeOut);
            } 
            
        }, 70);

    }());
 

 } 
 function displayBubble(el){
    el.animate({opacity: "1"}, 100).addClass('bounceInUp animated');
 }
 
 

