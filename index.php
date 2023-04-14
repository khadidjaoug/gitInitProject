<?php include("model/database.php") ?>
<?php include("model/product.php") ?>

<?php include("layout/header.php") ?>
<?php include("layout/nav.php") ?>

<?php
     //traitement et recuperation des donnees

  $db = db_connect();                   //execution de la connexion a la base de donnees permet d'afficher connecter f index

  $products = product_get_all($db);
  
  $product = product_get_one($db,1);
  var_dump($product);

  product_delete($db,2);

?>

<div class="content">

<?php foreach($products as $product) {
    var_dump($product);
    ?>

    <div class="article" id="testdiv1">
        <h2><?php echo $product['product_name'] ?></h2>
        <img src="public/img/art.jpg" alt="">
        <p><?php echo $product['product_detail'] ?></p>
        <button >+</button>
        <a href="art_info.html">plus de details</a>
    </div>

    <?php }?>

    <!--
    <div  class="article">
        <h2>Article2</h2>
        <img src="public/img/art.jpg" alt="">
        <p>Details article</p>
        <button>+</button>
        <a href="art_info.html">plus de details</a>
    </div>
    <div  class="article">
        <h2>Article2</h2>
        <img src="public/img/art.jpg" alt="">
        <p>Details article</p>
        <button>+</button>
        <a href="art_info.html">plus de details</a>
    </div>
    <div  class="article">
        <h2>Article2</h2>
        <img src="public/img/art.jpg" alt="">
        <p>Details article</p>
        <button>+</button>
        <a href="art_info.html">plus de details</a>
    </div>
-->   

</div>


<?php include("layout/footer.php") ?>