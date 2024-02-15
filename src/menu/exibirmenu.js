// Obter o conteúdo do menu do localStorage
var menuContent = localStorage.getItem("menuContent");
var image = loadImage("../image/Developer.png");

function loadImage(path) {
  var img = new Image();
  img.src = path;
  return img;
}

// Verificar se o conteúdo do menu está presente
if (menuContent) {
  // Adicionar o conteúdo do menu ao corpo do documento
  document.body.innerHTML = menuContent;
} else {
  // Caso contrário, exibir uma mensagem de erro
  document.body.innerHTML = "<p>Conteúdo do menu não encontrado.</p>";
}
// Exemplo de uso da variável "image"
// Adicionando a imagem ao corpo do documento
function criarMenu() {
  var menuContent = `
     <div class="container-menu">
     <div class="logo">
     <img src="${image.src}" alt="Logo" id="logo-image">
     </div>
     <style>
     .menu li a:hover{
        position: relative;
     }
    #item-menu:hover {
     color: #89A299 !important;
      border: 2px solid #3498db;
    border-radius: 50%;
    animation: rotateBorder 2s linear infinite;
    }

    @keyframes rotateBorder {
    to {
        transform: rotate(360deg);
    }
}
     </style>
        <ul class="Menu">
            <li><a href="http://127.0.0.1:5500/Home.html"id="item-menu" style="text-decoration: none; color:#85DBDE;">Home</a></li>
            <li><a href="http://127.0.0.1:5500/pages/projetos.html" id="item-menu" style="text-decoration: none; color:#85DBDE;">Projetos</a></li>
            <li><a href="" id="item-menu" style="text-decoration: none;color:#85DBDE;">Competencias</a></li>
            <li><a href="" id="item-menu" style="text-decoration: none; color:#85DBDE;">Minhas Especialidades</a></li>
            <li><a href="#" id="item-menu" style="text-decoration: none; color:#85DBDE;">Fale comigo</a></li>
        </ul>
        <div class="button-orçamento" style="display: flex; align-items: center; justify-content: center;">
          <a href="#" id="button-orçamento">Solicite um orçamento</a>
        </div>
        </div>
    `;

  // Armazenar o conteúdo do menu no localStorage
  localStorage.setItem("menuContent", menuContent);
}

// Chame a função para criar o menu
criarMenu();
