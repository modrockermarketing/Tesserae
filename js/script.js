$('document').ready(function () {

	var tiles 	= $('#tiles a'),
		loading = $('#loading'),
		len 	= tiles.length,
		tileDim = (($(document).width() - 2) / 22) - 2;

	tiles
		.hide()
		.width(tileDim)
		.height(tileDim);

	loading.fadeIn(500);

	tiles.css({
		opacity : 0,
	});

	tiles.find('img').on('load', function (event) {

		for (var i = 0; i <= len ; ++i) {
			tiles
				.eq(i)
				.delay((i * 250) * 0.25)
				.fadeIn(250)
				.animate({opacity : 0.75}, 250);

			if (i == len) {
				loading.delay(((i * 250) * 0.25) + 500).fadeOut(500);
			}
		}
	});

	$('#tiles').on('mouseenter focusin', 'a', function (event) {
		$(this).animate({opacity : 1}, 100);
	});

	$('#tiles').on('mouseleave focusout blur', 'a', function (event) {
		$(this).animate({opacity : 0.75}, 100);
	});

	$('#tiles').on('click', 'a', function (event) {

		var target = $(event.target);

		event.preventDefault();
		event.stopPropagation();

		if (!target.hasClass('current')) {

			var clickedImage = target.clone();

			$('#lightbox .content')
				.removeClass('loading')
				.html(clickedImage);

			target.parent().addClass('current');

			$('#lightbox').fadeIn(500);

		}

		return false;
	});

	$('#tiles').on('keypress', 'a', function (event) {

		var target = $(event.target);

		event.preventDefault();
		event.stopPropagation();

		if (event.keyCode == 13 || event.keyCode == 32) {
			target.trigger('click');
		}

		return false;
	});

	/*
	*
	* Lightbox events
	*
	*/

	/* Bind handlers */
	$('#lightbox #prev').on('click', showPrevImage);
	$('#lightbox #next').on('click', showNextImage);
	$('#lightbox #close').on('click', closeLightbox);

	/* Event handlers */
	function showPrevImage (event) {

		var target = $(event.target);

		// emptyLightbox();
		// populateLightbox();

		event.preventDefault();
		event.stopPropagation();

		return false;
	}
	function showNextImage (event) {

		var target = $(event.target);

		// emptyLightbox();
		// populateLightbox();

		event.preventDefault();
		event.stopPropagation();

		return false;
	}
	function closeLightbox (event) {

		var target = $(event.target);

		event.preventDefault();
		event.stopPropagation();

		$('#lightbox').fadeOut(function () {
			$(this).find('.content').empty();
		});

		return false;
	}
});