<?php
// Recupere o ID da viagem a ser deletada
$id_viagem = $_GET['id_viagem'];
echo $id_viagem;

// Conecte-se ao banco de dados
$hostname = "localhost";
$user = "root";
$password = "ifsp";
$database = "viagem";

$conn = mysqli_connect($hostname, $user, $password, $database);

// Verifique a conexão
if (!$conn) {
    die("Conexão falhou: " . mysqli_connect_error());
}

// Deleta a viagem do banco de dados usando uma consulta preparada
$query = "DELETE FROM viagem WHERE id_viagem=?";
$stmt = mysqli_prepare($conn, $query);
mysqli_stmt_bind_param($stmt, 'i', $id_viagem);
$result = mysqli_stmt_execute($stmt);

// Verifica se a deleção foi bem-sucedida
if ($result) {
    echo "Viagem deletada com sucesso.";
} else {
    echo "Erro ao deletar viagem: " . mysqli_error($conn);
}

// Fecha a consulta preparada e a conexão com o banco de dados
mysqli_stmt_close($stmt);
mysqli_close($conn);
?>