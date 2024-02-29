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
     <div class="container-menu" style="z-index:-">
     <div class="logo">
     <img src="${image.src}" alt="Logo" id="logo-image">
     </div>
     <style>
     #logo-image{
      
     }
        .menu li {
            list-style-type: none;
            display: inline-block;
        }

        .menu li:hover,
        .menu li.active {
            position: relative;
        }

        #cont-li a:hover{
            color: #89A299 !important;
    padding: 50px 5px 70px 5px !important;
    position: relative;
        }
#cont-li a.ativo {
    color: #89A299 !important;
    padding: 50px 5px 70px 5px !important;
    position: relative;
}


        #cont-li:hover a::before{
           content: "";
            height: 2px;
            width: 100px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-80%, -50%);
            animation: spinBall 0.6s linear infinite;
            box-shadow: inset 0 0 18px #fff,
                inset 6px 0 18px violet,
                inset -6px 0 18px #0ff,
                inset 6px 0 30px violet,
                inset -6px 0 30px #0ff,
                0 0 18px #fff, -4px
                0 18px violet, 4px 0 18px #0ff;
        }
        #cont-li a.ativo::before {
            content: "";
            height: 2px;
            width: 100px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-80%, -50%);
            animation: spinBall 0.6s linear infinite;
            box-shadow: inset 0 0 18px #fff,
                inset 6px 0 18px violet,
                inset -6px 0 18px #0ff,
                inset 6px 0 30px violet,
                inset -6px 0 30px #0ff,
                0 0 18px #fff, -4px
                0 18px violet, 4px 0 18px #0ff;
        }

    @keyframes spinBall {
      to {
        transform: rotate(360deg);
      }
    }
     </style>
        <ul class="Menu" id="menu">
            <li id="cont-li"><a href="http://127.0.0.1:5500/Home.html"id="item-menu" style="text-decoration: none; color:#85DBDE;">Home</a></li>
            <li id="cont-li"><a href="http://127.0.0.1:5500/pages/projetos.html" id="item-menu" style="text-decoration: none; color:#85DBDE;">Projetos</a></li>
            <li id="cont-li"><a href="" id="item-menu" style="text-decoration: none;color:#85DBDE;">Competencias</a></li>
            <li id="cont-li"><a href="" id="item-menu" style="text-decoration: none; color:#85DBDE;">Minhas Especialidades</a></li>
            <li id="cont-li"><a href="#" id="item-menu" style="text-decoration: none; color:#85DBDE;">Fale comigo</a></li>
        </ul>
        <div class="button-orçamento" style="display: flex; align-items: center; justify-content: center;">
          <a href="#" id="button-orçamento">Solicite um orçamento</a>
        </div>
        </div>
        
    `;
  document.addEventListener("DOMContentLoaded", function () {
    // Obtenha a lista de elementos
    var listaItens = document.querySelectorAll(".item-menu");

    // Adicione um ouvinte de clique a cada item
    listaItens.forEach(function (item) {
      item.addEventListener("click", function () {
        // Remova a classe 'ativo' de todos os itens
        listaItens.forEach(function (item) {
          item.classList.remove("ativo");
        });

        // Adicione a classe 'ativo' apenas ao item clicado
        this.classList.add("ativo");
      });
    });
  });

  // Armazene o conteúdo do menu no localStorage
  localStorage.setItem("menuContent", menuContent);
}

// Chame a função para criar o menu
criarMenu();
