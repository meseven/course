<?php
// hiç bir güvenlik önlemi alınmamıştır.

if($_POST){
	include("setting.php");

	$type	 = $_POST["type"];

	if ($type == "insert") {
		$comment = $_POST["comment"];
		$name	 = $_POST["name"];
		$time	 = date("H:i");

		$qry = mysql_query("insert into comments (text,time,name) VALUES ('".$comment."','".$time."','".$name."') ");

		if($qry){
			echo "basarili";
		}else{
			echo "basarisiz";
		}

	}else if($type == "query"){

		$qry= mysql_query("select * from comments order by id desc");

        while ($w = mysql_fetch_array($qry)) {
            echo '<div class="comment">
                  <a class="avatar">
                    <img src="img/matt.jpg">
                  </a>
                  <div class="content">
                    <a class="author">'. $w['name'] .'</a>
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
}