<?php
 
		$query = "SELECT * FROM tfp1_3";
		$result = db_connection($query);
		
		$equipments = array();

		while ($row = mysql_fetch_array($result)) {
			array_push($equipments, array('name' => $row['name'], 'part1' => $row['part1'], 'part1_desc' => $row['part1_desc'], 'part2' => $row['part2'], 'part2_desc' => $row['part2_desc'], 'part3' => $row['part3'], 'part3_desc'=>$row['part3_desc'], 'image'=>$row['image']));
		
		}
		
		print ($row['image']);
		echo json_encode(array("equipments" => $equipments), JSON_UNESCAPED_UNICODE);
		exit;

	function db_connection($query) {
		mysql_connect('127.0.0.1', 'mybd_user', 'admin123')
			OR die(fail('Could not connect to database.'));
		mysql_select_db('equipment_server_bd');
		mysql_query("SET NAMES 'utf8'");
		return mysql_query($query);
	}
	
	function fail($message) {
		die(json_encode(array('status' => 'fail', 'message' => $message)));
	}
	function success($message) {
		die(json_encode(array('status' => 'success', 'message' => $message)));
	}
?>
