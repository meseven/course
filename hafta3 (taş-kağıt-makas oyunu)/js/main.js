$(function(){


	var index;
	var tiklama = true;

	$('.buttons li').on('click',function(){

		if(tiklama == true){
			index = $(this).index();

			$('.buttons li').removeClass('active');
			$(this).addClass('active');

			computer();

			$('.durum').css({'background-color':'white'});
			$('.durum').html('');
		}

		tiklama = false;
	});



	var numb = 0,
		random = 0,
		finish = 0,
		interval;

	function computer(){

		random = Math.floor((Math.random() * 60) + 20);

		interval = setInterval(function(){

			$('.computer li').hide();
			$('.computer li:eq('+ numb +')').show();

			if(finish == random){
				clearInterval(interval);
				finish = 0;
				tiklama = true;	

				compare(index, $('.computer li:visible').index());
			}

			if(numb == 2){
				numb = -1;
			}

			numb++;
			finish++;
		},60);
	}


	var you = 0;
	var comp = 0;

	function compare(x,y){

		if(x == y){
			$('.durum').css({'background-color':'blue'});
			$('.durum').html("Berabere");
		}else{

			if(x == 0){ // eger taşı sectiysek
				if(y == 2){ // bilgisayar makası sectiyse
					result(1);
				}else{
					result(2);
				}
			}else if(x == 1){ // eger kagidi seçtiysek
				if(y == 0){ // bilgisayar taşı seçerse
					result(1);
				}else{
					result(2);
				}
			}else if(x == 2){ // makasi sectiysek
				if(y == 0){ // bilgisayar taşı sectiyse
					result(2);
				}else{
					result(1);
				}
			}

		} 

	} // compare func.


	function result(value){
		if(value == 1){
			you++;
			$('.durum').css({'background-color':'green'});
			$('.durum').html("KAZANDIN !!");
		}else{
			comp++;
			$('.durum').css({'background-color':'red'});
			$('.durum').html("Makine Kazandı !!");
		}

		$('#comp').html(comp);
		$('#you').html(you);
	}

});