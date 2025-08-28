document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Dynamic activity ticker
  const ticker = document.getElementById('ticker');
  const events = [
    'Nova Oferta Ativa · 2m atrás',
    'Cloacker Quebrado · 5m atrás',
    'Info Escalada · 8m atrás',
    'Faturamento BR ↑ R$1.240 · 10m',
    'Aprovações Hoje · +32 · 12m',
  ];

  function rebuildTicker() {
    if (!ticker) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'ticker-scroll';
    wrapper.setAttribute('aria-live', 'polite');
    wrapper.textContent = ` ${events.join('   •   ')}   •   `;
    ticker.innerHTML = '';
    ticker.appendChild(wrapper);
  }

  rebuildTicker();
  setInterval(() => {
    // Rotate events to simulate updates
    const first = events.shift();
    if (first) events.push(first);
    rebuildTicker();
  }, 8000);
});
