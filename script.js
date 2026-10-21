document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Check form inputs validity using Bootstrap structure
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        alert('Thank you! Your message has been validated successfully.');
    }
    
    // Add Bootstrap's validation visual triggers
    this.classList.add('was-validated');
}, false);
