<?php

if($_POST){
	include("setting.php");

	$comment = $_POST["comment"];
	$time	 = date("H:i");

	$qry = mysql_query("insert into comments (text,time) VALUES ('".$comment."','".$time."') ");


	if($qry){
		echo "basarili";
	}else{
		echo "basarisiz";
	}

}