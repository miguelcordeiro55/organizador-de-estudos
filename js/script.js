document.addEventListener('DOMContentLoaded', () => {

    // Seleção de elementos do DOM
    const body = document.body;
    const navMenu = document.getElementById('nav-menu');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const headerActions = document.querySelector('.header-actions');
    const navLinks = navMenu.querySelectorAll('a');

    // Criação do botão de alternância de tema (Modo Escuro/Claro)
    const themeToggleButton = document.createElement('button');
    themeToggleButton.textContent = 'Modo Escuro';
    themeToggleButton.classList.add('cta-button', 'theme-toggle-button');
    
    // Inserir o botão no header, antes do botão do menu mobile
    headerActions.prepend(themeToggleButton);

    // --- Lógica para o Tema (Modo Escuro) ---
    themeToggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Altera o texto do botão com base na classe 'dark-mode'
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark'); // Salva a preferência
        } else {
            themeToggleButton.textContent = 'Modo Escuro';
            localStorage.setItem('theme', 'light'); // Salva a preferência
        }
    });

    // --- Manter o tema selecionado ao recarregar a página ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleButton.textContent = 'Modo Claro';
    } else {
        body.classList.remove('dark-mode');
        themeToggleButton.textContent = 'Modo Escuro';
    }

    // --- Lógica para o Menu Mobile ---
    // Alterna a classe 'active' no menu de navegação ao clicar no botão
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Adiciona um ícone de 'X' ou '☰' dependendo do estado do menu
        const icon = mobileMenuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu mobile quando um link é clicado para navegação
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});