/*=========================================
INFINITY BRAINS
Professional Coaching Website
=========================================*/

/*=========================================
PRELOADER
=========================================*/

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

    }, 700);

});

/*=========================================
AOS ANIMATION
=========================================*/

AOS.init({

    duration: 1000,
    once: true,
    offset: 120

});

/*=========================================
STICKY NAVBAR
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});

/*=========================================
MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

            navLinks.classList.remove("active");

        }

    });

});

/*=========================================
BACK TO TOP BUTTON
=========================================*/

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 350) {

        topBtn.classList.add("show");

    }

    else {

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click", function (e) {

    e.preventDefault();

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

/*=========================================
COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter-grid h2");

let started = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".counter-section");

    if (!section) return;

    const trigger = section.offsetTop - 400;

    if (window.scrollY > trigger && !started) {

        counters.forEach(counter => {

            let target = parseInt(counter.innerText);

            let count = 0;

            let speed = target / 120;

            let interval = setInterval(() => {

                count += speed;

                if (count >= target) {

                    counter.innerText = target + "+";

                    clearInterval(interval);

                }

                else {

                    counter.innerText = Math.floor(count) + "+";

                }

            }, 15);

        });

        started = true;

    }

});

/*=========================================
ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
SCROLL REVEAL EFFECT
=========================================*/

const revealElements = document.querySelectorAll(

    ".course-card, .faculty-card, .result-card, .testimonial-card"

);

window.addEventListener("scroll", () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {

            el.classList.add("visible");

        }

    });

});

/*=========================================
OPTIONAL HERO SWIPER
(Uncomment if using Swiper)
=========================================*/

/*

const heroSwiper = new Swiper(".heroSwiper", {

    loop: true,

    effect: "fade",

    autoplay: {

        delay: 4000,

        disableOnInteraction: false,

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

});

*/