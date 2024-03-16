// Este script é apenas um exemplo básico para mostrar/esconder submenus na barra de navegação

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
    });
});
