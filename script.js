const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

if (button && nav) {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
    button.querySelector('.sr-only').textContent = isOpen ? 'Abrir menu' : 'Fechar menu';
  });
}

const form = document.querySelector('#contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Mensagem para a equipe Pausa no Save: ${data.get('name')}`);
    const body = encodeURIComponent(`Nome: ${data.get('name')}\nE-mail: ${data.get('email')}\n\n${data.get('message')}`);
    location.href = `mailto:CONTATO_DA_EQUIPE@exemplo.com?subject=${subject}&body=${body}`;
  });
}
