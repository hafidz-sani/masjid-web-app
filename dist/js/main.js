/* ============================================
   Masjid Web App — Global JavaScript
   ============================================ */

// --- Mobile Menu Toggle ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

function initMobileMenu() {
  if (!hamburger || !mobileMenu) return;
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  const mobileLinks = mobileMenu.querySelectorAll('.navbar-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// --- Scroll Reveal Animation ---
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

// --- Active Nav Link Highlight ---
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.navbar-link');
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });
}

// --- API Data Loader ---
async function fetchMasjidData() {
  try {
    const res = await fetch('data.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn('[API] Failed to load data:', err.message);
    return null;
  }
}

// --- Helpers ---
function fmtDate(isoStr, opts = {}) {
  const d = new Date(isoStr);
  return d.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...opts
  });
}

function fmtTime(isoStr) {
  const d = new Date(isoStr);
  return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function statusBadge(status) {
  const map = {
    'akan-datang': '<span class="badge badge-info">Akan Datang</span>',
    'sedang-berlangsung': '<span class="badge badge-success">Berlangsung</span>',
    'selesai': '<span class="badge">Selesai</span>'
  };
  return map[status] || `<span class="badge">${status}</span>`;
}

function categoryIcon(cat) {
  const icons = {
    'kajian': '📖',
    'sosial': '🤝',
    'pendidikan': '🎓',
    'ibadah': '🕌'
  };
  return icons[cat] || '📌';
}

// --- Home Page ---
function renderHome(data) {
  // Jadwal strip
  const jadwalEl = document.getElementById('home-jadwal');
  if (jadwalEl && data.jadwal) {
    const j = data.jadwal;
    jadwalEl.innerHTML = `
      <p class="caption mb-md">📍 ${(data.meta && data.meta.location) ? data.meta.location : '-'} • ${j.hijri || ''}</p>
      <div class="grid-3">
        ${Object.entries(j.times).map(([name, time]) => `
          <div class="card ${j.next === name ? 'card-featured' : ''}" style="${j.next === name ? 'background: var(--surface-elevated); border-color: var(--border-strong);' : ''}">
            <strong>${name.charAt(0).toUpperCase() + name.slice(1)}</strong>
            <div style="font-family: JetBrains Mono, monospace; font-size: 20px; margin-top: 4px;">${time}</div>
          </div>
        `).join('')}
      </div>
      ${j.next ? `<p class="mt-lg caption">Selanjutnya: <strong>${j.next}</strong></p>` : ''}
    `;
  }

  // Kegiatan terdekat
  const kegiatanEl = document.getElementById('home-kegiatan');
  if (kegiatanEl && data.kegiatan) {
    kegiatanEl.innerHTML = data.kegiatan
      .filter(k => k.status !== 'selesai')
      .slice(0, 3)
      .map(k => `
        <div class="card">
          <div class="flex-center gap-sm mb-md">
            <span>${categoryIcon(k.category)}</span>
            ${statusBadge(k.status)}
          </div>
          <h3 class="sub-heading" style="font-size: 20px;">${k.title}</h3>
          ${k.pemateri && k.pemateri !== '-' ? `<p class="body text-muted mt-sm">👤 ${k.pemateri}</p>` : ''}
          <p class="caption mt-sm">📅 ${fmtDate(k.time)} • 🕐 ${fmtTime(k.time)}</p>
          ${k.location ? `<p class="caption">📍 ${k.location}</p>` : ''}
        </div>
      `).join('');
  }

  // Quick links
  const quickLinks = document.getElementById('quick-links');
  if (quickLinks) {
    quickLinks.innerHTML = `
      <a href="jadwal.html" class="card card-featured text-center" style="text-decoration:none;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <h3 class="sub-heading mt-md" style="font-size: 18px;">Jadwal Sholat</h3>
        <p class="body text-muted mt-sm">5 waktu sholat setiap hari.</p>
      </a>
      <a href="kegiatan.html" class="card card-featured text-center" style="text-decoration:none;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        <h3 class="sub-heading mt-md" style="font-size: 18px;">Kegiatan</h3>
        <p class="body text-muted mt-sm">Agenda mingguan masjid.</p>
      </a>
      <a href="fasilitas.html" class="card card-featured text-center" style="text-decoration:none;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" stroke-width="1.5"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
        <h3 class="sub-heading mt-md" style="font-size: 18px;">Fasilitas</h3>
        <p class="body text-muted mt-sm">Lengkap untuk kenyamanan ibadah.</p>
      </a>
    `;
  }
}

// --- Jadwal Page ---
function renderJadwal(data) {
  const jadwalEl = document.getElementById('jadwal-data');
  if (jadwalEl && data.jadwal) {
    const j = data.jadwal;
    const loc = (data.meta && data.meta.location) || '-';
    jadwalEl.innerHTML = `
      <p class="mb-md caption">📍 ${loc} • ${j.hijri || ''} • Metode: ${data.meta?.method || 'Kemenag RI'}</p>
      <div class="grid-3">
        ${Object.entries(j.times).map(([name, time]) => `
          <div class="card ${j.next === name ? 'card-featured' : ''}" style="${j.next === name ? 'background: var(--surface-elevated); border-color: var(--border-strong);' : ''}">
            <strong>${name.charAt(0).toUpperCase() + name.slice(1)}</strong>
            <div style="font-family: JetBrains Mono, monospace; font-size: 20px; margin-top: 4px;">${time}</div>
          </div>
        `).join('')}
      </div>
      ${j.next ? `<p class="mt-lg caption">Selanjutnya: <strong>${j.next}</strong></p>` : ''}
    `;
  }

  const kajianEl = document.getElementById('kegiatan-grid');
  if (kajianEl && data.kegiatan) {
    kajianEl.innerHTML = data.kegiatan
      .filter(k => k.status !== 'selesai')
      .map(k => `
        <div class="card kegiatan-card">
          <div class="flex-center gap-sm mb-md">
            <span>${categoryIcon(k.category)}</span>
            ${statusBadge(k.status)}
          </div>
          <h3 class="sub-heading" style="font-size: 20px;">${k.title}</h3>
          ${k.desc ? `<p class="body text-muted mt-sm">${k.desc}</p>` : ''}
          ${k.pemateri && k.pemateri !== '-' ? `<p class="caption mt-sm">👤 ${k.pemateri}</p>` : ''}
          <p class="caption mt-sm">📅 ${fmtDate(k.time)} • 🕐 ${fmtTime(k.time)}</p>
          ${k.location ? `<p class="caption">📍 ${k.location}</p>` : ''}
        </div>
      `).join('');
  }

  // Weekly table
  const weeklyEl = document.getElementById('jadwal-weekly');
  if (weeklyEl && data.jadwal?.weekly) {
    const rows = data.jadwal.weekly.map(w => `
      <tr>
        <td>${w.day || w.date}</td>
        <td style="font-family: JetBrains Mono, monospace;">${w.times.subuh}</td>
        <td style="font-family: JetBrains Mono, monospace;">${w.times.dzuhur}</td>
        <td style="font-family: JetBrains Mono, monospace;">${w.times.ashar}</td>
        <td style="font-family: JetBrains Mono, monospace;">${w.times.maghrib}</td>
        <td style="font-family: JetBrains Mono, monospace;">${w.times.isya}</td>
      </tr>
    `).join('');
    weeklyEl.innerHTML = `
      <table class="table-jadwal">
        <thead><tr><th>Hari</th><th>Subuh</th><th>Dzuhur</th><th>Ashar</th><th>Maghrib</th><th>Isya</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    `;
  }
}

// --- Kegiatan Page ---
function renderKegiatan(data) {
  const el = document.getElementById('kegiatan-grid');
  if (el && data.kegiatan) {
    el.innerHTML = data.kegiatan.map(k => `
      <div class="card">
        <div class="flex-center gap-sm mb-md">
          <span style="font-size: 24px;">${categoryIcon(k.category)}</span>
          ${statusBadge(k.status)}
        </div>
        <h3 class="sub-heading" style="font-size: 20px;">${k.title}</h3>
        ${k.desc ? `<p class="body text-muted mt-sm">${k.desc}</p>` : ''}
        ${k.pemateri && k.pemateri !== '-' ? `<p class="caption mt-sm">👤 ${k.pemateri}</p>` : ''}
        <p class="caption mt-sm">📅 ${fmtDate(k.time)} • 🕐 ${fmtTime(k.time)}</p>
        ${k.end_time ? `<p class="caption">Sampai: ${fmtTime(k.end_time)}</p>` : ''}
        ${k.location ? `<p class="caption">📍 ${k.location}</p>` : ''}
      </div>
    `).join('');
  }
}

// --- Fasilitas Page ---
function renderFasilitas(data) {
  const el = document.getElementById('fasilitas-grid');
  if (el && data.fasilitas) {
    const icons = {
      'quran': '📖', 'mukena': '🧕', 'parkir': '🚗', 'dompet': '💳',
      'wc': '🚿', 'kantin': '☕', 'kelas': '🎓', 'dapur': '🍳',
      'prayer': '🕌', 'classroom': '📚', 'parking': '🅿️', 'kitchen': '🍽️'
    };
    el.innerHTML = data.fasilitas.map(f => `
      <div class="card text-center">
        <div style="font-size: 40px; margin-bottom: 8px;">${icons[f.icon] || '🏛️'}</div>
        <h3 class="sub-heading" style="font-size: 18px;">${f.title}</h3>
        <p class="body text-muted mt-sm">${f.desc}</p>
      </div>
    `).join('');
  }
}

// --- Donasi Page ---
function renderDonasi(data) {
  const el = document.getElementById('donasi-content');
  if (el && data.donasi) {
    const d = data.donasi;
    let html = '';

    // QRIS Card
    if (d.qris) {
      html += `
        <div class="card card-featured text-center">
          <div style="font-size: 40px; margin-bottom: 8px;">📱</div>
          <h3 class="sub-heading">QRIS</h3>
          <p class="body text-muted mt-sm">${d.qris.nama}</p>
          <div style="background: var(--surface); width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; border-radius: var(--radius-md); margin: 16px auto;">
            <span class="caption">(QRIS Code)</span>
          </div>
          <p class="caption mt-md">Donasi minimal: ${d.qris.nominal_saran}</p>
        </div>
      `;
    }

    // Bank Accounts
    if (d.bank && d.bank.length > 0) {
      html += `<div class="mt-xl"><h3 class="section-heading" style="font-size: 24px;">Transfer Bank</h3>`;
      html += '<div class="grid-2 mt-lg">';
      d.bank.forEach(b => {
        html += `
          <div class="card">
            <h3 class="sub-heading" style="font-size: 18px;">${b.bank}</h3>
            <p class="body text-muted mt-sm">${b.cabang}</p>
            <p class="body-large mt-md" style="font-family: JetBrains Mono, monospace;"><strong>${b.norek}</strong></p>
            <p class="caption mt-sm">a.n. ${b.an}</p>
          </div>
        `;
      });
      html += '</div></div>';
    }

    // Laporan Keuangan
    if (d.laporan) {
      html += `
        <div class="card card-featured mt-xl">
          <h3 class="sub-heading">📊 Laporan Keuangan ${d.laporan.bulan}</h3>
          <div class="grid-3 mt-lg">
            <div>
              <p class="caption">Total Masuk</p>
              <p class="body-large" style="color: var(--success); font-weight: 600;">${d.laporan.total_masuk}</p>
            </div>
            <div>
              <p class="caption">Total Keluar</p>
              <p class="body-large" style="color: var(--warning); font-weight: 600;">${d.laporan.total_keluar}</p>
            </div>
            <div>
              <p class="caption">Sisa</p>
              <p class="body-large" style="font-weight: 600;">${d.laporan.sisa}</p>
            </div>
          </div>
        </div>
      `;
    }

    el.innerHTML = html;
  }
}

// --- Kontak Page ---
function renderKontak(data) {
  const el = document.getElementById('kontak-content');
  if (el && data.kontak) {
    const k = data.kontak;
    el.innerHTML = `
      <div class="grid-2">
        <div class="card card-featured">
          <h3 class="sub-heading mb-md">Informasi Kontak</h3>
          <div class="contact-info">
            <div class="contact-info-item">
              <span class="icon">📍</span>
              <div>
                <h4>Alamat</h4>
                <p>${k.alamat}</p>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="icon">📞</span>
              <div>
                <h4>Telepon</h4>
                <p>${k.telepon}</p>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="icon">💬</span>
              <div>
                <h4>WhatsApp</h4>
                <p><a href="https://wa.me/${k.whatsapp.replace('+','')}" class="btn-primary" target="_blank">Chat via WhatsApp</a></p>
              </div>
            </div>
            <div class="contact-info-item">
              <span class="icon">✉️</span>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:${k.email}">${k.email}</a></p>
              </div>
            </div>
          </div>
          <hr class="section-divider mt-lg">
          <h3 class="sub-heading mb-md">Jam Operasional</h3>
          <div class="contact-info">
            <div class="contact-info-item">
              <span class="icon">🕌</span>
              <div>
                <h4>Ibadah</h4>
                <p>5 waktu sholat</p>
              </div>
            </div>
            ${k.jam_operasional?.kantor ? `
            <div class="contact-info-item">
              <span class="icon">🏢</span>
              <div>
                <h4>Kantor</h4>
                <p>${k.jam_operasional.kantor}</p>
              </div>
            </div>` : ''}
            ${k.jam_operasional?.tpq ? `
            <div class="contact-info-item">
              <span class="icon">📚</span>
              <div>
                <h4>TPQ</h4>
                <p>${k.jam_operasional.tpq}</p>
              </div>
            </div>` : ''}
          </div>
        </div>
        <div class="card card-featured">
          <h3 class="sub-heading mb-md">Kirim Pesan</h3>
          <form onsubmit="event.preventDefault(); alert('Pesan terkirim (demo)!');">
            <div class="form-group">
              <label class="form-label">Nama</label>
              <input type="text" class="form-input" placeholder="Nama lengkap">
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" placeholder="email@example.com">
            </div>
            <div class="form-group">
              <label class="form-label">Pesan</label>
              <textarea class="form-textarea" placeholder="Tulis pesan..."></textarea>
            </div>
            <button type="submit" class="btn-primary w-full">Kirim</button>
          </form>
        </div>
      </div>
    `;
  }
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollReveal();
  initActiveNav();

  fetchMasjidData().then(data => {
    if (!data) return;

    const path = window.location.pathname.split('/').pop() || 'index.html';
    switch (path) {
      case 'index.html':
      case '':
        renderHome(data);
        break;
      case 'jadwal.html':
        renderJadwal(data);
        break;
      case 'kegiatan.html':
        renderKegiatan(data);
        break;
      case 'fasilitas.html':
        renderFasilitas(data);
        break;
      case 'donasi.html':
        renderDonasi(data);
        break;
      case 'kontak.html':
        renderKontak(data);
        break;
    }
  });
});
