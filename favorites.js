let favorites = [
  { id: 1, title: 'Otantik Tişört', price: 199, img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { id: 2, title: 'Modern Elbise', price: 349, img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80' },
];

const favoritesGrid = document.getElementById('favoritesGrid');

function renderFavorites() {
  favoritesGrid.innerHTML = '';
  favorites.forEach((product, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.img}" alt="${product.title}" class="product-img" />
      <div class="product-title">${product.title}</div>
      <div class="product-price">₺${product.price}</div>
      <div style="display:flex;gap:0.5rem;">
        <button class="product-btn">Sepete Ekle</button>
        <button class="favorite-btn" data-idx="${idx}" title="Favoriden Çıkar"><i class="fa fa-heart-broken"></i></button>
      </div>
    `;
    favoritesGrid.appendChild(card);
  });
}

favoritesGrid.addEventListener('click', (e) => {
  if (e.target.closest('.favorite-btn')) {
    const idx = Number(e.target.closest('.favorite-btn').dataset.idx);
    favorites.splice(idx, 1);
    renderFavorites();
  }
  // Sepete ekle butonu için burada ek fonksiyon yazılabilir
});

renderFavorites(); 