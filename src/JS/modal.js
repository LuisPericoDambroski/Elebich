const praias = [
  { nome: "Baía do Sancho", descricao: "Localizada em Fernando de Noronha, Pernambuco, a Baía do Sancho é considerada uma das mais belas praias do Brasil, com águas cristalinas e rica vida marinha.", imagem: "/IMAGENS/highlight1.png", preco: "R$ 300,00" },
  { nome: "Praia do Espelho", descricao: "Localizada em Trancoso, Bahia, a Praia do Espelho é famosa por sua beleza natural, com águas tranquilas e falésias impressionantes.", imagem: "/IMAGENS/highlight2.jpeg", preco: "R$ 250,00" },
  { nome: "Praia dos Carneiros", descricao: "Localizada em Tamandaré, Pernambuco, a Praia dos Carneiros é famosa por suas águas calmas, transparentes e sua paisagem paradisíaca com coqueirais.", imagem: "/IMAGENS/highlight3.jpeg", preco: "R$ 280,00" },
  { nome: "Praia de Jericoacoara", descricao: "Localizada no Ceará, Jericoacoara é famosa por suas dunas e lagoas de águas cristalinas, um destino ideal para quem busca aventura e tranquilidade.", imagem: "/IMAGENS/highlight4.jpg", preco: "R$ 350,00" },
  { nome: "Praia de Garapuá", descricao: "Localizada em Cairu, Bahia, a Praia de Garapuá é uma das mais tranquilas da região, com águas calmas e rodeada de vegetação nativa.", imagem: "/IMAGENS/highlight5.jpg", preco: "R$ 220,00" },
  { nome: "Praia da Ilha do Campeche", descricao: "Localizada em Florianópolis, Santa Catarina, a Ilha do Campeche é conhecida por suas águas cristalinas e trilhas que levam a sítios arqueológicos.", imagem: "/IMAGENS/highlight6.jpg", preco: "R$ 330,00" },
  { nome: "Praia da Lagoinha do Leste", descricao: "Localizada em Florianópolis, Santa Catarina, a Praia da Lagoinha do Leste é isolada e de difícil acesso, oferecendo uma paisagem intocada e tranquila.", imagem: "/IMAGENS/highlight7.jpeg", preco: "R$ 240,00" },
  { nome: "Praia da Ponta do Corumbau", descricao: "Localizada em Corumbau, Bahia, a Praia da Ponta do Corumbau é um destino mais tranquilo, com águas claras e recifes de corais.", imagem: "/IMAGENS/highlight8.webp", preco: "R$ 290,00" },
  { nome: "Praia de Copacabana", descricao: "Localizada no Rio de Janeiro, a Praia de Copacabana é uma das praias mais famosas do Brasil, com sua extensa faixa de areia e o famoso calçadão.", imagem: "/IMAGENS/highlight9.png", preco: "R$ 400,00" },
  { nome: "Praia de Jurerê", descricao: "Localizada em Florianópolis, Jurerê é famosa por sua infraestrutura de alto padrão, águas calmas e excelente para esportes náuticos.", imagem: "/IMAGENS/highlight10.webp", preco: "R$ 350,00" },
  { nome: "Praia de Ponta Verde", descricao: "Localizada em Maceió, Alagoas, a Praia de Ponta Verde é uma das mais visitadas, com águas claras, coqueiros e uma excelente infraestrutura de lazer.", imagem: "/IMAGENS/highlight11.webp", preco: "R$ 280,00" },
  { nome: "Praia do Farol", descricao: "Localizada em Arraial do Cabo, Rio de Janeiro, a Praia do Farol é famosa por suas águas transparentes, ideais para mergulho e um cenário deslumbrante.", imagem: "/IMAGENS/highlight12.webp", preco: "R$ 390,00" },
  { nome: "Praia do Francês", descricao: "Localizada em Alagoas, a Praia do Francês é famosa por sua beleza natural e águas ideais para a prática de esportes aquáticos.", imagem: "/IMAGENS/highlight1.png", preco: "R$ 270,00" },
  { nome: "Praia do Forte", descricao: "Localizada em Mata de São João, Bahia, a Praia do Forte é famosa pelo seu vilarejo e pela presença do Projeto Tamar.", imagem: "/IMAGENS/highlight2.jpeg", preco: "R$ 320,00" },
  { nome: "Praia de Pipa", descricao: "Localizada no Rio Grande do Norte, a Praia de Pipa é famosa por suas falésias e águas mornas e calmas.", imagem: "/IMAGENS/highlight3.jpeg", preco: "R$ 310,00" },
  { nome: "Praia do Rosa", descricao: "Localizada em Imbituba, Santa Catarina, a Praia do Rosa é conhecida por sua beleza e como um ponto de encontro para surfistas.", imagem: "/IMAGENS/highlight4.jpg", preco: "R$ 330,00" },
  { nome: "Praia de Canoa Quebrada", descricao: "Localizada no Ceará, Canoa Quebrada é famosa por suas falésias e suas festas, sendo um destino ideal para quem busca diversão.", imagem: "/IMAGENS/highlight5.jpg", preco: "R$ 340,00" },
  { nome: "Praia de Maragogi", descricao: "Localizada em Alagoas, Maragogi é conhecida por suas piscinas naturais e águas cristalinas.", imagem: "/IMAGENS/highlight6.jpg", preco: "R$ 270,00" },
  { nome: "Praia de Tambaba", descricao: "Localizada na Paraíba, a Praia de Tambaba é famosa por ser uma das primeiras praias de naturismo no Brasil.", imagem: "/IMAGENS/highlight7.jpeg", preco: "R$ 220,00" },
  { nome: "Praia do Leste", descricao: "Localizada no Paraná, a Praia do Leste é tranquila, com uma linda vegetação ao redor e águas claras.", imagem: "/IMAGENS/highlight8.webp", preco: "R$ 200,00" },
  { nome: "Praia de Antunes", descricao: "Localizada em Maragogi, Alagoas, a Praia de Antunes é um paraíso tropical com águas tranquilas e piscinas naturais.", imagem: "/IMAGENS/highlight9.png", preco: "R$ 230,00" },
  { nome: "Praia de Morro Branco", descricao: "Localizada em Beberibe, Ceará, a Praia de Morro Branco é famosa pelas falésias coloridas e suas águas calmas.", imagem: "/IMAGENS/highlight10.webp", preco: "R$ 270,00" },
  { nome: "Praia do Bonfim", descricao: "Localizada em São Sebastião, São Paulo, a Praia do Bonfim é conhecida por suas águas tranquilas e vegetação nativa.", imagem: "/IMAGENS/highlight11.webp", preco: "R$ 250,00" },
  { nome: "Praia do Cumbuco", descricao: "Localizada no Ceará, a Praia do Cumbuco é um destino ideal para a prática de esportes radicais como o kite-surf.", imagem: "/IMAGENS/highlight12.webp", preco: "R$ 350,00" },
  { nome: "Praia do Meio", descricao: "Localizada em Natal, Rio Grande do Norte, a Praia do Meio é famosa por sua boa infraestrutura e águas calmas.", imagem: "/IMAGENS/highlight1.png", preco: "R$ 240,00" },
  { nome: "Praia de Ipanema", descricao: "Localizada no Rio de Janeiro, a Praia de Ipanema é famosa mundialmente pela sua beleza e pela sua vida noturna.", imagem: "/IMAGENS/highlight2.jpeg", preco: "R$ 380,00" },
  { nome: "Praia do Jacaré", descricao: "Localizada na Paraíba, a Praia do Jacaré é famosa pelo pôr do sol ao som do Bolero de Ravel.", imagem: "/IMAGENS/highlight3.jpeg", preco: "R$ 260,00" },
  { nome: "Praia de Taipu de Fora", descricao: "Localizada em Barra Grande, Bahia, Taipu de Fora é famosa pelas suas piscinas naturais e recifes.", imagem: "/IMAGENS/highlight4.jpg", preco: "R$ 310,00" },
  { nome: "Praia da Barra de São Miguel", descricao: "Localizada em Alagoas, a Praia da Barra de São Miguel é famosa por suas águas calmas e paisagem deslumbrante.", imagem: "/IMAGENS/highlight5.jpg", preco: "R$ 300,00" },
  { nome: "Praia de São Miguel do Gostoso", descricao: "Localizada no Rio Grande do Norte, São Miguel do Gostoso é uma praia tranquila, famosa por suas belezas naturais.", imagem: "/IMAGENS/highlight6.jpg", preco: "R$ 220,00" },
  { nome: "Praia de Praia do Amor", descricao: "Localizada em Tibau do Sul, Rio Grande do Norte, a Praia do Amor é famosa pelas suas falésias e águas calmas.", imagem: "/IMAGENS/highlight7.jpeg", preco: "R$ 250,00" },
  { nome: "Praia de Morro de São Paulo", descricao: "Localizada em Cairu, Bahia, a Praia de Morro de São Paulo é conhecida por suas belas paisagens e águas tranquilas.", imagem: "/IMAGENS/highlight8.webp", preco: "R$ 270,00" },
  { nome: "Praia de Cacimbinhas", descricao: "Localizada em Tibau do Sul, Rio Grande do Norte, a Praia de Cacimbinhas é conhecida pelas suas águas claras e tranquilas, além de belas falésias.", imagem: "/IMAGENS/highlight9.png", preco: "R$ 260,00" },
  { nome: "Praia do Litoral Norte", descricao: "Localizada em São Sebastião, São Paulo, a Praia do Litoral Norte é famosa por suas belas paisagens e águas calmas.", imagem: "/IMAGENS/highlight10.webp", preco: "R$ 220,00" },
  { nome: "Praia de Barra Grande", descricao: "Localizada em Maraú, Bahia, a Praia de Barra Grande é famosa por suas águas tranquilas e por ser um destino ideal para quem gosta de sossego.", imagem: "/IMAGENS/highlight11.webp", preco: "R$ 240,00" },
  { nome: "Praia do Guarujá", descricao: "Localizada em São Paulo, a Praia do Guarujá é uma das mais visitadas no estado, com belas opções de lazer e boa infraestrutura.", imagem: "/IMAGENS/highlight12.webp", preco: "R$ 280,00" }
];


// Script para abrir o modal ao clicar no botão "Saiba Mais" na página index.html
document.querySelectorAll('.saiba-mais').forEach(button => {
  button.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    const praia = praias[id - 1];

    // Atualiza a imagem, o texto e o preço no modal
    document.getElementById('modal-image').src = praia.imagem;
    document.getElementById('modal-text').innerHTML = `<h2>${praia.nome}</h2><p>${praia.descricao}</p><p><strong>Preço:</strong> ${praia.preco}</p>`;

    // Exibe o modal
    document.getElementById('modal').style.display = 'flex'; // Garante que o modal seja exibido no centro

    // Atualiza o botão "Ir até a página" para redirecionar para a página com o ID da praia
    const goToPageButton = document.querySelector('.go-to-page');
    goToPageButton.onclick = function () {
      // Redireciona para a página de Praias.html com o ID da praia
      window.location.href = `Praias.html?id=${id}`;
    };
  });
});

// Fecha o modal ao clicar no botão de fechar
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// Fecha o modal ao clicar em qualquer lugar fora do conteúdo do modal
document.getElementById('modal').addEventListener('click', function (e) {
  if (e.target === this) {
    this.style.display = 'none';
  }
});

// Verifica se a página foi acessada com um ID no URL (e.g. ?id=1) na página Praias.html
window.addEventListener('load', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id'); // Obtém o ID da praia a partir da URL

  if (id) {
    // Se houver um ID na URL, mostra o modal automaticamente
    const praia = praias[id - 1];

    // Atualiza a imagem, o texto e o preço no modal
    document.getElementById('modal-image').src = praia.imagem;
    document.getElementById('modal-text').innerHTML = `<h2>${praia.nome}</h2><p>${praia.descricao}</p><p><strong>Preço:</strong> ${praia.preco}</p>`;

    // Exibe o modal
    document.getElementById('modal').style.display = 'flex';
  } else {
    // Garante que o modal não seja exibido ao carregar a página sem parâmetros na URL
    document.getElementById('modal').style.display = 'none';
  }
});
