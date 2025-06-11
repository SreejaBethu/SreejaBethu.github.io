<script>
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
        themeToggleButton.addEventListener('click', toggleTheme);

        // --- 2. Check for a saved theme in localStorage ---
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            document.getElementById('theme-icon').className = 'fas fa-sun';
        }

        // --- 3. Set up the Intersection Observer for Scroll Animations ---
        const animatedElements = document.querySelectorAll('.section-container, .project-card, .highlight-section li');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // If the element is visible in the viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in'); // Add our animation class
                    observer.unobserve(entry.target); // Stop observing it after animation
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Tell the observer to watch each animated element
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    });
  </script>
</body>
</html>
