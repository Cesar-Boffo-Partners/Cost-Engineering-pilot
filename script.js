// Botão Back to Top
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Indicadores animados
document.querySelectorAll('.indicator').forEach(ind => {
  let target = +ind.dataset.target;
  let count = 0;
  let step = target / 100;
  let interval = setInterval(() => {
    count += step;
    if(count >= target) {
      count = target;
      clearInterval(interval);
    }
    ind.textContent = Math.floor(count);
  }, 20);
});

// Gráfico exemplo
new Chart(document.getElementById('costChart'), {
  type: 'pie',
  data: {
    labels: ['Materials', 'Labor', 'Overhead', 'Logistics', 'Margin'],
    datasets: [{
      data: [40, 25, 15, 10, 10],
      backgroundColor: ['#0a1f44','#c49b0b','#3399ff','#66b2ff','#99ccff']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
    plugins: {