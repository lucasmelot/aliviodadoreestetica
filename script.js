const header = document.querySelector('[data-header]');
const menu = document.querySelector('[data-menu]');
const menuToggle = document.querySelector('[data-menu-toggle]');

const syncHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);

const closeMenu = () => {
  menu?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
};

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menu?.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

window.addEventListener('scroll', syncHeader, { passive: true });
syncHeader();
