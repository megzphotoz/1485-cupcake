// JavaScript Document

jQuery(document).ready(function($){
	
	// Smooth scroll home nav
		$('.smooth-scroll').on('click', 'a', function(e) {
			// prevent default anchor click behavior
   			e.preventDefault();
		
		   // store hash
		   var hash = this.hash;
			
			$('html, body').animate({
			   scrollTop: $(this.hash).offset().top-38 // this -38 correlates to space /b/ top nav & header
			 }, 1000, function(){ // 1000 equals 1 second
		
			   // when done, add hash to url
			   // (default click behaviour)
			   window.location.hash = hash;
			 });
		
		});

	
});