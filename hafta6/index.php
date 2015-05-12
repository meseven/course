<?php
  include("setting.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Yorum Sistemi</title>
	<link rel="stylesheet" href="assets/css/semantic.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.12.1/components/icon.min.css">
  <script src="assets/js/jquery.js"></script>
  <script src="assets/js/main.js"></script>
</head>
<body>

<div class="ui threaded comments" style="margin:20px auto">
  <h3 class="ui dividing header">Yorumlar</h3>
  
  <div id="comments_area">

  </div>

  <?php
      $qry = mysql_query("select * from comments");
      if(mysql_num_rows($qry)  < 1 ){
        echo '<div class="ui icon warning message" id="comment-warning">
              <i class="inbox icon"></i>
              <div class="content">
                <div class="header">
                    Yorum yok!
                </div>
                    <p>İlk yorumu yapmak istermisin?</p>
              </div>
            </div>';
      }else{

          $qry= mysql_query("select * from comments order by id desc");

          while ($w = mysql_fetch_array($qry)) {

            echo '<div class="comment">
                  <a class="avatar">
                    <img src="img/matt.jpg">
                  </a>
                  <div class="content">
                    <a class="author">Matt</a>
                    <div class="metadata">
                      <span class="date">'. $w['time'] .'</span>
                    </div>
                    <div class="text">
                      '. $w['text'] .'
                    </div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>';

          }


      }
  ?>

  <form class="ui reply form" id="comment-form" onsubmit="return false;">
    <div class="field">
      <input type="text" id="comment" />
    </div>
    <div class="ui blue labeled submit icon button right floated column" id="send_comment">
      <i class="icon edit"></i> Add Reply
    </div>
  </form>
</div>

	
</body>
</html>