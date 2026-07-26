# DESIGN.md — Masjid Web App v2

> Brand: Masjid Nurul Iman
> Design System: cal.com-inspired monochrome glass
> Target: Multi-page static web app dengan API untuk konten dinamis
> Bahasa: Indonesia

---

## 1. Brand Identity

**Nama Proyek:** Masjid Nurul Iman
**Tagline:** Rumah bermakna, teknologi sederhana.
**Persona:** Tenang, profesional, terpercaya, mudah dibaca, spiritual namun tidak berlebihan
**Keunikan:** Monokrom dengan glassmorphism ringan — subtle, tidak berat, tetap hits di mobile

---

## 2. Color Palette

### Tokens

| Token | Hex / Value | Penggunaan |
|-------|-------------|------------|
| `--void` | `#040404` | Footer, hadits section |
| `--canvas` | `#ffffff` | Background utama |
| `--surface` | `#f8f8f8` | Card tengah, table header, elevated card |
| `--surface-elevated` | `#f1f1f1` | Current prayer highlight, active state |
| `--border` | `rgba(0,0,0,0.06)` | Element separator |
| `--border-subtle` | `rgba(0,0,0,0.04)` | Terenyah divider, inactive |
| `--border-strong` | `rgba(0,0,0,0.10)` | Hover ring, card on hover |
| `--text-primary` | `#171717` | Heading, body utama |
| `--text-secondary` | `#525252` | Deskripsi, card body |
| `--text-muted` | `#9a9a9a` | Caption, meta |
| `--text-tertiary` | `#737373` | Support label |
| `--focus-ring` | `#0070f3` | Focus accessibility |
| `--success` | `#22c55e` | Status positif |
| `--warning` | `#f59e0b` | Status peringatan |
| `--info` | `#3b82f6` | Status informasi |

### Gradients & Glass Effects

| Treatment | Value | Use |
|-----------|-------|-----|
| Full divider | `linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.07) 20%, rgba(0,0,0,0.07) 80%, transparent 100%)` | Section break |
| Hadits radial | `radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 55%)` | Dark section depth |
| Glass card | `rgba(255,255,255,0.72) + blur(12px) + saturate(160%)` | Card default |
| Glass panel | `rgba(255,255,255,0.92) + blur(18px) + saturate(180%)` | Sticky nav, drawer |
| Body grain | `feTurbulence fractalNoise baseFrequency 0.9 opacity 0.04` | Subtle texture overlay |

---

## 3. Typography

### Font Families

| Target | Font | Fallback |
|--------|------|----------|
| Heading | **Plus Jakarta Sans** | system-ui, -apple-system, Segoe UI, Roboto,sans-serif |
| Body | **Inter** | system-ui, -apple-system, Segoe UI, Roboto,sans-serif |
| Arabic | **Amiri** | serif |
| Mono | **JetBrains Mono** | ui-monospace, SFMono-Regular, Menlo, Consolas, monospace |

### Type Scale

| Role | Font | Size | Weight | Line Height | Spacing |
|------|------|------|--------|-------------|---------|
| Section label | Plus Jakarta Sans | 14px | 600 | 1.4 | 0.04em uppercase |
| Hero H1 | Plus Jakarta Sans | clamp(36, 4.8vw, 56) | 600 | 1.08 | -0.04em |
| Section Title | Plus Jakarta Sans | clamp(28, 3.2vw, 42) | 600 | 1.15 | -0.03em |
| Heading H2 | Plus Jakarta Sans | 24px | 600 | 1.33 | -0.48px |
| Heading H3 | Plus Jakarta Sans | 18px | 600 | 1.33 | -0.01em |
| Body large | Inter | 17px | 400 | 1.65 | normal |
| Body | Inter | 14.5px | 400 | 1.6 | normal |
| Button/Link | Inter | 14px | 500 | 1.4 | normal |
| Caption | Inter | 12.5px | 500 | 1.5 | -0.1px |
| Mono | JetBrains Mono | 14px | 500 | 1.5 | normal |
| Arabic | Amiri | 28px | 400 | 1.9 | normal |

---

## 4. Component Stylings

### 4.1 Buttons

- **Primary:** `#171717` bg, white text, radius `9999px`, padding `10px 20px`
  - Hover: `#000000`, `translateY(-1px)`, shadow lift
- **Secondary:** transparent, `border: 1px solid rgba(0,0,0,0.10)`
  - Hover: bg `rgba(0,0,0,0.03)`, border `rgba(0,0,0,0.14)`, lift `-1px`
- **Ghost:** transparent, no border, radius full, subtle hover bg

### 4.2 Cards & Glass

- Default: `rgba(255,255,255,0.72)` bg + `blur(12px)` + `saturate(160%)`
- Border: `rgba(0,0,0,0.06)`
- Radius: `10px` (lg), `16px` (xl)
- Hover: `translateY(-2px)` + border intensify + shadow lift

### 4.3 Navigation

- Sticky glass: `rgba(255,255,255,0.78)` + `blur(16px)` + saturate 180%
- Border bottom: `rgba(0,0,0,0.05)`
- Active/hover pill: `rgba(0,0,0,0.04)` bg in pill radius full

### 4.4 Prayer Widget

- 5 columns desktop, stack mobile
- Card: `rgba(255,255,255,0.65)` + blur 10px
- Current prayer: `rgba(255,255,255,0.92)` + stronger shadow + "Berikutnya" pill (dark)

### 4.5 Forms

- Inputs: `rgba(255,255,255,0.75)` bg, border `rgba(0,0,0,0.08)`
- Focus: `0 0 0 3px rgba(0,112,243,0.12)` + border stronger

### 4.6 Table / Jadwal

- Full-width table inside rounded glass container (radius lg)
- Header: `rgba(0,0,0,0.02)` bg + border bottom
- Mono font for time cells

---

## 5. Layout Principles

### Pages

- `index.html` — Home (hero + prayer + about + hadits + events)
- `jadwal.html` — Jadwal Sholat & Kajian
- `kegiatan.html` — Semua Kegiatan
- `fasilitas.html` — Semua Fasilitas
- `donasi.html` — Donasi & Laporan
- `kontak.html` — Kontak, Jam Operasional, Form

### Container & Spacing

- Container: `max-width: 1120px` centered, padding `0 24px`
- Section vertical padding: `96px 0` (desktop), `64px 0` (mobile)
- Hero paragraph max-width: `640px` centered
- Card grid gap: `14–16px`

### Whitespace Philosophy

- Section dividers sebagai "penyeimbang" (soft gradient)
- Short label + large title + subtle subtitle → controlled hierarchy
- Kompres teks, perluas ruang antar section

### Mobile Behavior

- Nav links collapse → hamburger
- Prayer widget → scrollable 2 columns
- Table → horizontal scroll
- Grid → 2 kolom → 1 kolom

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | White canvas | Page background |
| Glass (1) | `rgba(255,255,255,0.72)` + blur + saturate | Card, input container |
| Glass Strong (2) | Glass + ring stronger + shadow card | Card on hover |
| Glass Focus (3) | Glass + shadow lift + border-strong | Feature card, featured item |
| Sticky Nav | `rgba(255,255,255,0.78)` + blur(16px) + saturate(180%) | Sticky header |
| Dark Void (0D) | `#040404` + subtle radial highlights | Hadits, footer |

---

## 7. Brand Elements

- Logo: SVG monochrome (kubah + bintang), stroke `#171717`, `Plus Jakarta Sans`
- Logo text: "Nurul Iman" (bukan "Masjid" saja, untuk identitas spesifik)
- Favicon: Silhouette kubah putih di atas hitam, 32x32

---

## 8. Animations

- Fade-up reveal: `0.65s` ease, interrupt when visible once
- Stagger delay per children: `0.06s` per index
- Hero badge dot pulse: `2.2s ease-in-out infinite`
- All transitions: `cubic-bezier(0.22, 1, 0.36, 1)` for natural feel

---

## 9. Do's & Don'ts

### Do
- Gunakan glass/backdrop untuk glass effect
- Maintains monochrome sebagai base (hitam putih)
- Beri whitespace yang lega untuk setiap section
- Penggunaan `rgba(255,255,255,0.xx)` untuk glass, bukan Selain warna
- Beri subtle border `rgba(0,0,0,0.05–0.1)` yang konsisten

### Don't
- Jangan pakai shadow tebal berlebih — glass cards sudah cukup
- Jangan padatkan section — minimalisme adalah bernilai setiap px
- Jangan lupa snack grain opacity 0.35 sudah halus untuk semua surface
- Jangan hilangkan scroll reveal (sudah built in v2)

---

## 10. Agent Prompt Guide

- Button primary: `#171717` bg, white text, radius full (`9999px`), hover `#000000` + translateY(-1px)
- Hero title: `clamp(36px, 4.8vw, 56px)`, weight 600, letter-spacing -0.04em, line-height 1.08
- Card: glass `rgba(255,255,255,0.72)` + blur(12px), radius `10px`, hover lift -2px
- Prayer widget cards: glass variant, current prayer stronger shadow, "Berikutnya" pill dark
- Hadits section: void bg `#040404`, radial highlight, Arabic text rtl Amiri font
- Nav: glass sticky, active item pill bg, divider `rgba(0,0,0,0.05)`
- Divider: gradient from transparent to `rgba(0,0,0,0.07)`

---

> Made for Masjid Nurul Iman — monochrome clarity through glass calm.
