/* =========================================
   ARMAAN SAYYED — PORTFOLIO JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     1. SMOOTH SCROLLING
     ========================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


  /* =========================================
     2. MOBILE NAVIGATION
     ========================================= */

  const navbar = document.querySelector(".navbar");
  const navContainer = document.querySelector(".nav-container");
  const navLinks = document.querySelector(".nav-links");

  if (navbar && navContainer && navLinks) {

    const menuButton = document.createElement("button");

    menuButton.className = "mobile-menu-button";
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    navContainer.appendChild(menuButton);


    menuButton.addEventListener("click", () => {

      const isOpen = navLinks.classList.toggle("mobile-open");

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

    });


    // Close menu after clicking a navigation link

    navLinks.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        menuButton.setAttribute(
          "aria-label",
          "Open navigation"
        );

      });

    });

  }


  /* /* =========================================
   3. LIGHT / DARK MODE
   ========================================= */

const themeButton = document.createElement("button");

themeButton.className = "theme-toggle";
themeButton.type = "button";

themeButton.setAttribute(
  "aria-label",
  "Toggle light and dark mode"
);

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
}


/* Update the button icon */

function updateThemeIcon() {

  if (document.body.classList.contains("light-mode")) {

    themeButton.textContent = "☀";

  } else {

    themeButton.textContent = "☾";

  }

}


updateThemeIcon();


/* Put button inside navigation */

const navContainer = document.querySelector(".nav-container");

if (navContainer) {

  navContainer.appendChild(themeButton);

}


/* Toggle theme */

themeButton.addEventListener("click", function () {

  document.body.classList.toggle("light-mode");


  const lightMode =
    document.body.classList.contains("light-mode");


  localStorage.setItem(
    "portfolio-theme",
    lightMode ? "light" : "dark"
  );


  updateThemeIcon();

}); =========================================
     4. SCROLL REVEAL ANIMATIONS
     ========================================= */

  const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .education-card, .interest"
  );


  revealElements.forEach(element => {
    element.classList.add("reveal");
  });


  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  /* =========================================
     5. BACK TO TOP BUTTON
     ========================================= */

  const backToTop = document.createElement("button");

  backToTop.className = "back-to-top";
  backToTop.innerHTML = "↑";
  backToTop.setAttribute(
    "aria-label",
    "Back to top"
  );


  document.body.appendChild(backToTop);


  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

      backToTop.classList.add("show");

    } else {

      backToTop.classList.remove("show");

    }

  });


  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });


  /* =========================================
     6. HERO TYPING EFFECT
     ========================================= */

  const eyebrow = document.querySelector(".hero .eyebrow");


  if (eyebrow) {

    const originalText = eyebrow.textContent.trim();

    const words = [
      "CSE STUDENT · DEVELOPER · KOLKATA",
      "CSE STUDENT · BUILDER · KOLKATA",
      "CSE STUDENT · PROGRAMMER · KOLKATA"
    ];


    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typeEffect() {

      const currentWord = words[wordIndex];


      if (!deleting) {

        eyebrow.textContent =
          currentWord.substring(0, characterIndex + 1);

        characterIndex++;


        if (characterIndex === currentWord.length) {

          deleting = true;

          setTimeout(typeEffect, 1800);

          return;

        }

      } else {

        eyebrow.textContent =
          currentWord.substring(0, characterIndex - 1);

        characterIndex--;


        if (characterIndex === 0) {

          deleting = false;

          wordIndex =
            (wordIndex + 1) % words.length;

        }

      }


      setTimeout(
        typeEffect,
        deleting ? 40 : 75
      );

    }


    eyebrow.textContent = "";

    setTimeout(typeEffect, 700);

  }


  /* =========================================
     7. ACTIVE NAVIGATION
     ========================================= */

  const sections = document.querySelectorAll(
    "section[id]"
  );

  const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
  );


  const sectionObserver = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          navigationLinks.forEach(link => {

            link.classList.remove("active");

            if (
              link.getAttribute("href") ===
              "#" + entry.target.id
            ) {

              link.classList.add("active");

            }

          });

        }

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );


  sections.forEach(section => {
    sectionObserver.observe(section);
  });


  /* =========================================
     8. PROJECT CARD INTERACTION
     ========================================= */

  document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

      card.classList.add("project-hover");

    });


    card.addEventListener("mouseleave", () => {

      card.classList.remove("project-hover");

    });

  });


  /* =========================================
     9. CURRENT YEAR
     ========================================= */

  const footerParagraphs =
    document.querySelectorAll("footer p");


  footerParagraphs.forEach(paragraph => {

    if (
      paragraph.textContent.includes("©")
    ) {

      paragraph.textContent =
        `© ${new Date().getFullYear()} Armaan Sayyed`;

    }

  });


  /* =========================================
     10. PAGE LOADED
     ========================================= */

  document.body.classList.add("js-loaded");

});