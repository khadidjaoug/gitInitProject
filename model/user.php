<?php

function checkUser($db,$username,$password){

$sql = "select user_id,user_username,user_priv from user where user_username = :user_username
       and user_password = :user_password";


$requete = $db->prepare($sql);

//afficher l'utilisateur

$requete->bindValue(":user_username",$username);
$requete->bindValue(":user_password",$password);

$requete->execute();

//verifier esq lutili est juste
$connect = $requete->fetch(PDO::FETCH_ASSOC);               //fetch return false ou true ou bien la donnee

return $connect;
}