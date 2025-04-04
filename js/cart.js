// Cart functionality for design_mode
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.total = this.calculateTotal();
        this.updateCartCount();
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.updateCartCount();
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(0, quantity);
            if (item.quantity === 0) {
                this.removeItem(productId);
            }
        }
        this.saveCart();
        this.updateCartCount();
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.total = this.calculateTotal();
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartCount();
    }
}

// Initialize cart
const cart = new Cart();

// Add to cart functionality
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const product = {
                id: button.dataset.productId,
                name: button.dataset.productName,
                price: parseFloat(button.dataset.productPrice),
                image: button.dataset.productImage
            };
            
            cart.addItem(product);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'cart-success-message';
            successMessage.textContent = 'Added to cart!';
            
            button.appendChild(successMessage);
            
            setTimeout(() => {
                successMessage.remove();
            }, 2000);
        });
    });
    
    // Cart icon click handler
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            // In design_mode, we'll just show a message instead of redirecting
            alert('Cart functionality is simulated in design_mode. In a real implementation, this would navigate to the cart page.');
        });
    }
}); 