<?php

require_once 'vendor/autoload.php';
require_once 'get_results.php';

session_start();
if (!isset($_SESSION['hit_results'])) {
    $_SESSION['hit_results'] = [];
}

//FIXME: lose of data on page reload

//TODO: load table on page startup
//TODO: return error code if params are invalid
//TODO: check float conversion (replace , with .)
//TODO: check numeric

$x = floatval($_POST['paramX']);
$y = floatval($_POST['paramY']);
$unitR = floatval($_POST['paramR']);

$validator = new Validator();
$isValid = $validator->isPointInShape($x, $y, $unitR) ? "true" : "false";

$currentTime = date('H:i:s', time());
$executionTime = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 5);

$data = [
    "x" => $x,
    "y" => $y,
    "r" => $unitR,
    "inShape" => $isValid,
    "currentTime" => $currentTime,
    "executionTime" => $executionTime
];

$_SESSION['hit_results'][] = $data;

include 'get_results.php';