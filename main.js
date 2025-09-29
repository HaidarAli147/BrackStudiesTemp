document.addEventListener('DOMContentLoaded', function() {
    const switcher = document.querySelector('.language-switcher');
    const switcherButton = document.querySelector('.switcher-button');
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');

    // Toggle the 'active' class on button click
    switcherButton.addEventListener('click', function() {
        switcher.classList.toggle('active');
    });

    // Handle clicks outside the dropdown to close it
    document.addEventListener('click', function(event) {
        if (!switcher.contains(event.target)) {
            switcher.classList.remove('active');
        }
    });

    // Update the button text and navigate on link click
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Get the language code from the link's text
            const langCode = this.textContent;
            
            // Update the button text
            switcherButton.innerHTML = `${langCode} <span class="arrow-down">▼</span>`;
            
            // Close the dropdown
            switcher.classList.remove('active');
        });
    });
});
