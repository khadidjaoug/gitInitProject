<?php
function db_connect(){

    $host = 'localhost';
    $dbname = 'aec19_db1_import';

    $dsn = "mysql:host=$host;dbname=$dbname";
    $user_name = 'root';
    $pass = '';

    try {
        $db = new PDO($dsn,$user_name,$pass);         //la ligne qui relie databse b les pages
        echo "Connecter  ";
    } catch ( Exception  $e ) {
        echo "ERREUR :  " . $e->getMessage();
    }

    return $db;
}