// Initialization
document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initGSAPAnimations();
    initCustomCursor();
    initSmoothScroll();
});

// 1. Preloader Animation
function initPreloader() {
    const tl = gsap.timeline();
    tl.to(".loader-bar", { width: "100%", duration: 1.5, ease: "power2.inOut" })
      .to(".preloader", { yPercent: -100, duration: 1, ease: "expo.inOut" })
      .from(".line", { y: 100, stagger: 0.1, duration: 1, ease: "power4.out" }, "-=0.5");
}

// 2. GSAP ScrollTriggers
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax on Hero Image
    gsap.to(".hero-img-main", {
        scrollTrigger: {
            trigger: ".hero-split",
            start: "top top",
            scrub: true
        },
        scale: 1.2,
        y: 100
    });

    // Reveal Stats on Scroll
    gsap.from(".stat-card", {
        scrollTrigger: {
            trigger: ".luxury-stats",
            start: "top 80%"
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1
    });

    // Count up animation
    const stats = document.querySelectorAll(".stat-num");
    stats.forEach(stat => {
        const val = parseInt(stat.getAttribute("data-val"));
        gsap.to(stat, {
            innerText: val,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
                trigger: stat,
                start: "top 90%"
            }
        });
    });
}

// 3. Custom Luxury Cursor
function initCustomCursor() {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", e => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    });

    // Cursor expand on links
    const links = document.querySelectorAll("a, button, .acc-header");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.style.width = "50px";
            cursor.style.height = "50px";
            cursor.style.backgroundColor = "rgba(212, 175, 55, 0.1)";
        });
        link.addEventListener("mouseleave", () => {
            cursor.style.width = "20px";
            cursor.style.height = "20px";
            cursor.style.backgroundColor = "transparent";
        });
    });
}

// 4. Smooth Navigation
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".glass-nav");
    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
