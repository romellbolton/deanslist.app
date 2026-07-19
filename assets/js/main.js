(() => {
  const toggle = document.querySelector('.site-header__toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('site-header__nav--open', open);
    };
    toggle.addEventListener('click', () => {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => setOpen(false));
    });
    const mql = matchMedia('(min-width: 721px)');
    const onMqlChange = (e) => { if (e.matches) setOpen(false); };
    if (mql.addEventListener) mql.addEventListener('change', onMqlChange);
    else if (mql.addListener) mql.addListener(onMqlChange);
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
