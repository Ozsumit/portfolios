document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Theme toggle
  const themeToggle = document.querySelector(".theme-toggle");
  const icon = themeToggle.querySelector("i");
  let isDark = false;

  themeToggle.addEventListener("click", () => {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.style.setProperty("--bg", "#2d3436");
      document.documentElement.style.setProperty("--text", "#ffffff");
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      document.documentElement.style.setProperty("--bg", "#ffffff");
      document.documentElement.style.setProperty("--text", "#2d3436");
      icon.classList.replace("fa-sun", "fa-moon");
    }
  });

  // Form submission
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // Add form submission logic here
    form.reset();
    alert("Message sent successfully!");
  });

  // Scroll reveal animation
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".project-card, .skill-tag").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });
});
