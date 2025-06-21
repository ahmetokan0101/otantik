const products = [
  { id: 1, title: 'Otantik Tişört', price: 199, discount: 30, img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', category: 'tshirt' },
  { id: 2, title: 'Modern Elbise', price: 349, discount: 25, img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80', category: 'dress' },
  { id: 3, title: 'Şık Ceket', price: 499, discount: 20, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', category: 'jacket' },
  { id: 4, title: 'Klasik Gömlek', price: 259, discount: 15, img: 'https://images.unsplash.com/photo-1469398715555-76331a6c7fa0?auto=format&fit=crop&w=400&q=80', category: 'shirt' },
  { id: 5, title: 'Oversize Sweatshirt', price: 229, discount: 10, img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', category: 'sweatshirt' },
  { id: 6, title: 'Keten Pantolon', price: 299, discount: 18, img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'pants' },
  { id: 7, title: 'Tesettür Elbise', price: 399, discount: 22, img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', category: 'tesettur' },
  { id: 8, title: 'Cilt Serumu', price: 149, discount: 12, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', category: 'cosmetic' },
];

const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-chip');

function renderProducts(filter = 'all') {
  productsGrid.innerHTML = '';
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}" class="product-img" />
      <div class="product-title">${product.title}</div>
      <div class="product-price">₺${product.price} <span class="product-discount">%${product.discount}</span></div>
      <button class="product-btn">Sepete Ekle</button>
    `;
    productsGrid.appendChild(card);
    // GSAP animasyon
    gsap.from(card, { y: 40, opacity: 0, duration: 0.7, ease: 'power2.out' });
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// İlk yüklemede tüm ürünler
renderProducts(); 