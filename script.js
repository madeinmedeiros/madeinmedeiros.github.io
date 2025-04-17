document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const logoLink = document.querySelector('.logo a'); // Seleciona o link da logo

    // Função para ativar a página correta
    const activatePage = (pageId) => {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active');
                page.style.display = 'block'; // Garante que a página ativa seja exibida
            } else {
                page.classList.remove('active');
                page.style.display = 'none'; // Garante que as outras páginas sejam escondidas
            }
        });
    };

    // Adiciona evento de clique nos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            activatePage(pageId);
            history.pushState(null, '', `#${pageId}`);
        });
    });

    // Adiciona evento de clique na logo para redirecionar à página inicial
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        activatePage('home'); // Ativa a página inicial
        history.pushState(null, '', '#home'); // Atualiza o hash na URL
    });

    // Ativa a página correta com base no hash da URL
    const initialPageId = window.location.hash.substring(1) || 'home';
    activatePage(initialPageId);
});