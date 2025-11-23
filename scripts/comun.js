document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

function salvarDados(chave, valor) {
    try {
        localStorage.setItem(chave, valor);
        return true;
    } catch (e) {
        console.error('Erro ao salvar no localStorage:', e);
        return false;
    }
}

function lerDados(chave) {
    try {
        return localStorage.getItem(chave);
    } catch (e) {
        console.error('Erro ao ler do localStorage:', e);
        return null;
    }
}

function limparDados() {
    try {
        localStorage.clear();
        return true;
    } catch (e) {
        console.error('Erro ao limpar localStorage:', e);
        return false;
    }
}

