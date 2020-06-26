$(window).on('scroll', function() {
	// Offload to RAF
	window.requestAnimationFrame(function() {
		$('.parallax-container').each(function(){
			var scrollTop = $(window).scrollTop();
			var windowHeight = window.innerHeight;
			var thisHeroBG = $(this);
			var thisHero = thisHeroBG.parent();
			var thisScrollOffset;

			// Check to see if this Hero is in view (or on the page), if it is, do the transform, if not, leave it alone.
			if (!thisHeroBG.is(':visible') || !isItemInView(thisHero)) {
				return;
			}

			thisScrollOffset = ((((scrollTop - thisHero.offset().top) / windowHeight) * 100) * .3);

			thisHeroBG.css({
				'transform': 'translate3d(0, '+thisScrollOffset+'%, 0)'
			});
		});
	});
});

function isItemInView(layer) {

	var currentScrollTop = getScrollTop();

	var windowHeight = $(window).height();

	if (currentScrollTop + windowHeight >= layer.offset().top && currentScrollTop < layer.offset().top + layer.outerHeight()) {
		return true;
	}

	return false;
}

function getScrollTop() {

	var currentScrollTop = 0;

	var htmlScrollTop = $("html").scrollTop();
	var bodyScrollTop = $("body").scrollTop();

	//Determine the current scroll top position by checking both the html & body element's scrollTop positions (some browsers use html, some use body).
	if (htmlScrollTop > 0 || bodyScrollTop > 0) {
		if (htmlScrollTop > 0) {
			currentScrollTop = htmlScrollTop;
		}
		else if (bodyScrollTop > 0) {
			currentScrollTop = bodyScrollTop;
		}
	}

	return currentScrollTop;
}