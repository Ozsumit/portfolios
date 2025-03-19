// Custom cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("click", () => {
  cursor.style.transform = "scale(0.8)";
  setTimeout(() => {
    cursor.style.transform = "scale(1)";
  }, 100);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Skill bars animation
const skillBars = document.querySelectorAll(".skill-bar");
const observerOptions = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const skillBar = entry.target;
      const level = skillBar.dataset.level;
      skillBar.querySelector(".skill-progress").style.width = `${level}%`;
    }
  });
}, observerOptions);

skillBars.forEach((skillBar) => {
  observer.observe(skillBar);
});

// Form handling
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Simulate form submission
  const submitBtn = contactForm.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

  setTimeout(() => {
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
    contactForm.reset();

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
    }, 2000);
  }, 1500);
});

// Theme toggle
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeToggle.querySelector("i").classList.toggle("fa-sun");
  themeToggle.querySelector("i").classList.toggle("fa-moon");
});

// Typing animation
const text = "Creative Developer & Designer";
const typingText = document.querySelector(".typing-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

// Start typing animation when page loads
window.addEventListener("load", typeWriter);
