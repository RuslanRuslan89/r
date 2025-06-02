// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // чтобы не повторялось
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  // Здесь можно добавить код для реальной отправки формы (например через EmailJS)
  // Сейчас просто показываем сообщение

  const form = this;
  form.innerHTML = `
    <div class="success">
      Спасибо, ${name}! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.
    </div>
  `;
});
