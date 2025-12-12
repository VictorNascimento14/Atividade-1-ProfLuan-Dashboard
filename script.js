/**
 * Função para alternar entre tema claro e escuro
 */
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    
    const btn = document.querySelector('.toggle-theme');
    
    if (document.body.classList.contains('light-mode')) {
        btn.textContent = '🌙 Modo Escuro';
    } else {
        btn.textContent = '☀️ Modo Claro';
    }
}

/**
 * Anima as barras de progresso ao carregar a página
 */
window.addEventListener('load', () => {
    const fills = document.querySelectorAll('.progress-fill');
    
    fills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        
        setTimeout(() => {
            fill.style.width = width;
        }, 100);
    });
});

