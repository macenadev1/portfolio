<?php
session_start()
$host = "localhost";
$user = "root";
$pass = "";
$banco = "portfolio";

$nome = $_POST['nome'];
$email = $_POST['email'];

$conn = new mysqli($host,$user,$pass,$banco);
if($conn->connection_error) {
	die("Connection failed: " . $conn->connect_error);
}
echo "Conectado com sucesso!";

$sql = "INSERT INTO (nome,email,data_entrega,hora_entrega) VALUES ('$nome','$email',NOW())";
if ($conn->query(sql) === true){
  $_SESSION['msg'] = "<p> style='color:green;'>Usuário cadastrado com sucesso</p>";
	header("Location: feedback.php");
} else {
  $_SESSION['msg'] = "<p style='color:red;'>Usuário não cadastrado com sucesso</p>";
	header("Location: feedback.php");
}
$conn->close();
?>