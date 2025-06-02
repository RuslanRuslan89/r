// === Модальное окно ===
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const btn = document.getElementById("openModalBtn");
  const span = document.querySelector(".close-btn");

  if (btn) {
    btn.onclick = function () {
      modal.style.display = "block";
    };
  }

  if (span) {
    span.onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Обработка отправки формы
  const form = document.getElementById("modal-contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Спасибо! Ваше сообщение отправлено.");
      form.reset();
      modal.style.display = "none";
    });
  }
});

// === Scroll Reveal Animation ===
const sections = document.querySelectorAll(".scroll-reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});
