// Menu hambúrguer (partilhado por index, galeria e contacto)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('hamburger-btn');
  const menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;

  const setOpen = (open) => {
    btn.classList.toggle('active', open);
    menu.classList.toggle('active', open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  btn.addEventListener('click', () => setOpen(!menu.classList.contains('active')));

  // Fecha o menu ao clicar num link
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  // Fecha o menu se a janela passar para tablet/desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) setOpen(false);
  });
});