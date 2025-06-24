document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle sidebar on hamburger click
    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close sidebar when a navigation link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992) { // Only close on mobile sizes
                sidebar.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Add active class to current section in sidebar nav
    const sections = document.querySelectorAll('section');
    const mainNavLi = document.querySelectorAll('.main-nav li a');

    function activateNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) { // Adjust offset as needed
                current = section.getAttribute('id');
            }
        });

        mainNavLi.forEach(a => {
            a.classList.remove('active');
            if (a.href.includes(current)) {
                a.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', activateNavLink);
    activateNavLink(); // Call on load to set initial active link
});
