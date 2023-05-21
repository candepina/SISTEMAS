document.getElementById("dniForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtén el valor del número de DNI ingresado
    var dniNumber = document.getElementById("dniNumber").value;
  
    // Verifica si el número de DNI es válido (aquí deberías implementar tu propia lógica de validación)
    if (dniNumber !== "") {
      var pdfMapping = {
        "47172513": "47172513.pdf",
        "17385722": "17385722.pdf",
        // Agrega más correspondencias según sea necesario
      };
  
      // Verifica si el número de DNI tiene una correspondencia de PDF
      if (pdfMapping.hasOwnProperty(dniNumber)) {
        // Obtiene el nombre del archivo PDF correspondiente al número de DNI
        var pdfFileName = pdfMapping[dniNumber];
        // Crea la URL del PDF basada en el nombre del archivo
        var pdfUrl = pdfFileName;
        // Abre el PDF en una nueva pestaña o ventana del navegador
        window.open(pdfUrl, "_blank");
      } else {
        alert("No se encontró un PDF correspondiente al número de DNI ingresado.");
      }
    } else {
      alert("Ingresa un número de DNI válido."); // Muestra un mensaje de error si el número de DNI está vacío
    }
  });
  