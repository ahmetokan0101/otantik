const campaigns = [
  {
    id: 1,
    title: 'Yaz İndirimi',
    desc: 'Tüm tişörtlerde %30 indirim! Kaçırmayın.',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    badge: '%30',
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2) // 2 gün sonra
  },
  {
    id: 2,
    title: 'Elbise Festivali',
    desc: 'Elbiselerde 2 al 1 öde fırsatı!',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    badge: '2=1',
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 12) // 12 saat sonra
  },
  {
    id: 3,
    title: 'Ceket Günleri',
    desc: 'Ceketlerde %20 ekstra indirim!',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    badge: '%20',
    endsAt: new Date(Date.now() + 1000 * 60 * 60 * 48) // 48 saat sonra
  }
];

const campaignsGrid = document.getElementById('campaignsGrid');

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function renderCampaigns() {
  campaignsGrid.innerHTML = '';
  campaigns.forEach((c, idx) => {
    const card = document.createElement('div');
    card.className = 'campaign-card';
    card.innerHTML = `
      <span class="campaign-badge">${c.badge}</span>
      <img src="${c.img}" alt="${c.title}" class="campaign-img" />
      <div class="campaign-title">${c.title}</div>
      <div class="campaign-desc">${c.desc}</div>
      <div class="campaign-timer" id="timer${c.id}"></div>
    `;
    campaignsGrid.appendChild(card);
    updateTimer(c.id, c.endsAt);
  });
}

function updateTimer(id, endsAt) {
  const timerEl = document.getElementById('timer' + id);
  function tick() {
    const now = new Date();
    const diff = endsAt - now;
    if (diff > 0) {
      timerEl.textContent = 'Bitiş: ' + formatTime(diff);
      setTimeout(tick, 1000);
    } else {
      timerEl.textContent = 'Kampanya sona erdi!';
    }
  }
  tick();
}

renderCampaigns(); 