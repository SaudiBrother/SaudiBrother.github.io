/* ---------------------------------------------------------
   📘 PERPUSTAKAAN DIGITAL - MAIN.JS
   Berisi logika efek transisi, background, dan tombol navigasi
------------------------------------------------------------ */

/* ========== 1. PENGATUR BACKGROUND OTOMATIS ========== */
function setAdaptiveBackground() {
  const bg = document.querySelector(".bg-light");
  if (!bg) return;

  const ratio = window.innerWidth / window.innerHeight;
  let image = "rawfiles/images/bg_light_9x16.jpg"; // default portrait

  if (ratio > 1.4 && ratio < 1.8) {
    image = "rawfiles/images/bg_light_16x9.jpg"; // layar lebar
  } else if (ratio < 1.0) {
    image = "rawfiles/images/bg_light_3x4.jpg"; // layar tablet
  }

  bg.src = image;
}

window.addEventListener("resize", setAdaptiveBackground);
window.addEventListener("load", setAdaptiveBackground);

/* ========== 2. EFEK FADE-IN DAN FADE-OUT ========== */
const fadeOverlay = document.createElement("div");
fadeOverlay.className = "fade-transition";
document.body.appendChild(fadeOverlay);

/* Efek muncul saat halaman baru dimuat */
window.addEventListener("DOMContentLoaded", () => {
  fadeOverlay.classList.add("fade-active");
  setTimeout(() => fadeOverlay.classList.remove("fade-active"), 500);
});

/* Fungsi transisi ke halaman lain */
function goToPage(url) {
  fadeOverlay.classList.add("fade-active");
  setTimeout(() => {
    window.location.href = url;
  }, 700);
}

/* ========== 3. FUNGSI TOMBOL BACK ========== */
function goBack() {
  fadeOverlay.classList.add("fade-active");
  setTimeout(() => {
    window.history.back();
  }, 600);
}

/* ========== 4. TOMBOL SEARCH (opsional) ========== */
function searchInPage() {
  const query = prompt("🔍 Masukkan kata yang ingin dicari di buku:");
  if (query && window.find) {
    window.find(query);
  } else if (query) {
    alert("Browser kamu tidak mendukung fitur pencarian di halaman.");
  }
}

/* ========== 5. ANIMASI CAHAYA RUANGAN (DINAMIS) ========== */
function createGlowLights() {
  const count = 8; // jumlah cahaya
  for (let i = 0; i < count; i++) {
    const glow = document.createElement("div");
    glow.className = "glow";
    glow.style.animationDelay = `${Math.random() * 5}s`;
    glow.style.animationDuration = `${6 + Math.random() * 6}s`;
    document.body.appendChild(glow);
  }
}

window.addEventListener("load", createGlowLights);