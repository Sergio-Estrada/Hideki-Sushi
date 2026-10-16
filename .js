document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const navUl = document.querySelector('nav ul');
    
    // 1. Efecto de cambio de opacidad/fondo en el header al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
            header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = '#1a1a1a';
            header.style.boxShadow = 'none';
        }
    });

    // 2. Desplazamiento suave para los enlaces del menú
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // Permitir abrir enlaces externos o de WhatsApp con normalidad
            if(!this.getAttribute('href').startsWith('#')) return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
