let cart = [
  { id: 1, title: 'Otantik Tişört', price: 199, img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', qty: 2 },
  { id: 3, title: 'Şık Ceket', price: 499, img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', qty: 1 },
];

const cartList = document.getElementById('cartList').querySelector('tbody');
const cartTotal = document.getElementById('cartTotal');

function renderCart() {
  cartList.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price * item.qty;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${item.img}" alt="${item.title}" /> ${item.title}</td>
      <td>
        <div class="cart-qty">
          <button class="cart-qty-btn" data-idx="${idx}" data-type="dec">-</button>
          <span>${item.qty}</span>
          <button class="cart-qty-btn" data-idx="${idx}" data-type="inc">+</button>
        </div>
      </td>
      <td>₺${item.price * item.qty}</td>
      <td><button class="cart-remove" data-idx="${idx}"><i class="fa fa-trash"></i></button></td>
    `;
    cartList.appendChild(tr);
  });
  cartTotal.textContent = `Toplam: ₺${total}`;
}

cartList.addEventListener('click', (e) => {
  if (e.target.closest('.cart-qty-btn')) {
    const btn = e.target.closest('.cart-qty-btn');
    const idx = Number(btn.dataset.idx);
    if (btn.dataset.type === 'inc') cart[idx].qty++;
    if (btn.dataset.type === 'dec' && cart[idx].qty > 1) cart[idx].qty--;
    renderCart();
  }
  if (e.target.closest('.cart-remove')) {
    const idx = Number(e.target.closest('.cart-remove').dataset.idx);
    cart.splice(idx, 1);
    renderCart();
  }
});

renderCart(); 