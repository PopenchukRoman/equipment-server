<?php
 		$query = "SELECT name, uzel1_name, uzel1_desc, uzel2_name, uzel2_desc, uzel3_name, uzel3_desc, uzel4_name, uzel4_desc, uzel5_name, uzel5_desc, uzel6_name, uzel6_desc, uzel7_name, uzel7_desc, uzel8_name, uzel8_desc, img_name, img FROM tfp1_3 order by img ASC ";
		$result = db_connection($query);
		
		$equipments = array();
		

		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
			array_push($equipments, array('name' => $row['name'], 'uzel1_name' => $row['uzel1_name'], 'uzel1_desc' => $row['uzel1_desc'], 'uzel2_name' => $row['uzel2_name'], 'uzel2_desc' => $row['uzel2_desc'], 'uzel3_name' => $row['uzel3_name'], 'uzel3_desc' => $row['uzel3_desc'], 'uzel4_name' => $row['uzel4_name'], 'uzel4_desc' => $row['uzel4_desc'], 'uzel5_name' => $row['uzel5_name'], 'uzel5_desc' => $row['uzel5_desc'], 'uzel6_name' => $row['uzel6_name'], 'uzel6_desc' => $row['uzel6_desc'], 'uzel7_name' => $row['uzel7_name'], 'uzel7_desc' => $row['uzel7_desc'], 'uzel8_name' => $row['uzel8_name'], 'uzel8_desc' => $row['uzel8_desc'], 'img_name'=>$row['img_name'], 'img'=>$row['img']));
		}		
		echo json_encode(array("equipments" => $equipments));
		exit;
		
				
	function db_connection($query) {
		mysql_connect('127.0.0.1', 'root', 'root')
			OR die(fail('Could not connect to database.'));
		mysql_query("SET NAMES 'utf8'");
		mysql_select_db('mybd_user');
		return mysql_query($query);
	}
			
	function fail($message) {
		die(json_encode(array('status' => 'fail', 'message' => $message)));
	};
	function success($message) {
		die(json_encode(array('status' => 'success', 'message' => $message)));
	};
?>