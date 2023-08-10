$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".nav").css("background" , "blue");
	  }

	  else{
		  $(".nav").css("background" , "white");  	
	  }
  })
})