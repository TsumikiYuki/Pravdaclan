document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.navbar-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.querySelector('a').getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
