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
        // Armazenar a URL da página atual para que o usuário continue na mesma página
        localStorage.setItem("paginaAnterior", window.location.href);

        document.getElementById("login-form").style.display = "none";
        document.getElementById("login-button").style.display = "none";
        document.getElementById("user-icon").style.display = "block";
        
        // NÃO redirecionar para outra página. O usuário permanece na mesma página.
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

    // Verifica se há uma página anterior armazenada e redireciona para ela
    const paginaAnterior = localStorage.getItem("paginaAnterior");
    if (paginaAnterior) {
        window.location.href = paginaAnterior; // Volta para a página onde o usuário estava antes
    } else {
        window.location.href = "index.html"; // Caso não tenha página anterior, vai para a página inicial
    }
}
