<?php include("model/database.php") ?>
<?php include("model/product.php") ?>

<?php include("layout/header.php") ?>
<?php include("layout/nav.php") ?>

<?php
     //traitement et recuperation des donnees

  $db = db_connect();                   //connexion a la base de donnees
  $products = product_get_all($db);
  
?>

<div class="content">
<div class="article">
        <h1> gestion des articles</h1>

        <a href="product_add.php">Ajouter article</a>

    <table border="1">
        <tr>
            <th>Produits</th>
            <th>Prix</th>
            <th>Detail</th>
            <th></th>
        </tr>
        <?php foreach($products as $product) { ?>
        <tr>
            <td><?php echo $product['product_name'] ?></td>
            <td><?php echo $product['product_price'] ?></td>
            <td><?php echo $product['product_detail'] ?></td>
            <td><a href="product_update.php?id=<?php echo $product['product_id'] ?>">Modifier</a></td>
            <td><a href="product_delete.php?id=<?php echo $product['product_id'] ?>">Supprimer</a></td>      <!--method get pour envoyer les donnees et les recevoir f un autre fichier-->
        </tr>

        <?php }?>
    </table>

        </div>
</div>


<?php include("layout/footer.php") ?>