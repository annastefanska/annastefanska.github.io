/* Nawigacja mobilna – Przestrzeń Czułości */
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('#primary-menu');
    if (!toggle || !menu) return;

    function setMenu(open) {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Zamknij menu' : 'Otwórz menu');
        menu.classList.toggle('is-open', open);
        const label = toggle.querySelector('.nav-toggle-text');
        if (label) label.textContent = open ? 'Zamknij' : 'Menu';
    }

    toggle.addEventListener('click', function () {
        setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (event) {
        if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setMenu(false);
            toggle.focus();
        }
    });
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.site-nav')) setMenu(false);
    });
    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) setMenu(false);
    });
});
