
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {

        if (!form.checkValidity() || validarcontra()) {
         
            event.preventDefault()
            event.stopPropagation()

          }
         
      form.classList.add('was-validated')
    
      }, false)
    })
})()

const contra1 = document.getElementById("validationCustom05");
const contra2 = document.getElementById("validationCustom03");



contra2.addEventListener("input",validarcontra);

function validarcontra() {
 
  if (contra1.value === contra2.value) {
    contra2.classList.add("is-valid");
    console.log("hola");
    contra2.classList.remove("is-invalid");
    contra2.setCustomValidity("");
    return false;
  }
  else {
    contra2.classList.add("is-invalid");
    console.log("chau");
    contra2.classList.remove("is-valid");
    contra2.setCustomValidity("error");
    return true;
  }
}


function elemento() {

  elemento = document.getElementById("terminos");
  if (!elemento.checked) {
    return false;
  }

}