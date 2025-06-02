// Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", () => {
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
});

// Динамический параллакс
document.addEventListener("DOMContentLoaded", () => {
  const layers = document.querySelectorAll(".layer");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    layers.forEach(el => {
      const speed = parseFloat(el.getAttribute("data-speed")) || 0.2;
      el.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
});
