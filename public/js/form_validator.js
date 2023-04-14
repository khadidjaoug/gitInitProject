let spans_error = document.querySelectorAll('.error_msg'),
    inputs = document.querySelectorAll('input[type=text],input[type=password],input[type=email]');
    form_register = document.querySelector('.form_register')
    checkForm = true;

    console.log(inputs)

const disable_spans_error = function () {          //function tnahi erreur 
for(let i=0; i<spans_error.length; i++){
    spans_error[i].style.visibility = 'hidden';
}
 
} 

const check_require = function (element){
    if(element.value != '' && element.value.length < 5) {      //condition=les champs ne sont pas vide+length<5                   //this=input_nom
        element.classList.add('input_error')
        element.nextElementSibling.style.visibility = 'visible';
        return false;
    }  
    else if(element.value == '' ){                     //enlever rouge et vert
        element.classList.remove('input_error')
        element.classList.remove('input_success')
        element.nextElementSibling.style.visibility = 'hidden';
        return false;

    }     
    else {                                          //en cas d'erreur
        element.classList.remove('input_error')
        element.classList.add('input_success')
        element.nextElementSibling.style.visibility = 'hidden';
        return true;
    }   
}



for(let i = 0; i < inputs.length; i++){

    inputs[i].addEventListener('keyup', function(){            //selectionner tous les elements chaque input dirlou l'evenement keyup
        check_require(this);                        //elle verifier length de champ 
  })
}

form_register.addEventListener('submit', function(event){                     //event=c'est un objet

    event.preventDefault();                            //prevent....elle bloque l'acces de submit


    for(let i = 0; i < inputs.length; i++){
        checkForm = checkForm && check_require(inputs[i]); 
    }

    console.log(check_require(inputs[i]))


    console.log(checkForm)

        if(checkForm){                                     //verifier esq formul est correcte
            form_register.submit();
        }
})



















disable_spans_error();