 // Drinks data
        const drinks = [
            {
                id: 1,
                name: 'Premium Sahlab',
                nameAr: 'سحلب فاخر',
                price: 45,
                originalPrice: 60,
                category: 'traditional',
                rating: 4.8,
                description: 'Creamy traditional sahlab with nuts and cinnamon',
                isHot: true,
                isBestseller: true
            },
            {
                id: 2,
                name: 'Hot Chocolate Deluxe',
                nameAr: 'هوت شوكولاتة ديلوكس',
                price: 35,
                originalPrice: 45,
                category: 'chocolate',
                rating: 4.9,
                description: 'Rich Belgian chocolate with whipped cream',
                isHot: true,
                isBestseller: false
            },
            {
                id: 3,
                name: 'Cocoa Powder Mix',
                nameAr: 'بودرة كاكاو مخلوطة',
                price: 25,
                originalPrice: 35,
                category: 'chocolate',
                rating: 4.6,
                description: 'Pure cocoa powder blend for homemade hot chocolate',
                isHot: true,
                isBestseller: false
            },
            {
                id: 4,
                name: 'Turmeric Latte',
                nameAr: 'لاتيه الكركم',
                price: 30,
                originalPrice: 40,
                category: 'wellness',
                rating: 4.5,
                description: 'Golden turmeric latte with warming spices',
                isHot: true,
                isBestseller: false
            },
            {
                id: 5,
                name: 'Caramel Coffee',
                nameAr: 'قهوة الكراميل',
                price: 40,
                originalPrice: 50,
                category: 'coffee',
                rating: 4.7,
                description: 'Smooth coffee with rich caramel flavor',
                isHot: true,
                isBestseller: true
            },
            {
                id: 6,
                name: 'Vanilla Chai',
                nameAr: 'شاي الفانيليا',
                price: 28,
                originalPrice: 38,
                category: 'tea',
                rating: 4.4,
                description: 'Aromatic chai blend with vanilla notes',
                isHot: true,
                isBestseller: false
            },
            {
                id: 7,
                name: 'Ginger Tea',
                nameAr: 'شاي الزنجبيل',
                price: 22,
                originalPrice: 30,
                category: 'wellness',
                rating: 4.3,
                description: 'Warming ginger tea with honey',
                isHot: true,
                isBestseller: false
            },
            {
                id: 8,
                name: 'Cardamom Coffee',
                nameAr: 'قهوة الهيل',
                price: 35,
                originalPrice: 45,
                category: 'coffee',
                rating: 4.8,
                description: 'Traditional Arabic coffee with cardamom',
                isHot: true,
                isBestseller: true
            }
        ];

        // State
        let favorites = new Set();
        let currentCategory = 'all';

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            renderDrinks();
            setupEventListeners();
        });

        // Render drinks
        function renderDrinks() {
            const grid = document.getElementById('drinksGrid');
            const filteredDrinks = currentCategory === 'all' 
                ? drinks 
                : drinks.filter(drink => drink.category === currentCategory);

            grid.innerHTML = filteredDrinks.map((drink, index) => {
                const bestseller = drink.isBestseller ? '<span class="badge">Bestseller</span>' : '';
                const hotBadge = drink.isHot ? '<span class="badge hot">🔥 Hot</span>' : '';
                const favoriteClass = favorites.has(drink.id) ? 'active' : '';
                const favoriteIcon = favorites.has(drink.id) ? '❤️' : '🤍';
                const originalPriceSpan = drink.originalPrice > drink.price ? 
                    `<span class="original-price">${drink.originalPrice} SAR</span>` : '';
                const saveBadge = drink.originalPrice > drink.price ? 
                    `<span class="save-badge">Save ${drink.originalPrice - drink.price} SAR</span>` : '';
                
                return `
                <div class="drink-card" style="animation-delay: ${index * 0.1}s">
                    <div class="card-image">
                        ${bestseller}
                        ${hotBadge}
                        <button class="favorite-btn ${favoriteClass}" onclick="toggleFavorite(${drink.id})">
                            ${favoriteIcon}
                        </button>
                    </div>
                    <div class="card-content">
                        <h3 class="drink-name">${drink.name}</h3>
                        <p class="drink-name-ar">${drink.nameAr}</p>
                        <div class="rating">
                            <span class="star">⭐</span>
                            <span class="rating-value">${drink.rating}</span>
                        </div>
                        <p class="description">${drink.description}</p>
                        <div class="price-container">
                            <div class="price-info">
                                <span class="current-price">${drink.price} SAR</span>
                                ${originalPriceSpan}
                            </div>
                            ${saveBadge}
                        </div>
                        <div class="action-buttons">
                            <button class="btn btn-primary" onclick="viewDetails(${drink.id})">View Details</button>
                            <button class="btn btn-secondary" onclick="showInfo(${drink.id})">Info</button>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
        }

        // Setup event listeners
        function setupEventListeners() {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Update active button
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update category and re-render
                    currentCategory = this.dataset.category;
                    renderDrinks();
                });
            });
        }

        // Toggle favorite
        function toggleFavorite(drinkId) {
            if (favorites.has(drinkId)) {
                favorites.delete(drinkId);
            } else {
                favorites.add(drinkId);
            }
            renderDrinks();
        }

        // View details function
        function viewDetails(drinkId) {
            const drink = drinks.find(d => d.id === drinkId);
            alert(`Viewing details for: ${drink.name}\n\nDescription: ${drink.description}\nPrice: ${drink.price} SAR\nRating: ${drink.rating}/5`);
        }

        // Show info function
        function showInfo(drinkId) {
            const drink = drinks.find(d => d.id === drinkId);
            alert(`${drink.name} Information:\n\nCategory: ${drink.category}\nIs Hot: ${drink.isHot ? 'Yes' : 'No'}\nBestseller: ${drink.isBestseller ? 'Yes' : 'No'}\nOriginal Price: ${drink.originalPrice} SAR`);
        }