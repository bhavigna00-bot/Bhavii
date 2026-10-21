// Dynamic Portfolio Form Validation Logic
document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Intercept default actions if browser validation rules fail
    if (!this.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    } else {
        alert('Thank you, Bhavigna! Your message has been sent successfully.');
    }
    
    // Inject visible success/failure elements across the inputs
    this.classList.add('was-validated');
}, false);
