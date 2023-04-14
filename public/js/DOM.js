//selection des elements
let testdiv1 = document.querySelector('#testdiv1')

  
if (testdiv1 != null && typeof testdiv1 != 'undefined') {
//la meilleure methode
testdiv1.addEventListener('click' , function(){

    if(this.style.background == 'green')
    {
        this.style.background = 'pink';
    }
    else {
        this.style.background = 'green';
    }
})
}


//Menu Dynamique methode 1

// 1- Selection des elements
let btnNav = document.querySelector('#btnNav'),
       nav = document.querySelector('#nav');


let btnBlock = document.querySelector('#btnBlock'),
    btnGrid = document.querySelector('#btnGrid'),
    divArticles = document.querySelectorAll('.article');

//console.log(btnNav,nav) --pour tester

//2- Declarations des fonctions de traitements

const navAnimate = function (element){
   // console.log(element.offsetWidth)

    if(element.style.left == '0%') {                       // 0 c'est visible
        element.style.left = "-"+element.offsetWidth+"px";}
    else {element.style.left = '0%'}
}

//GRILLE
const changeFormat = function(className){                              //bach yjouz sur tt les elements on utilise la boucle for
    for(let i = 0; i<divArticles.length; i++){
        divArticles[i].className= className;
    }
}

//changeFormat('article2')  --pour changer le style



//3- Declaration des Evenements

if (btnGrid != null && typeof btnGrid != 'undefined' && btnBlock != null && typeof btnBlock != 'undefined'){
btnGrid.addEventListener('click', function(){changeFormat("article2")})          // format grid
btnBlock.addEventListener('click', function(){changeFormat("article")})          // format block
}


if (btnNav != null && typeof btnNav != 'undefined' && nav != null && typeof nav != 'undefined'){

    btnNav.addEventListener('click', function(){navAnimate(nav)})
    nav.addEventListener('mouseover', function(){navAnimate(this)})
    nav.addEventListener('mouseout', function(){navAnimate(this)})
}













/*setTimeout(function (){                                    //setTimeout fiha 2 parametre 
    testdiv1.style.background = 'red';
    setTimeout(function (){
        testdiv1.style.background = 'green';
    },4000) 
},4000) */ 