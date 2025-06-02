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
  const responseDiv = document.getElementById('form-response');

  if (!name || !email || !message) {
    responseDiv.className = 'form-message error';
    responseDiv.textContent = 'Пожалуйста, заполните все поля.';
    return;
  }

  // Очистка формы и показ сообщения
  responseDiv.className = 'form-message success';
  responseDiv.textContent = `Спасибо, ${name}! Мы скоро свяжемся с вами.`;

  this.reset(); // Сброс формы
});
