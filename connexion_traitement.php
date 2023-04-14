<?php 
include('model/database.php');
include('model/user.php');

$db = db_connect();

//recuperation des donnees saisies
$user = $_POST["username"];
$password = $_POST["password"];

//verification du compte utilisateur
if (checkUser($db,$user,$password))
{
    //creation d'une session utilisateur
    session_start();
    $_SESSION['username'] = $user;                               //c'est un tableau
    
    header('location:profil.php');                       // redirection
} else {
    header("location:connexion.php");              
}

?>