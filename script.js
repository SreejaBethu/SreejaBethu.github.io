// --- script.js (Complete & Corrected Code) ---

// Theme Toggling Function
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        icon.className = 'fas fa-sun';
    } else {
        localStorage.setItem('theme', 'light');
        icon.className = 'fas fa-moon';
    }
}

// This listener runs when the entire HTML document has been loaded
document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Set up the Theme Toggle ---
    const themeToggleButton = document.querySelector('.toggle-btn');
    if(themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    // --- 2. Check for a saved theme in localStorage ---
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            themeIcon.className = 'fas fa-sun';
        }
    }

    // --- 3. Set up the Intersection Observer for Scroll Animations ---
    const animatedElements = document.querySelectorAll('.section-container, .project-card, .highlight-section li');
    
    // Check if we found any elements to animate
    if (animatedElements.length > 0) {
        
        // **NEW STEP**: Initially hide the elements using our new CSS class
        animatedElements.forEach(el => {
            el.classList.add('js-init-hidden');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        // Tell the observer to watch each animated element
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }
});
