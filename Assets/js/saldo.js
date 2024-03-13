document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById("depositBtn").addEventListener("click", function(e) {
      e.preventDefault(); 

      var fromAccount = document.getElementById("fromAccount").value;
      var toAccount = document.getElementById("toAccount").value;
      var amount = parseFloat(document.getElementById("amount").value);

      if (fromAccount === toAccount) {
          alert("La cuenta de origen y destino no pueden ser la misma.");
          return;
      }

      if (isNaN(amount) || amount <= 0) {
          alert("Por favor, ingrese un monto válido.");
          return;
      }

      
      var saldoCuentaCorriente = parseInt(document.getElementById("ctacte").innerText);
      var saldoCuentaAhorros = parseInt(document.getElementById("ctaahorro").innerText);
      var saldoCuentaVista = parseInt(document.getElementById("ctavista").innerText);
      
     
        if (fromAccount === "Corriente") {
          if (amount > saldoCuentaCorriente) {
              alert("Fondos insuficientes en la Cuenta Corriente.");
              return;
          }
          saldoCuentaCorriente -= amount; 
      } else if (fromAccount === "Ahorros") {
          if (amount > saldoCuentaAhorros) {
              alert("Fondos insuficientes en la Cuenta de Ahorros.");
              return;
          }
          saldoCuentaAhorros -= amount; 
      } else if (fromAccount === "Vista") {
          if (amount > saldoCuentaVista) {
              alert("Fondos insuficientes en la Cuenta Vista.");
              return;
          }
          saldoCuentaVista -= amount; 
      }

      if (toAccount === "Corriente") {
          saldoCuentaCorriente += amount;
      } else if (toAccount === "Ahorros") {
          saldoCuentaAhorros += amount; 
      } else if (toAccount === "Vista") {
          saldoCuentaVista += amount; 
      }

      document.getElementById("ctacte").innerText=saldoCuentaCorriente;
      document.getElementById("ctaahorro").innerText=saldoCuentaAhorros;
      document.getElementById("ctavista").innerText=saldoCuentaVista;

      

      alert("Transferencia realizada con éxito.");

      
      document.getElementById("transferForm").reset();
  });
});




