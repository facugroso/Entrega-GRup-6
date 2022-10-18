document.getElementById("button").addEventListener("click", function () {
    
    let nombre = document.getElementById("txtPassword");
    let apellido = document.getElementById("txtPassword");
    let email = document.getElementById("txtEmail");
    let password = document.getElementById("txtPassword");
    let repPass = document.getElementById("txtPassword");

    if ((nombre.value === "")||(apellido.value === "")||(email.value === "")||(password.value === "")||(repPass.value === ""))
    {
      alert("Debe de completar campos")
    } 
  
  });