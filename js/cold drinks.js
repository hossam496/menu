  // Cold drinks data
        const drinks = [
            {
                id: 1,
                name: 'Fresh Orange Juice',
                nameAr: 'عصير برتقال طازج',
                price: 25,
                originalPrice: 35,
                category: 'juice',
                rating: 4.9,
                description: 'Freshly squeezed orange juice packed with vitamin C',
                isCold: true,
                isBestseller: true,
                isRefreshing: true
            },
            {
                id: 2,
                name: 'Mango Smoothie',
                nameAr: 'سموذي المانجو',
                price: 35,
                originalPrice: 45,
                category: 'smoothie',
                rating: 4.8,
                description: 'Creamy mango smoothie with fresh fruit chunks',
                isCold: true,
                isBestseller: true,
                isRefreshing: true
            },
            {
                id: 3,
                name: 'Iced Americano',
                nameAr: 'أمريكانو مثلج',
                price: 20,
                originalPrice: 28,
                category: 'coffee',
                rating: 4.7,
                description: 'Bold espresso served over ice for coffee lovers',
                isCold: true,
                isBestseller: false,
                isRefreshing: false
            },
            {
                id: 4,
                name: 'Watermelon Juice',
                nameAr: 'عصير البطيخ',
                price: 22,
                originalPrice: 30,
                category: 'juice',
                rating: 4.6,
                description: 'Sweet and refreshing watermelon juice',
                isCold: true,
                isBestseller: false,
                isRefreshing: true,
                isSeasonal: true
            },
            {
                id: 5,
                name: 'Berry Blast Smoothie',
                nameAr: 'سموذي التوت المشكل',
                price: 40,
                originalPrice: 50,
                category: 'smoothie',
                rating: 4.8,
                description: 'Mixed berries smoothie with yogurt and honey',
                isCold: true,
                isBestseller: true,
                isRefreshing: true
            },
            {
                id: 6,
                name: 'Classic Cola',
                nameAr: 'كولا كلاسيك',
                price: 15,
                originalPrice: 20,
                category: 'soda',
                rating: 4.3,
                description: 'Classic cola with the perfect fizz',
                isCold: true,
                isBestseller: false,
                isRefreshing: true
            },
            {
                id: 7,
                name: 'Iced Green Tea',
                nameAr: 'شاي أخضر مثلج',
                price: 18,
                originalPrice: 25,
                category: 'tea',
                rating: 4.5,
                description: 'Refreshing green tea served over ice with mint',
                isCold: true,
                isBestseller: false,
                isRefreshing: true
            },
            {
                id: 8,
                name: 'Tropical Paradise',
                nameAr: 'الجنة الاستوائية',
                price: 45,
                originalPrice: 55,
                category: 'specialty',
                rating: 4.9,
                description: 'Exotic blend of tropical fruits with coconut water',
                isCold: true,
                isBestseller: true,
                isRefreshing: true,
                isSeasonal: true
            },
            {
                id: 9,
                name: 'Iced Caramel Latte',
                nameAr: 'لاتيه كراميل مثلج',
                price: 32,
                originalPrice: 40,
                category: 'coffee',
                rating: 4.7,
                description: 'Smooth espresso with caramel and cold milk',
                isCold: true,
                isBestseller: false,
                isRefreshing: false
            },
            {
                id: 10,
                name: 'Pomegranate Juice',
                nameAr: 'عصير الرمان',
                price: 28,
                originalPrice: 38,
                category: 'juice',
                rating: 4.6,
                description: 'Antioxidant-rich pomegranate juice',
                isCold: true,
                isBestseller: false,
                isRefreshing: true
            },
            {
                id: 11,
                name: 'Lemon Mint Cooler',
                nameAr: 'مبرد الليمون والنعناع',
                price: 24,
                originalPrice: 32,
                category: 'specialty',
                rating: 4.8,
                description: 'Refreshing lemon and mint drink with sparkling water',
                isCold: true,
                isBestseller: false,
                isRefreshing: true
            },
            {
                id: 12,
                name: 'Chocolate Frappe',
                nameAr: 'فرابيه الشوكولاتة',
                price: 38,
                originalPrice: 48,
                category: 'coffee',
                rating: 4.7,
                description: 'Rich chocolate blended with ice and whipped cream',
                isCold: true,
                isBestseller: true,
                isRefreshing: false
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
                const refreshingBadge = drink.isRefreshing ? '<span class="badge refreshing">🌊 Refreshing</span>' : '';
                const seasonalBadge = drink.isSeasonal ? '<span class="badge seasonal">🌟 Seasonal</span>' : '';
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
                        ${refreshingBadge}
                        ${seasonalBadge}
                        <button class="favorite-btn ${favoriteClass}" onclick="toggleFavorite(${drink.id})">
                            ${favoriteIcon}
                        </button>
                        <div class="temp-indicator">
                            ❄️ Cold
                        </div>
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
    
    Swal.fire({
        title: `<span style="color: #2c3e50; font-weight: bold;">${drink.name}</span>`,
        html: `
            <div style="text-align: right; font-family: 'Tahoma', sans-serif; color: #7f8c8d;">
                <p style="font-size: 1.2em; color: #e74c3c; margin-bottom: 5px;">${drink.nameAr}</p>
            </div>
            <div style="text-align: left; margin-top: 20px;">
                <p style="font-size: 1.1em; color: #34495e;"><strong>🔹 الوصف:</strong> ${drink.description}</p>
                <p style="font-size: 1.1em; color: #34495e;">
                    <strong>🔹 السعر:</strong> 
                    <span style="color: #27ae60; font-weight: bold;">${drink.price} ر.س</span>
                    ${drink.originalPrice > drink.price ? 
                        `<span style="text-decoration: line-through; color: #95a5a6; margin-right: 10px;">${drink.originalPrice} ر.س</span>` : ''}
                </p>
                <p style="font-size: 1.1em; color: #34495e;">
                    <strong>🔹 التقييم:</strong> 
                    <span style="color: #f39c12;">${'⭐'.repeat(Math.floor(drink.rating))} (${drink.rating}/5)</span>
                </p>
                <p style="font-size: 1.1em; color: #34495e;"><strong>🔹 الفئة:</strong> ${drink.category}</p>
                ${drink.isBestseller ? '<p style="color: #e67e22; font-weight: bold;">🏆 الأكثر مبيعاً</p>' : ''}
                ${drink.isSeasonal ? '<p style="color: #9b59b6; font-weight: bold;">🌟 مشروب موسمي</p>' : ''}
            </div>
        `,
        imageUrl: getDrinkImage(drink.id),
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: drink.name,
        background: '#f8f9fa',
        showCloseButton: true,
        confirmButtonText: 'إغلاق',
        confirmButtonColor: '#3498db',
        customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-custom-title',
            htmlContainer: 'swal-custom-html'
        }
    });
}

// Show info function - Updated with SweetAlert2
function showInfo(drinkId) {
    const drink = drinks.find(d => d.id === drinkId);
    
    Swal.fire({
        title: `<span style="color: #2c3e50;">معلومات ${drink.name}</span>`,
        html: `
            <div style="text-align: right; direction: rtl; font-family: 'Tahoma', sans-serif;">
                <p style="color: #34495e; font-size: 1.1em;"><strong>🔸 الفئة:</strong> ${drink.category}</p>
                <p style="color: #34495e; font-size: 1.1em;"><strong>🔸 بارد:</strong> ${drink.isCold ? 'نعم ❄️' : 'لا'}</p>
                <p style="color: #34495e; font-size: 1.1em;"><strong>🔸 الأكثر مبيعاً:</strong> ${drink.isBestseller ? 'نعم 🏆' : 'لا'}</p>
                <p style="color: #34495e; font-size: 1.1em;"><strong>🔸 منعش:</strong> ${drink.isRefreshing ? 'نعم 🌊' : 'لا'}</p>
                ${drink.isSeasonal ? '<p style="color: #34495e; font-size: 1.1em;"><strong>🔸 موسمي:</strong> نعم 🌟</p>' : ''}
                <p style="color: #34495e; font-size: 1.1em;"><strong>🔸 السعر الأصلي:</strong> ${drink.originalPrice} ر.س</p>
            </div>
        `,
        icon: 'info',
        background: '#f8f9fa',
        confirmButtonText: 'حسناً',
        confirmButtonColor: '#3498db',
        customClass: {
            popup: 'swal-custom-popup',
            title: 'swal-custom-title',
            htmlContainer: 'swal-custom-html'
        }
    });
}

// Helper function to get drink image (you can replace with your actual images)
function getDrinkImage(drinkId) {
    const drinkImages = {
        1: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Orange+Juice',
        2: 'https://via.placeholder.com/150/FFD700/FFFFFF?text=Mango+Smoothie',
        3: 'https://via.placeholder.com/150/8B4513/FFFFFF?text=Iced+Americano',
        4: 'https://via.placeholder.com/150/FF1493/FFFFFF?text=Watermelon',
        5: 'https://via.placeholder.com/150/9400D3/FFFFFF?text=Berry+Smoothie',
        6: 'https://via.placeholder.com/150/000000/FFFFFF?text=Cola',
        7: 'https://via.placeholder.com/150/008000/FFFFFF?text=Green+Tea',
        8: 'https://via.placeholder.com/150/FF8C00/FFFFFF?text=Tropical',
        9: 'https://via.placeholder.com/150/A0522D/FFFFFF?text=Caramel+Latte',
        10: 'https://via.placeholder.com/150/B22222/FFFFFF?text=Pomegranate',
        11: 'https://via.placeholder.com/150/7CFC00/FFFFFF?text=Lemon+Mint',
        12: 'https://via.placeholder.com/150/4B0082/FFFFFF?text=Chocolate'
    };
    return drinkImages[drinkId] || 'https://via.placeholder.com/150/3498db/FFFFFF?text=Drink';
}
