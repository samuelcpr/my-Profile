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
     <img src="${image.src}" alt="Logo">
     </div>
        <ul class="Menu">
            <li><a href="">Home</a></li>
            <li><a href="">Projetos</a></li>
            <li><a href="">Competencias</a></li>
            <li><a href="">Minhas Especialidades</a></li>
            <li><a href="#">Fale comigo</a></li>
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
