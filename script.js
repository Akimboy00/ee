// script.js

// Seleciona o elemento da logo
const logo = document.getElementById('logo');

// Adiciona um evento de clique à logo
logo.addEventListener('click', function(event) {
  // Previne o comportamento padrão (se necessário)
  event.preventDefault();
  
  // Rolagem suave para o topo da página
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Define o comportamento suave
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Selecione todos os elementos com a classe 'hidden'
  const hiddenElements = document.querySelectorAll('.hidden');

  // Função de callback para quando o elemento entra ou sai da viewport
  const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Adiciona a classe 'visible' para animar o elemento
              entry.target.classList.add('visible');
              // Para a observação do elemento após ele aparecer
              observer.unobserve(entry.target);
          }
      });
  };

  // Cria uma instância do Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1 // O elemento é considerado visível quando 10% está visível
  });

  // Começa a observar os elementos
  hiddenElements.forEach(element => {
      observer.observe(element);
  });
});
