<?php

ini_set("display_errors", 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

echo '<pre>Inicio</pre>';

$hostname = "localhost";
$user = "root";
$password = "ifsp";
$database = "viagem";

$conn = mysqli_connect($hostname, $user, $password, $database);


if(!$conn){
    die("Conexão falhou : ". mysqli_connect_error());
}

echo "Conexão feita com sucesso";

$query = "select * from viagem";
$results = mysqli_query($conn, $query);

$index = 0;

while($record = mysqli_fetch_row($results)){
    $travel = array(
        'id_viagem' => $record[0],
        'FullName' => $record[1],
        'Locais' => $record[2],
        'Email' => $record[3],
        'phoneNumber' => $record[4],
        'Price' => $record[5],
        'Hotel' => $record[6],
        'gender' => $record[7]

    );

    $travels[$index] = $travel;
    $index++;

    
}


mysqli_close($conn);
$formattedData = json_encode($travels, JSON_PRETTY_PRINT);
echo "<pre>" . $formattedData . "</pre>";






?>