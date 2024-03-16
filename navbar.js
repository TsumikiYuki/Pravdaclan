// Este script é apenas um exemplo básico para mostrar/esconder submenus na barra de navegação e rolar suavemente para a seção correspondente ao clicar em um item da barra de navegação

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.navbar-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });

        item.addEventListener('click', function(event) {
            // Impede o comportamento padrão de clicar em um link
            event.preventDefault();

            const targetId = this.querySelector('a').getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // Verifica se o elemento alvo existe
            if (targetElement) {
                // Obtém a posição do elemento alvo em relação ao topo da página
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                // Rola a página para o topo do elemento alvo com uma animação suave
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
