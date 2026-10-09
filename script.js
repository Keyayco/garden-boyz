const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
function closeMenu() {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}
menuButton?.addEventListener('click', () => {
  const open = navigation?.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (event.target instanceof Element && !event.target.closest('.site-header')) closeMenu();
});
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    const select = document.querySelector('#service');
    if (select) select.value = link.dataset.service;
  });
});
const form = document.querySelector('#quote-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const status = document.querySelector('#form-status');
  if (!status) return;
  status.hidden = false;
  status.textContent = 'Demo complete — your enquiry has not been sent or saved. To discuss a real quotation, please call 076 128 9448 or use the WhatsApp link.';
  status.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
const lightbox = document.querySelector('#gallery-lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxCaption = document.querySelector('#lightbox-caption');
document.querySelectorAll('.gallery-zoom').forEach(button => {
  button.addEventListener('click', () => {
    const figure = button.closest('figure');
    const image = figure?.querySelector('img');
    if (!image || !lightbox || !lightboxImage || !lightboxCaption) return;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = 'AI-generated garden inspiration. Not a Garden Boyz project.';
    lightbox.showModal();
  });
});
document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox?.close());
lightbox?.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = String(new Date().getFullYear()); });
