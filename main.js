// GSAP giriş animasyonu
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero-title', { y: -60, opacity: 0, duration: 1, ease: 'power3.out' });
  gsap.from('.hero-desc', { y: 60, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
  gsap.from('.cta-btn', { scale: 0.7, opacity: 0, duration: 0.7, delay: 0.7, ease: 'back.out(1.7)' });
  gsap.from('.category-card', { y: 40, opacity: 0, duration: 0.8, stagger: 0.15, delay: 1, ease: 'power2.out' });
});

// Magnetic button efekti
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('mousemove', (e) => {
    const rect = ctaBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ctaBtn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  });
  ctaBtn.addEventListener('mouseleave', () => {
    ctaBtn.style.transform = '';
  });
}

// Tilt hover efekti (kategori kartları)
document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Parallax arka plan ekle
const hero = document.querySelector('.hero');
if (hero) {
  const parallax = document.createElement('div');
  parallax.className = 'parallax-bg';
  hero.appendChild(parallax);
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    parallax.style.transform = `translateY(${scrolled * 0.2}px)`;
  });
}

// Mobil menü aç/kapat
window.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.main-nav ul');
  let menuOpen = false;
  let overlay = null;

  function openMenu() {
    navList.classList.add('open');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Overlay ekle
    overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.18)';
    overlay.style.zIndex = 104;
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeMenu);
    menuOpen = true;
  }
  function closeMenu() {
    navList.classList.remove('open');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
    if (overlay) {
      overlay.remove();
      overlay = null;
    }
    menuOpen = false;
  }
  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      if (menuOpen) closeMenu();
      else openMenu();
    });
    // Menüde bir linke tıklanınca menü kapansın (mobilde)
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 700) closeMenu();
      });
    });
  }
}); 