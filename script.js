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
