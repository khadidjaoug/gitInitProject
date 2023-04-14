//declaration de la fonction(traitement)
const checkAdmis = function(nbr){
    let note,moyenne,admis;
    let somme = 0;
    
        
for(let i=0; i<nbr; i++)   
{                                    
    note = parseInt(prompt('saisir la note '+(i+1)))    
    somme += note;

}

moyenne = calculMoy(somme,nbr)

if (moyenne>=10) admis = true; 
   else admis = false;

return admis;

}


const calculMoy = function(somme,nbr){

    moyenne = somme / nbr;

    return moyenne;
}



//Appel et execution de la fonction
let nbr = parseInt(prompt('donner le nombre de notes a saisir'))
let result1 = checkAdmis(nbr)
console.log(result1)


/*moyenne d'un tableau
function moyenne(myArray) {
        var n = myArray.length;
        var sum = 0;
        for(i=0; i<n; i++){
            sum += myArray[i]
        }
        var result = sum/n;

         return result;
 }

var myArray = [16,14,10,17];
var a = moyenne(myArray);
console.log(a);*/



//tableau
let tab1 = []
console.log(tab1)
tab1.push(12);
tab1.push(5);
tab1.push(10);
tab1.push(5);
console.log(tab1)
tab1[1] = 'new 11' ;
console.log(tab1)

//boucle
for(let i=0; i < tab1.length; i++){
    console.log('la colonne ',i, 'contient : ',tab1[i])
    if(tab1[i] == 5) tab1[i] = 0;
}

console.log(tab1)


//console.log('votre nom :',tab1[0])
//console.log('votre prenom :',tab[1])

//objet

let etudiantObj = {
    tel : "06666666666",            //propriete
    adresse :'hydra',
    nom : 'oug',
    prenom : 'khadid',
    age : 24,
    showName : function(){   // c'est une methode d'objet
        alert('bienvenu '+ this.nom)
    }   
}
console.log(etudiantObj)
etudiantObj.nom = 'dadou'
etudiantObj.showName()

/*1ere methode "PROGRAMME DE CALCULE DE LA SUM"
let a = 5,b = 6;
let s;

s = a + b;

console.log(s);*/




//2eme methode "DECLARATION DE LA FONCTION CALCULE DE LA SUM"//

const Somme = function(a,b) {

    let s;
    s = a + b;

    return s;
   
}


//"EXECUTION DE LA FONCTION CALCULE DE LA SUM"//
let s1=  Somme(6,8);
console.log(s1);

let s2= Somme(4,12);
console.log(s2);


/*programme tableau hors fonction
let tab2 = []

for(let i=0; i < tab2.length ; i++){
    
    tab2.push(n)
    
}

console.log(tab2);*/



//function d'une tableau
const tableInsert = function (tabLength,valUp,valInit){

    let tab2 = [];
    let valAug = valInit;
    
    for(let i=0; i < tabLength ; i++){
        
        tab2.push(valAug)
        valAug+=valUp;       //insertion apres yzid
        
        /*valUp=valUp*2;     twali valeur *2*/
    }
    
    return tab2;
}


let result2 = tableInsert(6,2,0);
console.log(result2)         // HNA C'EST LAFFICHAGE


console.log(tableInsert(8,3,10))
