$(function(){

	var comment;

	$('#comment-form').on('submit',function(){

		comment = $('#comment').val();

		$.ajaxSetup({
			beforeSend: function(){
				$('#send_comment').addClass('loading');
			},
			complete: function (){
				$('#send_comment').removeClass('loading');
			}
		})

		$.ajax({
			data: "comment="+comment,
			type: "POST",
			url : "ajax.php",
			success: function(data){

				$('#comment').val("");

				if(data == 'basarili'){

					var d = new Date();
					var saat = d.getHours();
					var dk   = d.getMinutes();

					$('#comment-warning').hide();
					$('#comments_area').prepend('<div class="comment"><a class="avatar"><img src="img/matt.jpg"></a><div class="content"><a class="author">Matt</a><div class="metadata"><span class="date">'+ saat +':'+dk+'</span></div><div class="text">'+ comment +'</div><div class="actions"><a class="reply">Reply</a></div></div></div>');

				}else{
					alert("Teknik bir arıza oluştu");
				}
			}
		});
	});


	$('#send_comment').on('click',function(){
		$('#comment-form').trigger('submit');
	});


});