document.addEventListener('DOMContentLoaded', () => {
  // Dynamic Closing Time Update
  const now = new Date();
  const hours = now.getHours();
  const closingTimeEl = document.getElementById('closing-time');
  if (hours >= 23 || hours < 10) {
    closingTimeEl.textContent = "Closed Now — Opens at 10 AM";
    closingTimeEl.style.background = "#d9534f";
  } else {
    closingTimeEl.textContent = "Open Now — Closes at 11 PM";
    closingTimeEl.style.background = "#5cb85c";
  }

  // Back-to-Top Button Functionality
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

  // Smooth scrolling for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});


