document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const logoLink = document.querySelector('.logo a');

    const activatePage = (pageId) => {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active');
                page.style.display = 'block';
            } else {
                page.classList.remove('active');
                page.style.display = 'none';
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            activatePage(pageId);
            history.pushState(null, '', `#${pageId}`);
        });
    });

    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        activatePage('home');
        history.pushState(null, '', '#home');
    });

    const initialPageId = window.location.hash.substring(1) || 'home';
    activatePage(initialPageId);
});