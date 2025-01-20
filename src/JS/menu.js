function toggleUserMenu() {
    const userMenu = document.querySelector('.user-menu');
  
    // Alterna visibilidade do menu de usuário
    userMenu.style.display = userMenu.style.display === 'block' ? 'none' : 'block';
  
    // Garante que outros menus estejam ocultos
    const loginForm = document.getElementById('login-form');
    if (loginForm) loginForm.style.display = 'none';
  }
  