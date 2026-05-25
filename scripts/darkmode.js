document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Function to toggle dark mode
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        // Store the state in localStorage
        localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
    }

    // Check if dark mode is enabled in localStorage
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
    }

    // Add event listener to the toggle button
    darkModeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        toggleDarkMode();
    });
});
