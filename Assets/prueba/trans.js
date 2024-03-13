document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var banco = document.getElementById("banco").value;
    var cuenta = document.getElementById("cuenta").value;
    var correo = document.getElementById("correo").value;

    // Agregar contacto a la tabla
    var table = document.getElementById("contactosTable").getElementsByTagName("tbody")[0];
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = nombre;
    cell2.innerHTML = banco;
    cell3.innerHTML = cuenta;
    cell4.innerHTML = correo;

    // Limpiar campos del formulario
    document.getElementById("contactoForm").reset();
});

document.getElementById("transferenciaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var origen = document.getElementById("origen").value;
    var destino = document.getElementById("destino").value;
    var monto = document.getElementById("monto").value;

    // Aquí puedes manejar la lógica de transferencia
    // Por ahora solo limpiamos los campos del formulario
    document.getElementById("transferenciaForm").reset();
});
