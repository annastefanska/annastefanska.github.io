/* Navigation and helpful bank transfer copying; works on static GitHub Pages. */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('primary-menu');
  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
      menu.classList.toggle('is-open', open);
      const text = toggle.querySelector('.nav-toggle-text');
      if (text) text.textContent = open ? 'Zamknij' : 'Menu';
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('click', (e) => { if (!e.target.closest('.site-nav')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
    });
    window.addEventListener('resize', () => { if (window.innerWidth > 980) setOpen(false); });
  }

  const titleDisplay = document.querySelector('[data-payment-title]');
  document.querySelectorAll('[data-select-product]').forEach(link => {
    link.addEventListener('click', () => {
      if (titleDisplay) titleDisplay.textContent = 'Zakup materiału / ' + link.dataset.selectProduct;
    });
  });

  const status = document.querySelector('[data-copy-status]');
  async function copyText(text, button) {
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        success = true;
      } else {
        const el = document.createElement('textarea');
        el.value = text; el.setAttribute('readonly', '');
        el.style.position = 'fixed'; el.style.left = '-10000px';
        document.body.appendChild(el); el.select();
        success = document.execCommand('copy'); el.remove();
      }
    } catch (e) { success = false; }
    if (status) status.textContent = success ? 'Skopiowano do schowka.' : 'Nie można automatycznie skopiować. Zaznacz i skopiuj tekst ręcznie.';
    const prior = button.dataset.originalLabel || button.textContent;
    button.dataset.originalLabel = prior;
    button.textContent = success ? 'Skopiowano ✓' : 'Skopiuj ręcznie';
    setTimeout(() => { button.textContent = prior; }, 2500);
  }
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', () => copyText(button.dataset.copy, button));
  });
  document.querySelectorAll('[data-copy-purpose]').forEach(button => {
    button.addEventListener('click', () => {
      const title = document.querySelector('[data-payment-title]');
      if (title) copyText(title.textContent.trim(), button);
    });
  });
});
