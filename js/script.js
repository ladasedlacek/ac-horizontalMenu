// Sticky nav
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

// LANDINGPAGE
$(document).ready(function () {
	// Toggle layouts
	$("#layout_switch button").on("click", function () {
		$("#body2").removeClass("layout-0").removeClass("layout-1");
		$("body").addClass("mobile");
	});
	$("#layout_switch button:nth-child(2)").on("click", function () {
		$("#body2").addClass("layout-0");
		$("body.mobile").removeClass("mobile");
	});
	$("#layout_switch button:nth-child(3)").on("click", function () {
		$("#body2").addClass("layout-1");
		$("body.mobile").removeClass("mobile");
	});

	// Sticky nav runner
	$(window).scroll(function(){​​​​​​​​
		stickyNav();
	}​​​​​​​​);

	// Slow in-document link animation
	$('.layout-1 #landingpage a[href*="#"], .layout-0 #landingpage a[href*="#"]')
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

	// Scrolling animation
	if (!$("#legend, .fr-iframe, .fr-wrapper").length) {
		scrollingAnimation();
		$(window).on("scroll.animatable", scrollingAnimation);
	}

	function scrollingAnimation(event) {
		var $toAnimate = $(".animatable");
		if (!$toAnimate.length) {
			$(window).off("scroll.animatable");
		}
		$toAnimate.each(function () {

			if ($(this).offset().top < ($(window).scrollTop() + ($(window).height() * 0.9))) {

				$(this).addClass("animated").removeClass("animatable");
			}
		});
	}

	
});
