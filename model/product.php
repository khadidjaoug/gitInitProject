
<?php

function product_get_all($db){

    //preparation de la requete SQL
    $requete = $db->prepare("select * from product");
    //execution de la requete SQL
    $requete->execute();

    //convertir les donnees recuperees en tableau php
    $products = $requete->fetchAll();


    return $products;
}

function product_get_one($db,$product_id){                             //requete parametre :les donnees sont statiques yjo men interface

    $sql = "select * from product where product_id = :product_id";
    
    $requete = $db->prepare($sql);
    
    $requete->bindValue(":product_id",$product_id);

    $requete->execute();

    $product = $requete->fetch(PDO::FETCH_ASSOC);           //fetch assoc tjib une seul produit


    return $product;
}


function product_delete($db,$product_id){

    $sql = "delete from product where product_id = :product_id";
    
    $requete = $db->prepare($sql);
    
    $requete->bindValue(":product_id",$product_id);

    $requete->execute();

    
}

function product_add($db,$product_name,$product_detail,$product_price,$product_qt){

    $sql = "INSERT INTO product(product_name, product_detail, product_price, product_qt) 
    VALUES ( :product_name, :product_detail, :product_price, :product_qt)";
    
    $requete = $db->prepare($sql);                    //objet njbdou menou method //declarer une requete sql
    
    $requete->bindValue(":product_name",$product_name);           //bindvalue tu donne un paremtre eet wch taamer fih
    $requete->bindValue(":product_detail",$product_detail);
    $requete->bindValue(":product_price",$product_price);              //(:value,paremtre product li yetaamer)
    $requete->bindValue(":product_qt",$product_qt);

    $requete->execute();    
}

function product_update($db,$product_id,$product_name,$product_detail,$product_price,$product_qt){      //id jamais yetmodefiya
    $sql = "UPDATE product SET product_name= :product_name, product_detail= :product_detail,
    product_price= :product_price, product_qt= :product_qt WHERE product_id= :product_id";               //aamer :product_qt wech naatik

    $requete = $db->prepare($sql); 

    $requete->bindValue(":product_id",$product_id); 
    $requete->bindValue(":product_name",$product_name);           
    $requete->bindValue(":product_detail",$product_detail);
    $requete->bindValue(":product_price",$product_price);              
    $requete->bindValue(":product_qt",$product_qt);

    $requete->execute();

}