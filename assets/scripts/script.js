function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const cards = document.querySelectorAll('.s-card');
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  carousel.style.transform = `translateZ(-40vw) rotateY(${rotateYDeg}deg)`;

  // Atualiza os botões ativos
  const activeButtonElement = document.querySelector('.s-controller__button--active');
  activeButtonElement.classList.remove('s-controller__button--active');
  selectedButtonElement.classList.add('s-controller__button--active');

  
  // Alterna entre cartões
  cards.forEach((card, index) => {
    card.classList.remove('s-card--active');
    if (index === Number(selectedItem) - 1) {
      card.classList.add('s-card--active');
    }
    // Para mobile, esconde completamente os cartões inativos após a transição
    if (isMobile) {
      setTimeout(() => {
        card.style.display = index === Number(selectedItem) - 1 ? "block" : "none";
      }, 400); // Igual ao tempo da transição CSS
    }
  });
}
