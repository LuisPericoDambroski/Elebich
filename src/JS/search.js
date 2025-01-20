// Função para mostrar/ocultar a barra de pesquisa
const searchIcon = document.getElementById('search-icon');
const searchBar = document.querySelector('.search-bar');

// Quando o ícone de busca for clicado, alterna a visibilidade da barra de pesquisa
searchIcon.addEventListener('click', () => {
  // Alterna a visibilidade da barra de pesquisa
  searchBar.classList.toggle('active');
  searchBar.focus(); // Coloca o foco automaticamente na barra
});

// Oculta a barra de pesquisa se o clique for fora da área da pesquisa
document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-container')) {
    searchBar.classList.remove('active');
  }
});
