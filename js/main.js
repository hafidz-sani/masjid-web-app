document.addEventListener('DOMContentLoaded', () => {
  /* ── Hamburger / Drawer ─────────────────────── */
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.drawer');
  const overlay = document.querySelector('.drawer-overlay');

  function toggleDrawer() {
    const isOpen = drawer.classList.contains('open');
    drawer.classList.toggle('open');
    hamburger.classList.toggle('open');
    overlay.classList.toggle('show');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    hamburger.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', toggleDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.querySelectorAll('.drawer a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  /* ── Active nav link ────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .drawer a').forEach(a => {
    if (a.getAttribute('href') === currentPage) {
      a.classList.add('active');
    }
  });

  /* ── Scroll Reveal ──────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));

  /* ── Fetch API data ─────────────────────────── */
  window.fetchMasjidData = async () => {
    try {
      const res = await fetch('data.json');
      return await res.json();
    } catch (err) {
      console.warn('Gagal memuat data masjid:', err);
      return null;
    }
  };
});
