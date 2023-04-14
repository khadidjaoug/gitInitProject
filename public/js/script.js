//alert("premier test");
/*console.log('test console')*/


// ENTREES
//programme gere l'admission
let note,moyenne,admis;
let somme = 0;
let nbr = parseInt(prompt('donner le nombre de notes a saisir'))        //LUTILISTATEUR decide combien de note pour saisir

for(let i=0; i<nbr; i++)   // i c'est le compteur standard
{                                    
    note = parseInt(prompt('saisir la note '+(i+1)))    //+ bach yconvertiha
    somme += note;
}

moyenne = somme/nbr;

console.log('moyenne',moyenne)

if (moyenne>=10) admis = true; 
   else admis = false;

   if(admis==true) alert('vous etes admis') 
else alert('vous etes ajourne') 


/*
//convertir les donnes au format numerique
note1 = parseInt(note1);
note2 = parseInt(note2);


// TRAITEMENTS



// SORTIE
console.log('la moyenne : ',moyenne)
console.log('la moyenne : '+moyenne)
console.log('admis',admis)
console.log(note1)
console.log(note2)


console.log(typeof (moyenne));      // number
console.log(typeof(message)) ;               //string



//alert(message+moyenne+'/20')


//alert('la moyenne est :'+(moyenne+1)+'/20')

/*let cpt = 12;    //point de depart
console.log("boucle 1")
while(cpt<10){
    cpt++;           //l'increment
    console.log("tour numero : ",cpt)
}

console.log("boucle 2")
cpt = 12;
do{
    cpt++;           
    console.log("tour numero : ",cpt)
}while(cpt<10)


let message = '';    
while(message != 'fin'){
   message = prompt('saisir le msg')
   if(message != 'fin') {
    alert("le mot est errone")
    }
}

let a = 2 ;
if(a == 2)
{
    console.log('ok')
}*/

/*for(let cpt=0; cpt<10; cpt++){     // elle marche sans condition
    console.log("tour numero : ",cpt)
}*/