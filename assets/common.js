(function () {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('siteMenu');
  const overlay = document.getElementById('menuOverlay');
  if (!btn || !menu || !overlay) return;

  function closeMenu() {
    menu.classList.remove('open');
    overlay.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    menu.classList.add('open');
    overlay.classList.add('show');
    btn.setAttribute('aria-expanded', 'true');
  }

  btn.addEventListener('click', function () {
    if (menu.classList.contains('open')) closeMenu();
    else openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  const current = window.location.pathname;
  menu.querySelectorAll('a').forEach(function (a) {
    if (a.getAttribute('href') === current) a.classList.add('active');
    a.addEventListener('click', closeMenu);
  });
})();
