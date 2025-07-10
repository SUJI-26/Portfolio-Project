// =================== Sticky Header ===================
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  header.classList.toggle("sticky", window.scrollY > 100)
})

// =================== Dark/Light Theme ===================
const themeBtn = document.querySelector(".theme-btn")
const darkTheme = "dark-theme"
const iconTheme = "sun"

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? "sun" : "moon"

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

if (selectedTheme) {
  document.body.classList.toggle(darkTheme, selectedTheme === "dark")
  themeBtn.classList.toggle(iconTheme, selectedIcon === "sun")
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme)
  themeBtn.classList.toggle(iconTheme)
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})

// =================== Scroll To Top Button ===================
const scrollToTopBtn = document.querySelector(".scrollToTop-btn")

window.addEventListener("scroll", () => {
  scrollToTopBtn.classList.toggle("active", window.scrollY >= 560)
})

scrollToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
})

// =================== Active Nav Links on Scroll ===================
function scrollActive() {
  const sections = document.querySelectorAll("section[id]")
  const scrollY = window.pageYOffset

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")
    const navLink = document.querySelector(`.nav-link[href*=${sectionId}]`)

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("active")
    } else {
      navLink?.classList.remove("active")
    }
  })
}
window.addEventListener("scroll", scrollActive)

// =================== Responsive Menu ===================
const menuBtn = document.querySelector(".menu-btn")
const closeBtn = document.querySelector(".nav-close-btn")
const navBar = document.querySelector(".nav-bar")
const navLinks = document.querySelectorAll(".nav-link")

menuBtn?.addEventListener("click", () => navBar?.classList.add("active"))
closeBtn?.addEventListener("click", () => navBar?.classList.remove("active"))

navLinks.forEach(link => {
  link.addEventListener("click", () => navBar?.classList.remove("active"))
})



// =================== Project Scroll  ===================


const scrollAmount = 500; // adjust scroll distance per click

function scrollLeft() {
  document.getElementById("projectsGrid").scrollBy({
    left: -500,
    behavior: 'smooth'
  });
}

function scrollRight() {
  document.getElementById("projectsGrid").scrollBy({
    left: 500,
    behavior: 'smooth'
  });
}

// =================== ScrollReveal Animations ===================
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
  })

  sr.reveal(`.home-content, .section-subtitle, .section-title`)
  sr.reveal(`.home-image`, { delay: 500 })
  sr.reveal(`.home-content h3, .home-content p, .about-content p`, { delay: 600, origin: "right" })
  sr.reveal(`.home-content .btn-group, .home-content .social-media`, { delay: 700, origin: "bottom" })
  sr.reveal(`.about-img`, { delay: 600, origin: "left" })
  sr.reveal(`.about-content h2, .about-content h3, .about-content .btn`, { delay: 700, origin: "right" })
  sr.reveal(`.skills-content h3`, { delay: 600, origin: "left" })
  sr.reveal(`.education-box, .skills-box`, { delay: 700, origin: "bottom", interval: 100 })
  sr.reveal(`.projects-intro`, { delay: 600, origin: "top" })
  sr.reveal(`.project-card`, { delay: 700, origin: "bottom", interval: 100 })
  sr.reveal(`.contact-info`, { delay: 600, origin: "left" })
  sr.reveal(`.contact-form-container`, { delay: 700, origin: "right" })
  sr.reveal(`.footer-wrapper, .copyright`, { delay: 600, origin: "top" })
} else {
  console.warn("ScrollReveal is not defined. Ensure it is properly imported.")
}

// =================== Animated Auto-Changing Title ===================
const roleText = document.querySelector(".typed-text");
const words = ["Frontend Developer", "Web Designer", "MERN Stack Developer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentLetters = currentWord.substring(0, letterIndex);
  roleText.textContent = currentLetters;

  if (!isDeleting && letterIndex < currentWord.length) {
    letterIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(typeEffect, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeEffect, 1200); // pause before deleting
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 200);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roleText) typeEffect();
});
