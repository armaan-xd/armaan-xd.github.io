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

  const navContainer =
    document.querySelector(".nav-container");

  const navLinks =
    document.querySelector(".nav-links");


  if (navContainer && navLinks) {

    const menuButton =
      document.createElement("button");

    menuButton.className =
      "mobile-menu-button";

    menuButton.type = "button";

    menuButton.setAttribute(
      "aria-label",
      "Open navigation"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    menuButton.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;

    navContainer.appendChild(menuButton);


    menuButton.addEventListener("click", () => {

      const isOpen =
        navLinks.classList.toggle(
          "mobile-open"
        );


      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );


      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );

    });


    navLinks
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            navLinks.classList.remove(
              "mobile-open"
            );

            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );

            menuButton.setAttribute(
              "aria-label",
              "Open navigation"
            );

          }
        );

      });

  }


  /* =========================================
     3. LIGHT / DARK MODE
     ========================================= */

  const themeButton =
    document.createElement("button");

  themeButton.className =
    "theme-toggle";

  themeButton.type = "button";

  themeButton.setAttribute(
    "aria-label",
    "Toggle light and dark mode"
  );


  const savedTheme =
    localStorage.getItem(
      "portfolio-theme"
    );


  if (savedTheme === "light") {

    document.body.classList.add(
      "light-mode"
    );

  }


  function updateThemeIcon() {

    if (
      document.body.classList.contains(
        "light-mode"
      )
    ) {

      themeButton.textContent = "☀";

    } else {

      themeButton.textContent = "☾";

    }

  }


  updateThemeIcon();


  if (navContainer) {

    navContainer.appendChild(
      themeButton
    );

  }


  themeButton.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "light-mode"
      );


      const lightMode =
        document.body.classList.contains(
          "light-mode"
        );


      localStorage.setItem(
        "portfolio-theme",
        lightMode
          ? "light"
          : "dark"
      );


      updateThemeIcon();

    }
  );


  /* =========================================
     4. SCROLL REVEAL ANIMATIONS
     ========================================= */

  const revealElements =
    document.querySelectorAll(
      ".section, .project-card, .skill-card, .education-card, .interest"
    );


  revealElements.forEach(element => {

    element.classList.add(
      "reveal"
    );

  });


  if (
    "IntersectionObserver" in window
  ) {

    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {

          entries.forEach(entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    revealElements.forEach(
      element => {

        revealObserver.observe(
          element
        );

      }
    );

  } else {

    revealElements.forEach(
      element => {

        element.classList.add(
          "visible"
        );

      }
    );

  }


  /* =========================================
     5. BACK TO TOP BUTTON
     ========================================= */

  const backToTop =
    document.createElement("button");

  backToTop.className =
    "back-to-top";

  backToTop.type = "button";

  backToTop.innerHTML = "↑";

  backToTop.setAttribute(
    "aria-label",
    "Back to top"
  );


  document.body.appendChild(
    backToTop
  );


  window.addEventListener(
    "scroll",
    () => {

      if (
        window.scrollY > 500
      ) {

        backToTop.classList.add(
          "show"
        );

      } else {

        backToTop.classList.remove(
          "show"
        );

      }

    }
  );


  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );


  /* =========================================
     6. HERO TYPING EFFECT
     ========================================= */

  const eyebrow =
    document.querySelector(
      ".hero .hero-role"
    );


  if (eyebrow) {

    const words = [

      "CSE STUDENT · DEVELOPER · KOLKATA",

      "CSE STUDENT · BUILDER · KOLKATA",

      "CSE STUDENT · PROGRAMMER · KOLKATA"

    ];


    let wordIndex = 0;

    let characterIndex = 0;

    let deleting = false;


    function typeEffect() {

      const currentWord =
        words[wordIndex];


      if (!deleting) {

        eyebrow.textContent =
          currentWord.substring(
            0,
            characterIndex + 1
          );


        characterIndex++;


        if (
          characterIndex ===
          currentWord.length
        ) {

          deleting = true;


          setTimeout(
            typeEffect,
            1800
          );


          return;

        }

      } else {

        eyebrow.textContent =
          currentWord.substring(
            0,
            characterIndex - 1
          );


        characterIndex--;


        if (
          characterIndex === 0
        ) {

          deleting = false;


          wordIndex =
            (wordIndex + 1) %
            words.length;

        }

      }


      setTimeout(
        typeEffect,
        deleting
          ? 40
          : 75
      );

    }


    eyebrow.textContent = "";


    setTimeout(
      typeEffect,
      700
    );

  }


  /* =========================================
     7. ACTIVE NAVIGATION
     ========================================= */

  const sections =
    document.querySelectorAll(
      "section[id]"
    );


  const navigationLinks =
    document.querySelectorAll(
      '.nav-links a[href^="#"]'
    );


  if (
    "IntersectionObserver" in window
  ) {

    const sectionObserver =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                entry.isIntersecting
              ) {

                navigationLinks
                  .forEach(link => {

                    link.classList.remove(
                      "active"
                    );


                    if (
                      link.getAttribute(
                        "href"
                      ) ===
                      "#" +
                      entry.target.id
                    ) {

                      link.classList.add(
                        "active"
                      );

                    }

                  });

              }

            }
          );

        },
        {
          rootMargin:
            "-35% 0px -55% 0px"
        }
      );


    sections.forEach(
      section => {

        sectionObserver.observe(
          section
        );

      }
    );

  }


  /* =========================================
     8. PROJECT CARD INTERACTION
     ========================================= */

  document
    .querySelectorAll(
      ".project-card"
    )
    .forEach(card => {

      card.addEventListener(
        "mouseenter",
        () => {

          card.classList.add(
            "project-hover"
          );

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.classList.remove(
            "project-hover"
          );

        }
      );

    });


  /* =========================================
     9. CURRENT YEAR
     ========================================= */

  const footerParagraphs =
    document.querySelectorAll(
      "footer p"
    );


  footerParagraphs.forEach(
    paragraph => {

      if (
        paragraph.textContent.includes(
          "©"
        )
      ) {

        paragraph.textContent =
          `© ${new Date().getFullYear()} Armaan Sayyed`;

      }

    }
  );


  /* =========================================
     10. TIME-BASED GREETING
     ========================================= */

  const greeting =
    document.querySelector(
      ".greeting"
    );


  if (greeting) {

    const hour =
      new Date().getHours();


    let message;


    if (hour < 12) {

      message =
        "GOOD MORNING ☀";

    } else if (hour < 17) {

      message =
        "GOOD AFTERNOON 🌤";

    } else if (hour < 22) {

      message =
        "GOOD EVENING 🌙";

    } else {

      message =
        "WORKING LATE? 🌌";

    }


    greeting.textContent =
      message;

  }


  /* =========================================
     11. SECRET DEVELOPER MODE
     ========================================= */

  const logo =
    document.querySelector(
      ".logo"
    );


  if (logo) {

    let taps = 0;

    let tapTimer;


    const devPanel =
      document.createElement(
        "div"
      );


    devPanel.className =
      "dev-panel";


    devPanel.innerHTML = `

      <div class="dev-window">

        <button
          class="dev-close"
          type="button"
          aria-label="Close developer mode"
        >
          ×
        </button>

        <div class="dev-title">
          DEVELOPER MODE
        </div>

        <div class="dev-line">
          ────────────────────────
        </div>

        <div class="dev-row">
          <span>Browser</span>
          <strong id="dev-browser">
            Detecting...
          </strong>
        </div>

        <div class="dev-row">
          <span>Platform</span>
          <strong id="dev-platform">
            Detecting...
          </strong>
        </div>

        <div class="dev-row">
          <span>Status</span>
          <strong class="online">
            ONLINE
          </strong>
        </div>

        <div class="dev-row">
          <span>Projects</span>
          <strong>
            02
          </strong>
        </div>

        <div class="dev-row">
          <span>Time</span>
          <strong id="dev-time">
            --:--
          </strong>
        </div>

       <div class="dev-command">
  &gt; system ready<span class="terminal-cursor">_</span>
</div>

      </div>

    `;


    document.body.appendChild(
      devPanel
    );


    /* ---------- Browser detection ---------- */

    function getBrowser() {

      const userAgent =
        navigator.userAgent;


      if (
        userAgent.includes(
          "Edg/"
        )
      ) {

        return "Edge";

      }


      if (
        userAgent.includes(
          "OPR/"
        )
      ) {

        return "Opera";

      }


      if (
        userAgent.includes(
          "Chrome"
        )
      ) {

        return "Chrome";

      }


      if (
        userAgent.includes(
          "Firefox"
        )
      ) {

        return "Firefox";

      }


      if (
        userAgent.includes(
          "Safari"
        )
      ) {

        return "Safari";

      }


      return "Browser";

    }


    /* ---------- Platform detection ---------- */

    function getPlatform() {

      const userAgent =
        navigator.userAgent;


      if (
        /Android/i.test(
          userAgent
        )
      ) {

        return "Android";

      }


      if (
        /iPhone|iPad|iPod/i.test(
          userAgent
        )
      ) {

        return "iOS";

      }


      if (
        /Windows/i.test(
          userAgent
        )
      ) {

        return "Windows";

      }


      if (
        /Macintosh|Mac OS/i.test(
          userAgent
        )
      ) {

        return "macOS";

      }


      if (
        /Linux/i.test(
          userAgent
        )
      ) {

        return "Linux";

      }


      return "Unknown";

    }


    /* ---------- Update developer information ---------- */

    function updateDevInfo() {

      const browser =
        document.querySelector(
          "#dev-browser"
        );


      const platform =
        document.querySelector(
          "#dev-platform"
        );


      const time =
        document.querySelector(
          "#dev-time"
        );


      if (browser) {

        browser.textContent =
          getBrowser();

      }


      if (platform) {

        browser &&
          (platform.textContent =
            getPlatform());

      }


      if (time) {

        time.textContent =
          new Date().toLocaleTimeString(
            [],
            {
              hour: "2-digit",
              minute: "2-digit"
            }
          );

      }

    }


    /* ---------- Open / close developer mode ---------- */

    function toggleDeveloperMode() {

      updateDevInfo();

      devPanel.classList.toggle(
        "show"
      );

    }


    logo.addEventListener(
      "click",
      () => {

        taps++;

        clearTimeout(
          tapTimer
        );


        tapTimer =
          setTimeout(
            () => {

              taps = 0;

            },
            1500
          );


        if (
          taps >= 5
        ) {

          toggleDeveloperMode();

          taps = 0;

        }

      }
    );


    /* ---------- Close button ---------- */

    const closeButton =
      devPanel.querySelector(
        ".dev-close"
      );


    if (closeButton) {

      closeButton.addEventListener(
        "click",
        () => {

          devPanel.classList.remove(
            "show"
          );

        }
      );

    }


    /* ---------- Click outside window ---------- */

    devPanel.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          devPanel
        ) {

          devPanel.classList.remove(
            "show"
          );

        }

      }
    );


    /* ---------- ESC key ---------- */

    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Escape"
        ) {

          devPanel.classList.remove(
            "show"
          );

        }

      }
    );

  }


  /* =========================================
     12. PAGE LOADED
     ========================================= */

  document.body.classList.add(
    "js-loaded"
  );


});