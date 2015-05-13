$(function(){

	var comment;

	$('#comment-form').on('submit',function(){

		comment = $('#comment').val();
        name    = $('#name').val();

		$.ajax({
            beforeSend: function(){
                $('#send_comment').addClass('loading');
            },
            complete: function (){
                $('#send_comment').removeClass('loading');
            },
			data: "comment="+comment+"&name="+name+"&type=insert",
			type: "POST",
			url : "ajax.php",
			success: function(data){

				$('#comment').val("");
                $('#name').val("");

				if(data == 'basarili'){
					var d = new Date();
					var saat = d.getHours();
					var dk   = d.getMinutes();

					$('#comment-warning').hide();
					$('#comments_area').prepend('<div class="comment"><a class="avatar"><img src="img/matt.jpg"></a><div class="content"><a class="author">'+name+'</a><div class="metadata"><span class="date">'+ saat +':'+dk+'</span></div><div class="text">'+ comment +'</div><div class="actions"><a class="reply">Reply</a></div></div></div>');
				}else{
					alert("Teknik bir arıza oluştu");
				}
			}
		});
	});


	$('#send_comment').on('click',function(){
		$('#comment-form').trigger('submit');
	});


    setInterval(auto,1000);
	
    function auto(){

          $.ajax({
            type:"POST",
            data:"type=query",
            url : "ajax.php",
            success: function(deger){
                if(deger != "")
                    $('#comments_area').html(deger);
            }

          })  
      
    }


});