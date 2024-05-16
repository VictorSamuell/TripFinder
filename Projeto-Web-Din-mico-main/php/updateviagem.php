<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);
echo '<pre>Inicio da script PHP</pre>';
// echo '<pre>' . var_export($_GET) . '</pre>';

$id_viagem = $_GET['id_viagem'];

$NewFullName = $_GET['FullName'];
$NewLocais = $_GET['Locais'];
$NewEmail = $_GET['Email'];
$NewphoneNumber = $_GET['phoneNumber'];
$NewPrice = $_GET['Price'];
$NewHotel = $_GET['Hotel'];
$Newgender = $_GET['gender'];


$hostname = "localhost";
$user = "root";
$password = "ifsp";
$database = "viagem";

$conn = mysqli_connect($hostname, $user, $password, $database);

if (!$conn) {
  die("Conexão falhou: " . mysqli_connect_error());
} else {
  echo "Conexão feita com sucesso";

  $query = "UPDATE viagem SET FullName='$NewFullName',Locais='$NewLocais',Email='$NewEmail',phoneNumber='$NewphoneNumber',Price='$NewPrice',Hotel='$NewHotel',gender='$NewGender' WHERE id_viagem=$id_viagem";;

  $res = mysqli_query($conn, $query);
}
header("Location: http://localhost:5000/pages/signup.html");
exit();

?>