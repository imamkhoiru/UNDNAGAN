// Countdown Timer
const countDownDate = new Date("Jul 20, 2025 09:00:00").getTime();
const countdownElement = document.getElementById("countdown");

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    countdownElement.innerHTML = "Hari ini adalah hari bahagia kami!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countdownElement.innerHTML = `${days}h ${hours}j ${minutes}m ${seconds}s`;
}, 1000);

// Buku Tamu Simulasi
document.getElementById("guestbookForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this[0].value;
  const message = this[1].value;
  const entry = document.createElement("div");
  entry.classList.add("alert", "alert-light");
  entry.innerHTML = `<strong>${name}</strong><br>${message}`;
  document.getElementById("guestbookEntries").appendChild(entry);
  this.reset();
});

// RSVP Form
document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this[0].value;
  const attendance = this[1].value;
  const entry = document.createElement("div");
  entry.classList.add("alert", "alert-success");
  entry.innerHTML = `<strong>${name}</strong> ${attendance === "yes" ? "akan hadir" : "tidak bisa hadir"} 💌`;
  document.getElementById("rsvpEntries").appendChild(entry);
  this.reset();
});

// Auto play music
const audio = document.getElementById("weddingMusic");
window.addEventListener('click', () => {
  if (audio.paused) {
    audio.play().catch(() => {});
  }
});

// Scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });
  document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
});

// Countdown Resepsi
const resepsiDate = new Date("Jul 20, 2025 11:00:00").getTime();
const resepsiCountdown = document.getElementById("resepsiCountdown");

const resepsiTimer = setInterval(function () {
  const now = new Date().getTime();
  const distance = resepsiDate - now;

  if (distance < 0) {
    clearInterval(resepsiTimer);
    resepsiCountdown.innerHTML = "Saatnya Resepsi 🎉";
    return;
  }

  const d = Math.floor(distance / (1000 * 60 * 60 * 24));
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((distance % (1000 * 60)) / 1000);
  resepsiCountdown.innerHTML = `${d}h ${h}j ${m}m ${s}s`;
}, 1000);
