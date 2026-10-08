/* =========================================================
   MAIN JAVASCRIPT
   Functionality only. Edit content in js/data.js.
   ========================================================= */

const root = document.documentElement;
const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
root.setAttribute("data-theme", savedTheme);

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("portfolio-theme", next);
});

document.querySelector(".mobile-toggle").addEventListener("click", (event) => {
  const nav = document.querySelector(".nav-links");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => document.querySelector(".nav-links").classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();

const skillsGrid = document.getElementById("skillsGrid");
skillsGrid.innerHTML = skills.map((item, i) => `
  <article class="skill-card reveal">
    <span class="skill-number">0${i + 1}</span>
    <h3>${item.title}</h3><p>${item.text}</p>
    <div class="skill-tags">${item.tools.map(tool => `<span>${tool}</span>`).join("")}</div>
  </article>
`).join("");

const experienceTimeline = document.getElementById("experienceTimeline");
experienceTimeline.innerHTML = experience.map(item => `
  <article class="timeline-item reveal">
    <div class="timeline-date">${item.date}</div>
    <div><h3>${item.company}</h3><div class="role">${item.role}</div><ul>${item.points.map(point => `<li>${point}</li>`).join("")}</ul></div>
  </article>
`).join("");

const projectGrid = document.getElementById("projectGrid");
projectGrid.innerHTML = projects.map(project => `
  <article class="project-card reveal">
    <div class="project-visual"><span class="project-number">${project.number}</span></div>
    <div class="project-content">
      <div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <h3>${project.title}</h3><p>${project.description}</p>
      <a class="project-link" href="${project.link}">${project.link === "#contact" ? "Discuss this project ↗" : "View project ↗"}</a>
    </div>
  </article>
`).join("");

const serviceGrid = document.getElementById("serviceGrid");
serviceGrid.innerHTML = services.map(service => `
  <article class="service-card reveal"><div class="service-icon">${service.icon}</div><h3>${service.title}</h3><p>${service.text}</p></article>
`).join("");

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
