/* =========================
   TYPING ANIMATION
========================= */

new Typed("#typing", {

    strings: [

        "Java Full Stack Developer",

        "Laravel Backend Developer",

        "Software Developer",

        "Building Enterprise Applications",

        "MySQL & MongoDB Developer",

        "Turning Ideas Into Software"

    ],

    typeSpeed: 60,

    backSpeed: 35,

    backDelay: 1800,

    startDelay: 500,

    loop: true,

    smartBackspace: true,

    showCursor: true,

    cursorChar: "|"

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================
   SCROLL PROGRESS BAR
========================= */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.querySelector(".scroll-progress")
        .style.width = progress + "%";

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active-link");

        }

    });

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".card, .skill-box, .project-card, .contact-card, .timeline-content"
    );

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   PROJECT CARD HOVER EFFECT
========================= */

document.querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.setProperty(
                "--x",
                `${x}px`
            );

            card.style.setProperty(
                "--y",
                `${y}px`
            );

        });

    });


/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".counter");

const speed = 100;

function startCounter() {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute(
                "data-target"
            );

        const updateCounter = () => {

            const count =
                +counter.innerText;

            const increment =
                target / speed;

            if (count < target) {

                counter.innerText =
                    Math.ceil(
                        count + increment
                    );

                setTimeout(
                    updateCounter,
                    20
                );

            } else {

                counter.innerText =
                    target;

            }

        };

        updateCounter();

    });

}


/* =========================
   COUNTER OBSERVER
========================= */

const statsSection =
    document.querySelector(".stats");

if (statsSection) {

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter();

                    observer.disconnect();

                }

            });

        });

    observer.observe(statsSection);

}


/* =========================
   NAVBAR SHADOW ON SCROLL
========================= */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.boxShadow =
            "none";

    }

});


/* =========================
   PRELOADER SUPPORT
========================= */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});


/* =========================
   YEAR AUTO UPDATE
========================= */

const yearElement =
    document.querySelector(".current-year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}