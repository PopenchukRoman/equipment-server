<?php
 
		//$query = "SELECT name, part, part_desc, parameters, parameters_desc, note FROM tfp1_3 order by note ASC";
		$query = "SELECT * FROM tfp1_3";
		$result = db_connection($query);
		
		$equipments = array();

		while ($row = mysql_fetch_array($result)) {
			array_push($equipments, array('name' => $row['name'], 'part' => $row['part'], 'part_desc' => $row['part_desc'], 'parameters' => $row['parameters'], 'parameters_desc' => $row['parameters_desc'], 'note' => $row['note']));
		
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
