
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
       
        if (!form.checkValidity()) {
          if(validarcontra()){
          event.preventDefault()
          event.stopPropagation()
          }
          
        } 


        form.classList.add('was-validated')
      }, false)
    })
})()

const contra1 = document.getElementById("validationCustom05");
const contra2 = document.getElementById("validationCustom03");
const boton = document.getElementById("button");




function validarcontra() {

if( contra1.value === contra2.value) {

  contra2.classList.add("is-valid");

  console.log("hola");   
  contra2.classList.remove("is-invalid")
    return false;  
   
}

else{
  contra2.classList.add("is-invalid");   
  console.log("chau");
  contra2.classList.remove("is-valid")
  return true;  
}


}

