function openModal(imgSrc) {
  const modalImg = document.getElementById('modal-img');
  const modal = document.getElementById('service-modal');
  
  modalImg.src = imgSrc;
  modal.classList.add('active');
}

// Fechar ao clicar na área do 'X' da imagem
document.getElementById('modal-close-trigger').addEventListener('click', () => {
  document.getElementById('service-modal').classList.remove('active');
});

// Fechar ao clicar fora do card (na área escura)
document.getElementById('service-modal').addEventListener('click', (e) => {
  if (e.target.id === 'service-modal') {
    document.getElementById('service-modal').classList.remove('active');
  }
});

