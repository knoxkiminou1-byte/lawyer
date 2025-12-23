/* LUXURY THEME CORE */
:root {
    --deep-emerald: #041f16;
    --gold: #d4af37;
    --champagne: #f7e7ce;
    --white: #ffffff;
    --text-light: rgba(255,255,255,0.8);
    --transition-smooth: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

* { margin: 0; padding: 0; box-sizing: border-box; cursor: none; } /* Custom Cursor Required */

body {
    background-color: var(--deep-emerald);
    font-family: 'Montserrat', sans-serif;
    color: var(--white);
    overflow-x: hidden;
}

/* Custom Cursor */
.custom-cursor {
    width: 20px;
    height: 20px;
    border: 1px solid var(--gold);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: width 0.3s, height 0.3s;
}

/* PRELOADER */
.preloader {
    position: fixed;
    height: 100vh;
    width: 100%;
    background: #000;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* NAVIGATION */
.glass-nav {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 2rem 0;
    z-index: 1000;
    transition: var(--transition-smooth);
}

.glass-nav.scrolled {
    background: rgba(4, 31, 22, 0.9);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
}

.brand-logo {
    font-size: 1.2rem;
    letter-spacing: 5px;
    color: var(--gold);
    text-decoration: none;
    font-weight: 300;
}

/* HERO SECTION */
.hero-split {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    height: 100vh;
    overflow: hidden;
}

.hero-left {
    display: flex;
    align-items: center;
    padding: 0 10%;
    background: var(--deep-emerald);
}

.main-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 8vw, 6rem);
    line-height: 1;
    margin: 2rem 0;
}

.gold-italic {
    font-style: italic;
    color: var(--gold);
    display: block;
    padding-left: 2rem;
}

.hero-right {
    position: relative;
    background: #000;
}

.hero-image-wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.hero-img-main {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: sepia(20%) contrast(110%);
    transition: transform 2s ease;
}

/* ANIMATION CLASSES */
.line { overflow: hidden; display: block; }
.reveal-text { display: block; font-weight: 100; letter-spacing: 4px; color: var(--gold); }

/* LUXURY ACCORDION */
.acc-item { border-bottom: 1px solid rgba(212, 175, 55, 0.2); padding: 2rem 0; }
.acc-header { display: flex; align-items: center; cursor: pointer; }
.acc-num { color: var(--gold); margin-right: 2rem; font-size: 0.8rem; }
.acc-content { max-height: 0; overflow: hidden; transition: max-height 0.5s ease; }
.acc-item.active .acc-content { max-height: 300px; padding-top: 1.5rem; }

/* STATS */
.luxury-stats { padding: 10rem 0; background: #062a1e; }
.stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; text-align: center; }
.stat-num { font-size: 4rem; font-family: 'Cormorant Garamond'; color: var(--gold); }
