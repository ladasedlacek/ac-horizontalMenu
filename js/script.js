// sticky nav
var stickyNav = function(){​​​​​​​​
	var scrollTop = $(window).scrollTop();
	var stickyNavTop = $('.lp-nav-box').offset().top;
	var lpHeight = $(".lpHeight").outerHeight();
	
	if (scrollTop>stickyNavTop&&scrollTop<lpHeight) {​​​​​​​​
		$('.lp-nav').addClass('fixed');
	} ​​​​​​​​else {​​​​​​​​
		$('.lp-nav').removeClass('fixed');
	}​​​​​​​​
}​​​​​​​​;

// runner
$(window).load(function() {
	$("#lpNav").css({
		'visibility' : 'visible',
		'opacity' : '1',
		'transition' : 'all .3s ease-in',
	});
	
	// Sticky nav runner
	$(window).scroll(function(){​​​​​​​​
		stickyNav();
	}​​​​​​​​);

	// Slow in-document link animation
	$('.layout-1 #lpNav a[href*="#"], .layout-0 #lpNav a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top-65
				}, 800);
			}
		}
	});
});
