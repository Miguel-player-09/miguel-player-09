// Verifica se a tela tem menos de 600 pixels de largura
if (window.matchMedia("(max-width: 600px)").matches) {
    // Aplica estilos para telas menores
    document.querySelector("header").style.fontSize = "20px";
    document.querySelector(".video-grid").style.gridTemplateColumns = "repeat(1, 1fr)";
  } else {
    // Aplica estilos para telas maiores
    document.querySelector("header").style.fontSize = "24px";
    document.querySelector(".video-grid").style.gridTemplateColumns = "repeat(3, 1fr)";
  }