document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar recargar la página

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Limpiar mensaje previo
    errorMessage.textContent = '';

    if (username === 'carlos' && password === '12345') {
        setTimeout(function() {
            // Redireccionar a otra página
            window.location.href = "/html/inicio.html";
        }, 3000);
    } else {
        setTimeout(function() {
            errorMessage.textContent = 'Usuario inválido';
        }, 3000);
    }
});
