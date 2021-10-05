$(window).on('load', function () {
	
	$('html, body').animate({scrollTop:0},400);
	
	"use strict";
	
	orientDetect();
	
	
});

$(window).resize(function(){

	"use strict";
	
	orientDetect();
	
});
	
$(window).scroll(function () {

    var windscroll = $(window).scrollTop();

    if (windscroll >= 10) {
	    
        $('section').each(function (i) {
	        
            var index = i + 1;
            
            if ($(this).position().top <= windscroll - $(this).height()/4) {
	            
	            $("header").addClass('morph');
	            
                $('nav a').removeClass('active');
                $('nav a').eq(index).addClass('active');
            }
            
        });
        
    } else {
	    
	    if(!$('nav').hasClass('mobile')){
		    
		    $("header").removeClass('morph');
		    
	    }else{
	    
	    	$("header").addClass('morph');
	    
	    }
	    
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active');
    }
    
    $('#anim_left').each(function(){
		
		var imagePos = $(this).offset().top;
		
		var topOfWindow = windscroll;
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideLeft");
		}
		
	});

	$('#anim_right').each(function(){
		
		var imagePos = $(this).offset().top;
		
		var topOfWindow = windscroll;
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideRight");
		}
		
	});
	
	$('#anim_last').each(function(){
		
		var imagePos = $(this).offset().top;
		
		var topOfWindow = windscroll;
		if (imagePos < topOfWindow+400) {
			$(this).addClass("slideRight");
		}
		
	});
	

}).scroll();

function orientDetect(){
	
	"use strict";
	
    if ( $(window).width() <= 768 ){
		
		$('nav').hide();
		$('nav').addClass('mobile');
		$('header').addClass('morph');	

    }else{
	
		$('nav').show();
		$('nav').removeClass('mobile');
		$('header').removeClass('morph');	
				
    }
    
}

var scroller = function(event){

    var loc = $.attr(this, 'href');
    $('nav a').removeClass("active");
    $(this).addClass("active");
    $('html, body').animate({scrollTop: $(loc).offset().top},800);

    event.preventDefault();
	
};

$('#logo-link').click(function(event){
    $('html, body').animate({scrollTop: $("#home").offset().top},800);
    event.preventDefault();
});

$('nav a').click(scroller);

$('#menu').click(function(){
	
		$('nav.mobile').slideToggle(300);
	
});

$('nav a').click(function(){
	
	$('nav.mobile').slideUp(300);
	
});

setTimeout(()=>{

	$("#modal").addClass("active");

},3500)

$("#close").click(()=>{

	$("#modal").removeClass("active");

})

