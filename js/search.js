// Search functionality for design_mode
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-button');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    const closeSearch = document.querySelector('.close-search');
    
    // Mock product data for design_mode
    const products = [
        {
            id: 1,
            name: 'Linen Blend Shirt',
            price: 89.99,
            category: 'Shirts',
            image: 'assets/images/products/linen-blend-shirt.jpg'
        },
        {
            id: 2,
            name: 'Relaxed Chinos',
            price: 75.00,
            category: 'Pants',
            image: 'assets/images/products/relaxed-chinos.jpg'
        },
        {
            id: 3,
            name: 'Summer Jacket',
            price: 120.00,
            category: 'Outerwear',
            image: 'assets/images/products/summer-jacket.jpg'
        },
        {
            id: 4,
            name: 'Classic T-Shirt',
            price: 35.00,
            category: 'Shirts',
            image: 'assets/images/products/classic-tshirt.jpg'
        },
        {
            id: 5,
            name: 'Slim Fit Jeans',
            price: 85.00,
            category: 'Pants',
            image: 'assets/images/products/slim-fit-jeans.jpg'
        }
    ];
    
    if (searchButton && searchOverlay) {
        // Open search overlay
        searchButton.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            searchInput.focus();
            document.body.style.overflow = 'hidden';
        });
        
        // Close search overlay
        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
            searchInput.value = '';
            searchResults.innerHTML = '';
        });
        
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
                closeSearch.click();
            }
        });
        
        // Handle search input
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            const query = e.target.value.trim().toLowerCase();
            
            if (query.length < 2) {
                searchResults.innerHTML = '';
                return;
            }
            
            // Debounce search to prevent too many updates
            searchTimeout = setTimeout(() => {
                const results = products.filter(product => 
                    product.name.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query)
                );
                
                displaySearchResults(results);
            }, 300);
        });
    }
    
    function displaySearchResults(results) {
        if (!searchResults) return;
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <p>No products found</p>
                </div>
            `;
            return;
        }
        
        const resultsHTML = results.map(product => `
            <a href="/pages/product-detail.html?id=${product.id}" class="search-result-item">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='assets/images/placeholder.jpg'">
                <div class="search-result-info">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <p class="category">${product.category}</p>
                </div>
            </a>
        `).join('');
        
        searchResults.innerHTML = resultsHTML;
    }
}); 