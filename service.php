<?php
 		$query = "SELECT name, uzel1_name, uzel1_desc FROM tfp1_3 order by uzel1_desc ASC ";
		$result = db_connection($query);
		
		$equipments = array();

		while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
			array_push($equipments, array('name' => $row['name'], 'uzel1_name' => $row['uzel1_name'], 'uzel1_desc' => $row['uzel1_desc']));
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