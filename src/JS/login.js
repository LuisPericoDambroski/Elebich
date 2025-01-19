// Função para mostrar/ocultar o formulário de login
function toggleLoginForm() {
    const loginForm = document.getElementById('login-form');
    // Alterna a visibilidade do formulário
    loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
}

// Função de Login
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulação de login (aceita qualquer valor)
    if (email && password) {
        // Alterar a UI após o login
        document.getElementById("login-form").style.display = "none";  // Esconde o formulário de login
        document.getElementById("login-button").style.display = "none";  // Esconde o botão de login
        document.getElementById("user-icon").style.display = "block";  // Exibe o ícone de usuário
    } else {
        // Exibe mensagem de erro caso campos estejam vazios
        document.getElementById("login-form").innerHTML += "<p style='color: red;'>Por favor, preencha todos os campos.</p>";
    }
}

// Função para exibir o menu do usuário
function toggleUserMenu() {
    const userMenu = document.getElementById("user-menu");
    // Alterna a visibilidade do menu do usuário
    userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
}

// Função de Logout
function logoutUser() {
    // Esconde o menu do usuário e exibe novamente o botão de login
    document.getElementById("user-menu").style.display = "none";
    document.getElementById("user-icon").style.display = "none";
    document.getElementById("login-button").style.display = "block";  // Exibe o botão de login novamente
}
