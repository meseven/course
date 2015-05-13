<?php


if (!mysql_select_db("comment",mysql_connect('localhost','root','root'))) {
	echo mysql_error();
	die();
}




