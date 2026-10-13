// CODIGO POR YUNG SAMY - MANUAL USMS MYSTICOS RP
// DISCORD: likeadversario

document.addEventListener('DOMContentLoaded', () => {

  // --- 1. NAVEGACIÓN POR PESTAÑAS (TABS) ---
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      navButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // --- 2. COPIAR ADVERTENCIA MIRANDA AL PORTAPAPELES ---
  const copyMirandaBtn = document.getElementById('copyMirandaBtn');
  const mirandaText = document.getElementById('mirandaText');

  if (copyMirandaBtn && mirandaText) {
    copyMirandaBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(mirandaText.innerText);
        const originalText = copyMirandaBtn.innerText;
        copyMirandaBtn.innerText = '¡COPIADO!';
        copyMirandaBtn.style.background = '#c5a059';
        copyMirandaBtn.style.color = '#000';

        setTimeout(() => {
          copyMirandaBtn.innerText = originalText;
          copyMirandaBtn.style.background = 'transparent';
          copyMirandaBtn.style.color = '#c5a059';
        }, 2000);
      } catch (err) {
        console.error('Error al copiar al portapapeles:', err);
      }
    });
  }

  // --- 3. BUSCADOR EN VIVO DE CÓDIGOS RADIALES 10 ---
  const codeSearch = document.getElementById('codeSearch');
  const codesTable = document.getElementById('codesTable');

  if (codeSearch && codesTable) {
    const rows = codesTable.querySelectorAll('tbody tr');

    codeSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();

      rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        if (text.includes(term)) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  }

});