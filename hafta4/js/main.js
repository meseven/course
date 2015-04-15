$(function(){

	var deger;
	$('#slider li').each(function(e){
		deger = e * 585;

		$(this).css('left',deger+'px')

	});

	//$('#slider').animate({'left':'-2000px'},6000)

	var veri,index;
	$('.buttons li').on('click',function(){
		index = $(this).index();
		right = index;
		sayi = index;
		veri  = index * 585;

		$('#slider').animate({'left':'-'+veri+'px'},1000);

		$('.buttons li').removeClass('active');
		$(this).addClass('active');
	});

	var right = 0;
	
	$(document).on('keydown',function(e){
		
		/*
		*
		* Sağ yön tuşu ile hareket ettirebilmek için.
		* 
		*/
		if(e.keyCode == 39){
			if(right < 4){
				$('#slider').animate({'left':'-=585px'},1000)
				
				right++;

				$('.buttons li').removeClass('active');
				$('.buttons li:eq('+ right +')').addClass('active');
			}else{
				$('#slider').animate({'left':'0'},1000)
				$('.buttons li').removeClass('active');
				$('.buttons li:eq(0)').addClass('active');
				right = 0;
			}
		}

		/*
		*
		* Sol yön tuşu ile hareket ettirebilmek için.
		* 
		*/
		if(e.keyCode == 37){

			if(right == 0){
				$('#slider').animate({'left':'-=2340px'},1000);

				right = 4;

				$('.buttons li').removeClass('active');
				$('.buttons li:eq('+right+')').addClass('active');
			}else{
				$('#slider').animate({'left':'+=585px'},1000);
				
				right--;
				$('.buttons li').removeClass('active');
				$('.buttons li:eq('+right+')').addClass('active');
			}
		}
		
	})


	/*Otomatik ilerleme*/

	var sayi = 0;

	var interval = setInterval(function(){

		if(sayi < 4){
			$('#slider').animate({'left':'-=585px'},1000);

			$('.buttons li').removeClass('active');
			$('.buttons li:eq('+(sayi+1)+')').addClass('active');
		}else{
			$('#slider').animate({'left':'0'},1000)
			$('.buttons li').removeClass('active');
			$('.buttons li:eq(0)').addClass('active');
			sayi = -1;
		}

		sayi++;
	},5000);

});

