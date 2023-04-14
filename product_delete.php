<?php
include('model/database.php');
include('model/product.php');

//les etapes de suppression

$db = db_connect();

$product_id = $_GET['id'];

product_delete($db,$product_id);

header('location:product_list_admin.php');