document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const btn = document.getElementById("openModalBtn");
  const span = document.querySelector(".close-btn");

  // === Открытие модального окна ===
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

  // === Отправка формы в Telegram ===
  const form = document.getElementById("modal-contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("modal-name").value.trim();
      const email = document.getElementById("modal-email").value.trim();
      const message = document.getElementById("modal-message").value.trim();

      if (!name || !email || !message) {
        alert("Заполните все поля");
        return;
      }

      const telegramToken = '7500005686:AAG5JpXwH3l91R9GgraVeBi1ro6okZSHEqo';
      const chatId = '255415407';

      const text = `
📩 Новое сообщение с сайта

Имя: ${name}
Email: ${email}
Сообщение: ${message}
`;

      fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`,  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML'
        })
      })
      .then(() => {
        alert("Спасибо! Сообщение отправлено.");
        form.reset();
        modal.style.display = "none";
      })
      .catch(err => {
        console.error("Ошибка отправки:", err);
        alert("Ошибка отправки. Попробуйте позже.");
      });
    });
  }
});
// === Бургер-меню ===
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // === Переключение темы ===
  const themeToggle = document.querySelector(".theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateThemeButton(isDark);
    });

    function updateThemeButton(isDark) {
      const icon = themeToggle.querySelector("i");
      if (isDark) {
        icon.classList.replace("fa-moon", "fa-sun");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
      }
    }

    // Загрузка темы из localStorage
    const savedTheme = localStorage.getItem("theme") === "dark";
    if (savedTheme) {
      document.body.classList.add("dark-theme");
      updateThemeButton(true);
    }
  }
});
// === Переключатель темы ===
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      const isDark = document.body.classList.contains("dark-theme");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      updateThemeButton(isDark);
    });

    function updateThemeButton(isDark) {
      const icon = themeToggle.querySelector("i");
      icon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
    }

    // Загружаем сохранённую тему
    const savedTheme = localStorage.getItem("theme") === "dark";
    if (savedTheme) {
      document.body.classList.add("dark-theme");
      updateThemeButton(true);
    }
  }

  // === Бургер-меню ===
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
