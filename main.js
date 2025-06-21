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

window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    if (window.confetti) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.4 },
        colors: ['#FF6B6B', '#4ECDC4', '#667eea', '#764ba2', '#F8F9FA'],
        scalar: 1.1
      });
    }
  }, 800); // Hero başlığı animasyonu sonrası başlasın

  // Kategori kartlarına animasyon (GSAP ile)
  if (window.gsap) {
    gsap.to('.animated-category-card', {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 0.5,
      clearProps: 'all'
    });
  } else {
    // GSAP yoksa fallback olarak animasyonları kaldır
    document.querySelectorAll('.animated-category-card').forEach(function(card) {
      card.style.opacity = 1;
      card.style.transform = 'none';
    });
  }
});

// KAMPANYA BANNER ANİMASYONU
window.addEventListener('DOMContentLoaded', () => {
  if (window.gsap) {
    gsap.from('.campaign-banner', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.5
    });
    gsap.from('.campaign-badge', {
      scale: 0.6,
      opacity: 0,
      duration: 0.7,
      delay: 1.1,
      ease: 'back.out(1.7)'
    });
  }
});

// SEPETE EKLE BUTONU ANİMASYONU
function animateProductBtn(btn) {
  if (btn.classList.contains('added')) return;
  btn.classList.add('added');
  btn.textContent = 'Sepete Eklendi!';
  btn.style.pointerEvents = 'none';
  // Konfeti patlat
  if (window.confetti) {
    const rect = btn.getBoundingClientRect();
    confetti({
      particleCount: 40,
      spread: 60,
      origin: {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight
      },
      colors: ['#4ECDC4', '#FF6B6B', '#2D3436', '#F8F9FA']
    });
  }
  // Zıplama animasyonu
  btn.animate([
    { transform: 'scale(1) rotateX(0deg)' },
    { transform: 'scale(1.12) rotateX(12deg)' },
    { transform: 'scale(1) rotateX(0deg)' }
  ], {
    duration: 420,
    easing: 'cubic-bezier(.77,0,.18,1)'
  });
}
document.querySelectorAll('.product-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    animateProductBtn(this);
  });
  // Hover'da X ekseninde hafif tilt
  btn.addEventListener('mousemove', function(e) {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;
    const rotateY = ((x - centerX) / centerX) * 7;
    btn.style.transform = `rotateY(${rotateY}deg)`;
  });
  btn.addEventListener('mouseleave', function() {
    btn.style.transform = '';
  });
}); 

// HAKKIMIZDA SAYFASI ANİMASYONLARI
window.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.about-hero')) {
    if (window.gsap) {
      gsap.from('.about-title', { y: -60, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.about-desc', { y: 60, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' });
      gsap.from('.cta-btn', { scale: 0.7, opacity: 0, duration: 0.7, delay: 0.7, ease: 'back.out(1.7)' });
      gsap.from('.floating-shape', { scale: 0.6, opacity: 0, duration: 1, delay: 0.5, stagger: 0.2, ease: 'power2.out' });
      gsap.from('.animated-value', { y: 40, opacity: 0, scale: 0.92, duration: 0.8, stagger: 0.18, delay: 1, ease: 'power2.out' });
    } else {
      document.querySelectorAll('.about-title, .about-desc, .cta-btn, .floating-shape, .animated-value').forEach(function(el) {
        el.style.opacity = 1;
        el.style.transform = 'none';
      });
    }
    // Parallax arka plan hareketi
    const parallax = document.querySelector('.about-hero .parallax-bg');
    if (parallax) {
      window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        parallax.style.transform = `translateY(${scrolled * 0.18}px)`;
      });
    }
  }
}); 