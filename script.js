// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll-reveal for sections
const revealTargets = document.querySelectorAll(
  ".about-grid, .skillboard, .project-grid, .contact-grid"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => revealObserver.observe(el));
