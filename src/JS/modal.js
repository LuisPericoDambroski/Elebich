// script.js

const praias = [
  { nome: "Baía do Sancho", descricao: "Localizada em Fernando de Noronha, Pernambuco, a Baía do Sancho é considerada uma das mais belas praias do Brasil, com águas cristalinas e rica vida marinha.", imagem: "/IMAGENS/highlight1.jpeg" },
  { nome: "Praia do Espelho", descricao: "Localizada em Trancoso, Bahia, a Praia do Espelho é famosa por sua beleza natural, com águas tranquilas e falésias impressionantes.", imagem: "/IMAGENS/highlight2.jpeg" },
  { nome: "Praia dos Carneiros", descricao: "Localizada em Tamandaré, Pernambuco, a Praia dos Carneiros é famosa por suas águas calmas, transparentes e sua paisagem paradisíaca com coqueirais.", imagem: "/IMAGENS/highlight3.jpeg" },
  { nome: "Praia de Jericoacoara", descricao: "Localizada no Ceará, Jericoacoara é famosa por suas dunas e lagoas de águas cristalinas, um destino ideal para quem busca aventura e tranquilidade.", imagem: "/IMAGENS/highlight4.jpg" },
  { nome: "Praia de Garapuá", descricao: "Localizada em Cairu, Bahia, a Praia de Garapuá é uma das mais tranquilas da região, com águas calmas e rodeada de vegetação nativa.", imagem: "/IMAGENS/highlight5.jpg" },
  { nome: "Praia da Ilha do Campeche", descricao: "Localizada em Florianópolis, Santa Catarina, a Ilha do Campeche é conhecida por suas águas cristalinas e trilhas que levam a sítios arqueológicos.", imagem: "/IMAGENS/highlight6.jpg" },
  { nome: "Praia da Lagoinha do Leste", descricao: "Localizada em Florianópolis, Santa Catarina, a Praia da Lagoinha do Leste é isolada e de difícil acesso, oferecendo uma paisagem intocada e tranquila.", imagem: "/IMAGENS/highlight7.jpeg" },
  { nome: "Praia da Ponta do Corumbau", descricao: "Localizada em Corumbau, Bahia, a Praia da Ponta do Corumbau é um destino mais tranquilo, com águas claras e recifes de corais.", imagem: "/IMAGENS/highlight8.webp" },
  { nome: "Praia de Copacabana", descricao: "Localizada no Rio de Janeiro, a Praia de Copacabana é uma das praias mais famosas do Brasil, com sua extensa faixa de areia e o famoso calçadão.", imagem: "/IMAGENS/highlight9.png" },
  { nome: "Praia de Jurerê", descricao: "Localizada em Florianópolis, Jurerê é famosa por sua infraestrutura de alto padrão, águas calmas e excelente para esportes náuticos.", imagem: "/IMAGENS/highlight10.webp" },
  { nome: "Praia de Ponta Verde", descricao: "Localizada em Maceió, Alagoas, a Praia de Ponta Verde é uma das mais visitadas, com águas claras, coqueiros e uma excelente infraestrutura de lazer.", imagem: "/IMAGENS/highlight11.webp" },
  { nome: "Praia do Farol", descricao: "Localizada em Arraial do Cabo, Rio de Janeiro, a Praia do Farol é famosa por suas águas transparentes, ideais para mergulho e um cenário deslumbrante.", imagem: "/IMAGENS/highlight12.webp" },
  { nome: "Praia do Francês", descricao: "Localizada em Alagoas, a Praia do Francês é famosa por sua beleza natural e águas ideais para a prática de esportes aquáticos.", imagem: "/IMAGENS/highlight13.webp" },
  { nome: "Praia do Forte", descricao: "Localizada em Mata de São João, Bahia, a Praia do Forte é famosa pelo seu vilarejo e pela presença do Projeto Tamar.", imagem: "/IMAGENS/highlight14.jpg" },
  { nome: "Praia de Pipa", descricao: "Localizada no Rio Grande do Norte, a Praia de Pipa é famosa por suas falésias e águas mornas e calmas.", imagem: "/IMAGENS/highlight15.jpg" },
  { nome: "Praia do Rosa", descricao: "Localizada em Imbituba, Santa Catarina, a Praia do Rosa é conhecida por sua beleza e como um ponto de encontro para surfistas.", imagem: "/IMAGENS/highlight16.webp" },
  { nome: "Praia de Canoa Quebrada", descricao: "Localizada no Ceará, Canoa Quebrada é famosa por suas falésias e suas festas, sendo um destino ideal para quem busca diversão.", imagem: "/IMAGENS/highlight17.webp" },
  { nome: "Praia de Jericoacoara", descricao: "Localizada no Ceará, Jericoacoara é famosa por suas dunas e lagoas de águas cristalinas, um destino ideal para quem busca aventura e tranquilidade.", imagem: "/IMAGENS/highlight18.jpg" },
  { nome: "Praia de Maragogi", descricao: "Localizada em Alagoas, Maragogi é conhecida por suas piscinas naturais e águas cristalinas.", imagem: "/IMAGENS/highlight19.jpg" },
  { nome: "Praia de Tambaba", descricao: "Localizada na Paraíba, a Praia de Tambaba é famosa por ser uma das primeiras praias de naturismo no Brasil.", imagem: "/IMAGENS/highlight20.jpg" },
  { nome: "Praia do Leste", descricao: "Localizada no Paraná, a Praia do Leste é tranquila, com uma linda vegetação ao redor e águas claras.", imagem: "/IMAGENS/highlight21.jpg" },
  { nome: "Praia do Francês", descricao: "Localizada em Alagoas, a Praia do Francês é famosa por sua beleza natural e águas ideais para a prática de esportes aquáticos.", imagem: "/IMAGENS/highlight22.webp" },
  { nome: "Praia de Antunes", descricao: "Localizada em Maragogi, Alagoas, a Praia de Antunes é um paraíso tropical com águas tranquilas e piscinas naturais.", imagem: "/IMAGENS/highlight23.jpg" },
  { nome: "Praia de Morro Branco", descricao: "Localizada em Beberibe, Ceará, a Praia de Morro Branco é famosa pelas falésias coloridas e suas águas calmas.", imagem: "/IMAGENS/highlight24.jpg" },
  { nome: "Praia do Bonfim", descricao: "Localizada em São Sebastião, São Paulo, a Praia do Bonfim é conhecida por suas águas tranquilas e vegetação nativa.", imagem: "/IMAGENS/highlight25.jpg" },
  { nome: "Praia do Cumbuco", descricao: "Localizada no Ceará, a Praia do Cumbuco é um destino ideal para a prática de esportes radicais como o kite-surf.", imagem: "/IMAGENS/highlight26.jpg" },
  { nome: "Praia do Meio", descricao: "Localizada em Natal, Rio Grande do Norte, a Praia do Meio é famosa por sua boa infraestrutura e águas calmas.", imagem: "/IMAGENS/highlight27.jpg" },
  { nome: "Praia de Ipanema", descricao: "Localizada no Rio de Janeiro, a Praia de Ipanema é famosa mundialmente pela sua beleza e pela sua vida noturna.", imagem: "/IMAGENS/highlight28.jpg" },
  { nome: "Praia do Jacaré", descricao: "Localizada na Paraíba, a Praia do Jacaré é famosa pelo pôr do sol ao som do Bolero de Ravel.", imagem: "/IMAGENS/highlight29.jpg" },
  { nome: "Praia de Jericoacoara", descricao: "Localizada no Ceará, Jericoacoara é famosa por suas dunas e lagoas de águas cristalinas, um destino ideal para quem busca aventura e tranquilidade.", imagem: "/IMAGENS/highlight30.jpg" },
  { nome: "Praia de Taipu de Fora", descricao: "Localizada em Barra Grande, Bahia, Taipu de Fora é famosa pelas suas piscinas naturais e recifes.", imagem: "/IMAGENS/highlight31.jpg" },
  { nome: "Praia da Barra de São Miguel", descricao: "Localizada em Alagoas, a Praia da Barra de São Miguel é famosa por suas águas calmas e paisagem deslumbrante.", imagem: "/IMAGENS/highlight32.jpg" },
  { nome: "Praia de Copacabana", descricao: "Localizada no Rio de Janeiro, a Praia de Copacabana é uma das praias mais famosas do Brasil, com sua extensa faixa de areia e o famoso calçadão.", imagem: "/IMAGENS/highlight33.jpg" },
  { nome: "Praia de São Miguel do Gostoso", descricao: "Localizada no Rio Grande do Norte, São Miguel do Gostoso é uma praia tranquila, famosa por suas belezas naturais.", imagem: "/IMAGENS/highlight34.jpg" },
  { nome: "Praia de Praia do Amor", descricao: "Localizada em Tibau do Sul, Rio Grande do Norte, a Praia do Amor é famosa pelas suas falésias e águas calmas.", imagem: "/IMAGENS/highlight35.jpg" },
  { nome: "Praia de Morro de São Paulo", descricao: "Localizada em Cairu, Bahia, a Praia de Morro de São Paulo é conhecida por suas belas paisagens e águas tranquilas.", imagem: "/IMAGENS/highlight36.jpg" },
  { nome: "Praia da Marinha", descricao: "Localizada em Caravelas, Bahia, a Praia da Marinha é uma das mais belas praias do Brasil, com águas cristalinas e rica vida marinha.", imagem: "/IMAGENS/highlight37.jpg" },
  { nome: "Praia do Litoral Norte", descricao: "Localizada na região da Bahia, a Praia do Litoral Norte oferece diversas opções de lazer e tranquilidade em meio à natureza.", imagem: "/IMAGENS/highlight38.jpg" }
];

document.querySelectorAll('.saiba-mais').forEach(button => {
  button.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    const praia = praias[id - 1];

    document.getElementById('modal-image').src = praia.imagem;
    document.getElementById('modal-text').innerHTML = `<h2>${praia.nome}</h2><p>${praia.descricao}</p>`;

    document.getElementById('modal').style.display = 'block';
  });
});

// Modal close
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});
