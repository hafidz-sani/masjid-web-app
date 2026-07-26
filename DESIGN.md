# DESIGN.md — Masjid Web App

> Brand: Masjid  
> Design System: Vercel-inspired monochrome  
> Target: Multi-page static web app dengan API untuk konten dinamis  
> Bahasa: Indonesia

---

## 1. Brand Identity

**Nama Proyek:** Masjid Web App  
**Tagline:** Rumah bermakna, teknologi sederhana.  
**Persona:** Tenang, profesional, terpercaya, mudah dibaca, spiritual namun tidak berlebihan  
**Keunikan:** Minimalis monokrom murni — hitam-putih, tidak ada warna lain kecupon untuk status/fokus ringan

---

## 2. Color Palette

### Token & Roles

| Token | Hex / Value | Penggunaan |
|-------|-------------|------------|
| `--void` | `#040404` | Background section gelap, footer, depth canvas |
| `--canvas` | `#ffffff` | Background utama, page default |
| `--surface` | `#fafafa` | Card, panel, table header |
| `--surface-elevated` | `#f5f5f5` | Dropdown, hover state, nav active |
| `--border` | `rgba(0,0,0,0.08) 0px 0px 0px 1px` | Shadow-as-border untuk elemen utama |
| `--border-strong` | `rgba(0,0,0,0.12) 0px 0px 0px 1px` | Divider, emphasis ring |
| `--text-primary` | `#171717` | Heading, judul section, body utama |
| `--text-secondary` | `#4d4d4d` | Deskripsi, card body |
| `--text-muted` | `#9e9e9e` | Caption, meta, placeholder, disabled |
| `--text-tertiary` | `#62666d` | Support label, timestamp |
| `--focus-ring` | `#0070f3` | Focus accessibility (read-only, tidak affect brand) |
| `--success` | `#27a644` | Status indikator positif (sedang aktif) |
| `--warning` | `#d97706` | Status peringatan |
| `--info` | `#2563eb` | Status informasi |
| `--hover-lift` | `translateY(-4px)` | Hover lift animasi card |

### Grayscale Scale (opsional untuk精细 kontrol)

| Token | Hex | 
|-------|-----|
| `--gray-100` | `#ebebeb` | 
| `--gray-200` | `#d4d4d4` | 
| `--gray-400` | `#a3a3a3` | 
| `--gray-600` | `#525252` | 
| `--gray-900` | `#171717` | 

---

## 3. Typography

### Font Families

| Target | Font | CDN/Local | Fallback |
|--------|------|-----------|----------|
| Heading | **Plus Jakarta Sans** | Google Fonts | `system-ui, -apple-system, Segoe UI, Roboto, sans-serif` |
| Body | **Inter** | Google Fonts | `system-ui, -apple-system, Segoe UI, Roboto, sans-serif` |
| Arabic | **Amiri** | Google Fonts | `serif` |
| Mono | **JetBrains Mono** | Google Fonts | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

### Type Scale

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display Hero | Plus Jakarta Sans | 56px (3.5rem) | 600 | 1.05 | -1.8px |
| Section Heading | Plus Jakarta Sans | 44px (2.75rem) | 600 | 1.15 | -1.2px |
| Sub-heading Large | Plus Jakarta Sans | 32px (2.00rem) | 600 | 1.25 | -0.8px |
| Heading H1 | Plus Jakarta Sans | 40px (2.50rem) | 600 | 1.20 | -0.96px |
| Heading H2 | Plus Jakarta Sans | 32px (2.00rem) | 400 | 1.33 | -0.64px |
| Heading H3 | Plus Jakarta Sans | 24px (1.50rem) | 600 | 1.33 | -0.48px |
| Body Large | Inter | 20px (1.25rem) | 400 | 1.70 | normal |
| Body | Inter | 16px (1.00rem) | 400 | 1.60 | normal |
| Body Medium | Inter | 16px (1.00rem) | 510 | 1.60 | normal |
| Body Semibold | Inter | 16px (1.00rem) | 600 | 1.60 | normal |
| Button / Link | Inter | 14px (0.88rem) | 500 | 1.50 | normal |
| Caption | Inter | 13px (0.81rem) | 400 | 1.50 | -0.1px |
| Micro Badge | Inter | 11px (0.69rem) | 600 | 1.00 | normal |
| Mono | JetBrains Mono | 14px (0.88rem) | 400 | 1.50 | normal |
| Arabic | Amiri | 20px | 400 | 1.80 | normal |

### Hubungan huruf

- **Judul display** age: condensation kuat untuk impact hero.
- **Section** heading: tetap pack, namun ringan dibanding display.
- **Body**: dibuka (1.60–1.70) untuk readability panjang.
- **Nav/Caption**: 14px weight 500, stabil, tidak terlalu mencolok.

---

## 4. Component Stylings

### 4.1 Buttons

#### Primary CTA (Solid)
- Background: `#171717`
- Text: `#ffffff`
- Padding: `8px 16px`
- Radius: `6px`
- Font: Inter 14px weight 500
- Hover: background `#0a0a0a`, lift `translateY(-1px)`
- Use: "Lihat Jadwal", "Donasi Sekarang"

#### Secondary (Shadow-border)
- Background: `transparent`
- Text: `#171717`
- Padding: `8px 16px`
- Radius: `6px`
- Border (shadow-as-border): `rgba(0,0,0,0.08) 0px 0px 0px 1px`
- Hover: bg `rgba(0,0,0,0.04)`, border `rgba(0,0,0,0.12) 0px 0px 0px 1px`
- Use: "Selengkapnya", "Kembali"

#### Pill Badge
- Background: `rgba(0,0,0,0.05)` atau `#f5f5f5`
- Text: `#171717`
- Padding: `0px 10px`
- Radius: `9999px`
- Font: Inter 12px weight 500
- Use: "Akan Datang", "Berlangsung", "Selesai"
  

### 4.2 Cards & Containers
- Background: `#ffffff` atau `#fafafa`
- Border (shadow-as-border): `rgba(0,0,0,0.08) 0px 0px 0px 1px`
- Hover intensification: `rgba(0,0,0,0.12) 0px 0px 0px 1px`
- Radius: `8px` (cards), `12px` (featured panels)
- Hover lift: `translateY(-4px)` + soft shadow opini `rgba(0,0,0,0.04) 0px 8px 8px -8px`

### 4.3 Inputs & Forms
- Background: `#ffffff`
- Border (shadow-as-border): `rgba(0,0,0,0.08) 0px 0px 0px 1px`
- Radius: `6px`
- Focus: `2px solid var(--focus-ring)` outline
- Placeholder: `#9e9e9e`

### 4.4 Badges
- Background: `#f4f4f5` (neutral) / warna status terbatas
- Text: `#171717`
- Radius: `9999px`
- Font: Inter 12px weight 500
- Status greens/reds hanya untuk indikasi, bukan chrome primary

### 4.5 Tables / Jadwal
- Header: `#fafafa`
- Row border bottom: `rgba(0,0,0,0.08) 0px 0px 0px 1px`
- Row hover: `rgba(0,0,0,0.02)`
- Current sholat row: `rgba(0,0,0,0.04) background highlight + text bold weight 600`
- Text: `#171717` (row), `#9e9e9e` (meta time)

### 4.6 Navigation
- Sticky header di `#ffffff`
- Shadow-as-border bottom: `rgba(0,0,0,0.08) 0px 0px 0px 1px`
- Logo left: SVG icon monochrome (kubah + bintang), teks "Masjid" weight 600
- Links: Inter 14px weight 500, color `#171717`, hover `#000000`
- Mobile: hamburger `50%` radius icon, full-screen slide-in drawer (bg `#ffffff`, full-height)

---

## 5. Layout Principles

### Pages & Routes
- `index.html` — Home
- `jadwal.html` — Jadwal Sholat & Kajian
- `kegiatan.html` — Event & Kegiatan
- `fasilitas.html` — Fasilitas
- `donasi.html` — Informasi Donasi
- `kontak.html` — Kontak & Lokasi

### Grid & Container
- Container max: `1200px` centered
- Hero: full-width, content constrained 1200px
- Feature cards: 2 → 3 columns (desktop), 1 column (mobile)
- Section padding macroscopic: `80px 24px`, mobile `48px 16px`
- Full bleed dividers: `border-bottom 1px solid rgba(0,0,0,0.06)` untuk edge-to-edge lines

### Whitespace Philosophy
- **Empty space is the design** — tidak ada warna background lain untuk memecah section, hanya whitespace dan shadow-as-border
- **Compressed text, expanded space** — heading tight, section space long
- **Section rhythm** — setiap section di bawah header diikuti whitespace 80px+ sebelum "Judul Section" yang jelas

### Mobile Behavior
- Nav links collapse → hamburger
- Horizontal scroller pakai `overflow-x-auto` untuk brim card (jika lebarnya overflow)
- Hero text scale turun 30% ukuran dari desktop
- Jadwal table → card list pada mobile <480px untuk readability maksimal

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, `#ffffff` bg | Page background |
| Ring (1) | `rgba(0,0,0,0.08) 0px 0px 0px 1px` | Default card field, input container, nav bottom |
| Ring Light (1b) | `rgba(0,0,0,0.06) 0px 0px 0px 1px` | Soft divider, inactive border |
| Subtle (2) | Ring + `rgba(0,0,0,0.04) 0px 2px 2px 0px` | Standard card elevation |
| Full Card (3) | Ring + Subtle + `rgba(0,0,0,0.04) 0px 8px 8px -8px` + inner ring `#fafafa 0px 0px 0px 1px` | Hero card, featured item, panel utama |
| Focus (A11y) | `2px solid var(--focus-ring)` outline + soft shadow | Keyboard focus interactive |

---

## 7. Brand Elements

### Logo
- **Primary:** SVG inline monochrome hitam putih — kubah masjid + bintang 5 sudut monoline outline
- **Mark usage:** 40px – 56px tall, selalu hitam (`#171717`) di atas canvas putih
- **Favicon:** Silhouette kubah putih di atas hitam, svg 32×32

---

## 8. Do's & Don'ts

### Do
- Default isoeni shadow-as-border untuk semua elemen card/input, bukan `border` berbasis PHP/garis tebal
- Gunakan Plus Jakarta Sans untuk semua heading agar identity tegas dan modern
- Gunakan Inter 510 weight untuk body emphasis (tidak terlalu bold, tetap elegan)
- Pastikan teks Arab (kalimat keutamaan, hijriah date) pakai Amiri agar readable dengan baca kanan-ke-kiri context
- Gunakan `rgba` border: `rgba(0,0,0,0.08)` untuk elemen non-interactive, `0.12` untuk emphasis + hover
- Maintain whitespace majus antar section (80px+), jangan padatkan
- Hover effects menggunakan lift + shadow intensification, tidak warna lain
- Font-feature-settings: `liga`, `cv01`, `ss03` jika Inter/Plus Jakarta mendukung; kalau tidak, aman untuk abaikan — mengenalkan OpenType opcional

### Don't
- Jangan pakai warna selain hitam-putih untuk chrome UI (nav, card, button kanan-kiri)
- Jangan pakai weight 700 — maximum `600`
- Jangan pakai border CSS tebal (eg. `2px solid`) — gunakan shadow-as-border
- Jangan hilangkan whitespace — minimalisme bukan kosong, tapi "bernilai setiap px"
- Jangan pakai glow/neon — ini monokrom profesional, bukan cyberpunk
- Jangan skip contrast — teks utama `#171717` di atas white selalu 15.24:1 contrast ratio (WCAG AAA)

---

## 9. Agent Prompt Guide

### Quick Reference
- Primary CTA: `#171717` bg, white text
- Hero headline: Plus Jakarta Sans, 56px, weight 600, `letter-spacing: -1.8px`, warna `#171717`
- Body: Inter, 16px, weight 400, warna `#4d4d4d`
- Border default (semua card/input): `rgba(0,0,0,0.08) 0px 0px 0px 1px`
- Focus ring: `2px solid #0070f3`
- Success/green only untuk status pills, bukan CTA
- Card hover: `translateY(-4px) + shadow intensification`

### Contoh Prompt Component
Hero:
```
Create a hero section on white background. 
Headline at 56px Plus Jakarta Sans weight 600, line-height 1.05, letter-spacing -1.8px, color #171717. 
Subtitle at 20px Inter weight 400, line-height 1.70, color #4d4d4d. 
CTA button solid #171717, 6px radius, 8px 16px padding + pill buttons for top quicklinks "Jadwal" "Donasi". 
Below headline: add a compact live jadwal strip showing 5 waktu sholat.
```

Card Terkait (Kajian / Kegiatan):
```
Design a card: white bg, shadow-as-border rgba(0,0,0,0.08) 0px 0px 0px 1px, radius 8px. 
Title at 24px weight 600 in #171717. Body at 16px weight 400 in #4d4d4d. 
Date pill at top right: rgba(0,0,0,0.06) bg, pill 9999px radius, 12px weight 500.
```

---

## 10. API Design Principles (for Web App)

### Data Source
Konten akan dipopulate via API, sedangkan keindahan UI mengikuti DESIGN.md ini.

### Sample JSON Schema (Stub untuk dev)
```json
{
  "jadwal": {
    "location": "Jakarta",
    "date": "YYYY-MM-DD",
    "times": {
      "subuh": "04:12",
      "dzuhur": "11:54",
      "ashar": "15:09",
      "maghrib": "17:59",
      "isya": "19:14"
    },
    "next": "dzuhur"
  },
  "kegiatan": [
    {
      "id": "1",
      "title": "Kajian Rutin",
      "pemateri": "Ustadz ...",
      "time": "2026-07-27T19:00:00",
      "status": "akan-datang"
    }
  ],
  "fasilitas": [
    {
      "icon": "quran",
      "title": "Al-Qur'an",
      "desc": "..."
    }
  ]
}
```

---

> Made for Masjid Web App — monochrome clarity, purposeful silence.
