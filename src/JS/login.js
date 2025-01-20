// Função para mostrar/ocultar o formulário de login
function toggleLoginForm() {
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
}

// Função de Login
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        localStorage.setItem("usuarioLogado", "true"); // Salva o login no navegador

        document.getElementById("login-form").style.display = "none";
        document.getElementById("login-button").style.display = "none";
        document.getElementById("user-icon").style.display = "block";
        
        // Redireciona para a página de gerenciamento após login
        window.location.href = "Login.html";
    } else {
        document.getElementById("login-form").innerHTML += "<p style='color: red;'>Por favor, preencha todos os campos.</p>";
    }
}

// Exibir o menu apenas se estiver logado
window.onload = function () {
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    const userMenu = document.getElementById("user-menu");
    const loginButton = document.getElementById("login-button");
    const userIcon = document.getElementById("user-icon");

    if (usuarioLogado === "true") {
        if (loginButton) loginButton.style.display = "none";
        if (userIcon) userIcon.style.display = "block";
    }

    // Esconde o menu por padrão e só exibe quando o usuário clicar
    if (userMenu) {
        userMenu.style.display = "none"; // Esconde o menu inicialmente
    }
};

// Função para exibir ou ocultar o menu ao clicar
function toggleUserMenu() {
    const userMenu = document.getElementById("user-menu");
    if (userMenu) {
        // Alterna a visibilidade do menu
        userMenu.style.display = userMenu.style.display === "block" ? "none" : "block";
    }
}

// Função de Logout
function logoutUser() {
    localStorage.removeItem("usuarioLogado"); // Remove o login salvo

    // Redireciona para a página de onde o usuário veio
    const previousPage = document.referrer;
    if (previousPage) {
        window.location.href = previousPage; // Volta para a página anterior
    } else {
        window.location.href = "index.html"; // Caso não tenha página anterior, vai para a página inicial
    }
}
