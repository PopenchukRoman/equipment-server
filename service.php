<?php
 
		$query = "SELECT * FROM tfp1_3";
		$result = db_connection($query);
		
		$equipments = array();

		while ($row = mysql_fetch_array($result)) {
			array_push($equipments, array('image' => $row['image'], 'name' => $row['name'], 'part' => $row['part'], 'parameters' => $row['parameters'], 'note' => $row['note']));
		}
		
		
		echo json_encode(array("equipments" => $equipments));
		exit;

	function db_connection($query) {
		mysql_connect('127.0.0.1', 'mybd_user', 'admin123')
			OR die(fail('Could not connect to database.'));
		mysql_select_db('equipment_server_bd');
		//mysql_set_charset('utf8');
		return mysql_query($query);
	}
	
	function fail($message) {
		die(json_encode(array('status' => 'fail', 'message' => $message)));
	}
	function success($message) {
		die(json_encode(array('status' => 'success', 'message' => $message)));
	}
?>
