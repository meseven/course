$(function(){
	var x,y;

	var docWidth = $(document).width();
	var winWidth = $(window).width();
	var winHeight= $(window).height();


	$(document).on('mousemove',function(e){

		x = e.pageX;
		y = e.pageY;


		if( (x + $('.ucak').width() < winWidth) &&  (y + $('.ucak').height() < winHeight)){
			$('.ucak').css({'left':x, 'top': y});
		}

		console.log(y +" - "+ winHeight);

	});


	$(document).on('click',function(){

		$('.ucak').append('<div class="mermi"></div>');
		$('.ucak .mermi:last').animate({'left':'+='+docWidth+''}, 500, function(){

			$(this).remove();

		})
		$('audio').clone()[0].play();
	});






})