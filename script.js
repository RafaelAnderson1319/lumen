const dialog = document.querySelector('.booking-dialog');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');
const serviceSelect = dialog.querySelector('[name="servico"]');
document.querySelectorAll('[data-service] h3').forEach((heading) => {
  const option = document.createElement('option');
  option.value = heading.textContent.trim();
  option.textContent = heading.textContent.trim();
  serviceSelect.append(option);
});
document.querySelectorAll('.booking-trigger').forEach((button) => button.addEventListener('click', () => dialog.showModal()));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!open)); menu.classList.toggle('open', !open); });
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
dialog.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Olá! Gostaria de agendar um horário no Lumen Hair Studio.\n\nNome: ${data.get('nome')}\nWhatsApp: ${data.get('telefone')}\nServiço desejado: ${data.get('servico')}`;
  window.open(`https://wa.me/5534984023603?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
