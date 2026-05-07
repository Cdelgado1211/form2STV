document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     SALUDO NOMBRE / COMPANY
     ========================= */

  var nombreInput = document.querySelector(".NOMBRE input");
  var companyInput = document.querySelector(".COMPANY input");

  var saludoBloque = Array.from(
    document.querySelectorAll("li label, li div, div")
  ).find(function (el) {

    return (
      el.innerHTML &&
      el.innerHTML.includes("${Nombre_Apellido}")
    );

  });

  if (saludoBloque) {

    var nombre = "";

    // Prioridad: Nombre
    if (
      nombreInput &&
      nombreInput.value.trim() !== ""
    ) {

      nombre = nombreInput.value.trim();

    }

    // Si no hay nombre, usar company
    if (
      !nombre &&
      companyInput &&
      companyInput.value.trim() !== ""
    ) {

      nombre = companyInput.value.trim();

    }

    // Fallback
    if (!nombre) {
      nombre = "Cliente";
    }

    // Reemplazar variable
    saludoBloque.innerHTML =
      saludoBloque.innerHTML.replace(
        "${Nombre_Apellido}",
        nombre
      );

  }

});