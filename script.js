// Navigation Active Link Handler
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul.links li a');
    
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop() || 'Dashboard.html';
    
    // Remove active class from all links first
    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
    });
    
    // Add active class to current page link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
    
    // Add click event listeners to all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.parentElement.classList.remove('active'));
            
            // Add active class to clicked link
            this.parentElement.classList.add('active');
        });
    });
});

// Optional: Add smooth transitions for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Add transition styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        nav ul.links li {
            transition: background-color 0.3s ease;
        }
        nav ul.links li.active {
            background-color: var(--blue-color) !important;
        }
        nav ul.links li.active a {
            color: white !important;
        }
        nav ul.links li.active i {
            color: white !important;
        }
    `;
    document.head.appendChild(style);
}); 