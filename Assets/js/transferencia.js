// Lista de contactos (nombre, banco, número de cuenta)
let contactos = [];

// Función para cargar los contactos en la tabla
function cargarContactos() {
    const tbody = document.getElementById('contactos-body');
    tbody.innerHTML = '';

    contactos.forEach((contacto, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${contacto.nombre}</td>
            <td>${contacto.banco}</td>
            <td>${contacto.numero}</td>
            <td><input type="number"></td>
            <td><button type="button" onclick="transferir(${index})">Transferir</button></td>
        `;
        tbody.appendChild(row);
    });
}
