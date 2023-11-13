<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);
echo '<pre>Inicio da script PHP</pre>';
// echo '<pre>' . var_export($_GET) . '</pre>';

$FullName = $_GET['FullName'];
$Locais = $_GET['Locais'];
$Email = $_GET['Email'];
$phoneNumber = $_GET['phoneNumber'];
$Price = $_GET['Price'];
$Hotel = $_GET['Hotel'];
$gender = $_GET['gender'];


$hostname = "localhost";
$user = "root";
$password = "ifsp";
$database = "viagem";

$conn = mysqli_connect($hostname, $user, $password, $database);

if (!$conn) {
  die("Conexão falhou: " . mysqli_connect_error());
} else {
  echo "Conexão feita com sucesso";

  $query = "INSERT INTO viagem (FullName, Locais, Email, phoneNumber, Price, Hotel, gender) VALUES ('$FullName', '$Locais', '$Email', '$phoneNumber', '$Price', '$Hotel', '$gender')";

  $res = mysqli_query($conn, $query);
}
header("Location: http://127.0.0.1:5501/pages/menu.html");
exit();

?>