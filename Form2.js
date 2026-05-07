document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     SALUDO HTML
     ========================= */

  var nombreInput = document.querySelector(".NOMBRE input");
  var companyInput = document.querySelector(".COMPANY input");

  var nombre = "";

  if (nombreInput && nombreInput.value.trim() !== "") {
    nombre = nombreInput.value.trim();
  }

  if (!nombre && companyInput && companyInput.value.trim() !== "") {
    nombre = companyInput.value.trim();
  }

  if (!nombre) {
    nombre = "Cliente";
  }

  /* Buscar el HTML que contiene ${Nombre_Apellido} */
  var bloques = document.querySelectorAll("div");

  bloques.forEach(function(div) {

    if (div.innerHTML.includes("${Nombre_Apellido}")) {

      div.innerHTML = div.innerHTML.replace(
        "${Nombre_Apellido}",
        nombre
      );

    }

  });

});