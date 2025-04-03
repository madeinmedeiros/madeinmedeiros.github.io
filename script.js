document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação e páginas
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const logo = document.querySelector('.logo a');
    
    // Função para mostrar a página correta
    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === pageId) {
                page.classList.add('active');
            }
        });
    }

    // Função para atualizar links ativos
    function updateActiveLink(pageId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
    }

    // Evento de clique na logo
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active de todas as páginas
        pages.forEach(page => {
            page.classList.remove('active');
        });
        // Adiciona active na página inicial
        document.getElementById('home').classList.add('active');
        
        // Remove negrito de todos os links
        navLinks.forEach(navLink => {
            navLink.style.fontWeight = '500';
        });
        // Adiciona negrito no link "Início"
        document.querySelector('[data-page="home"]').style.fontWeight = '700';
        
        // Rola para o topo da página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Evento de clique nos links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            
            // Remove a classe 'active' de todas as páginas
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Adiciona a classe 'active' à página selecionada
            document.getElementById(targetPage).classList.add('active');
            
            // Destaca o link ativo
            navLinks.forEach(navLink => {
                navLink.style.fontWeight = '500';
            });
            this.style.fontWeight = '700';
        });
    });
});