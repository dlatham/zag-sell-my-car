/*	
*	############################################################################
*	
*   ZAG landing page JS
*	
*	############################################################################
*/

$(document).ready(function() {

	/* init testimonial fade slider */
	$('.flexslider').flexslider({
			directionNav: false,
			slideshowSpeed: 6000, /* adjust the speed in milliseconds */
			useCSS: true,
			touch: true,
			controlNav: false,
			pauseOnAction: true,
			pauseOnHover: false
			
	});

	// init scroll-to effect navigation, adjust the scroll speed in milliseconds
	$('#main-menu').localScroll(1000);
	$('.hero-text').localScroll(1000);	


	// init carousels
  	$('#hero-carousel').carousel();

});