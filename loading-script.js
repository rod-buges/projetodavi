function redirect() {
  // Exibe a tela de carregamento
  document.querySelector('.loader-container').style.display = 'flex';

  // Aguarda 10 segundos antes de redirecionar
  setTimeout(function() {
    // Substitua "outra_pagina.html" pelo caminho da página para a qual você deseja redirecionar
    window.location.href = "calculo.html"; 
  }, 10000); // 10000 milissegundos = 10 segundos
}

// Chama a função redirect quando a página é carregada (apenas para exemplo, você pode chamar essa função de acordo com o seu caso de uso)
document.addEventListener("DOMContentLoaded", function() {
  redirect();
});

