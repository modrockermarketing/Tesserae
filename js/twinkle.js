$(document).ready(function () {
	
	function twinkle () {

		var blocks 	= $('.block'),
			count 	= blocks.length,
			random 	= Math.floor(Math.random() * (count - 0 + 1)) + 0;
			currentBlock = blocks.eq(random);

		if (!currentBlock.is(':animated')) {
			currentBlock.fadeOut(1000).fadeIn(1000);
		}
	}

	var int1 = setInterval(twinkle, 500);
	var int2 = setInterval(twinkle, 500);
	var int3 = setInterval(twinkle, 500);
	var int4 = setInterval(twinkle, 500);
	var int5 = setInterval(twinkle, 500);

	$('.block').on('mouseenter', function (event) {

		clearInterval(int1);
		clearInterval(int2);
		clearInterval(int3);
		clearInterval(int4);
		clearInterval(int5);

		$(this).css({'background-color' : '#000000'});
	})

	$('.block').on('mouseleave', function (event) {

		int1 = setInterval(twinkle, 500);
		int2 = setInterval(twinkle, 500);
		int3 = setInterval(twinkle, 500);
		int4 = setInterval(twinkle, 500);
		int5 = setInterval(twinkle, 500);

		$(this).css({'background-color' : '#222222'});
	})

});