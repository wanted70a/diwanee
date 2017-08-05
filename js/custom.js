$( document ).ready(function(){
	//smooth scroll
	$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top -70
			}, 700);
		}
	});
	
	
	//hamburger nav
	var $nav = $('.mobile-nav');//kesiranje elementa koji se po
	$('.hamburger').click(function(){
		$nav.slideToggle(300);
	});
	
	$nav.find('.nav-link').click(function(){
		$nav.slideToggle(300);
	});
	
	
	//load more
	$('.load-more').click(function(){
		$(this).fadeOut(200, function(){
			$('.hidden').fadeIn(700);
		});
	});
		
});
