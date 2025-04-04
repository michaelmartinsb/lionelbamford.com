// Newsletter functionality
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const emailInput = newsletterForm.querySelector('.newsletter-input');
            const email = emailInput.value.trim();
            
            if (!email) {
                showMessage('Please enter your email address', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }
            
            try {
                // Here you would typically make an API call to your backend
                // For now, we'll simulate a successful subscription
                await subscribeToNewsletter(email);
                
                showMessage('Thank you for subscribing!', 'success');
                emailInput.value = '';
                
                // Disable the form after successful subscription
                newsletterForm.reset();
                newsletterForm.classList.add('subscribed');
                
            } catch (error) {
                showMessage('Something went wrong. Please try again later.', 'error');
                console.error('Newsletter subscription error:', error);
            }
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.newsletter-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageElement = document.createElement('div');
        messageElement.className = `newsletter-message ${type}`;
        messageElement.textContent = message;
        
        // Add message to the form
        const form = document.querySelector('.newsletter-form');
        form.appendChild(messageElement);
        
        // Remove message after 3 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 3000);
    }
    
    async function subscribeToNewsletter(email) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                // Store email in localStorage for demo purposes
                const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
                subscribers.push({
                    email,
                    subscribedAt: new Date().toISOString()
                });
                localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
                
                resolve();
            }, 1000);
        });
    }
}); 