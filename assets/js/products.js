// Me file eke thiyenawa oyalage products wala details (Photos, Prices, etc.)
// 100k unath liyanna puluwan, pahalayaka thiyena pattern eka copy karala aluth ewa danna.

const productData = [
    { id: 1, name: "Lotus Love Yellow Halter", price: "2,500", desc: "Ribbed Cotton", img: "product1.jpg", tag: "Hot", bg: "#fce7f3" },
    { id: 2, name: "Unicorn Dream Black Top", price: "2,800", desc: "Lace Detail", img: "product2.jpg", tag: "New", bg: "#f3f4f6" },
    { id: 3, name: "Fairy Tale Red Top", price: "3,000", desc: "Mesh Detail", img: "product3.jpg", tag: "-15%", bg: "#fef08a" },
    { id: 4, name: "Vintage Floral Halter", price: "2,600", desc: "Cross-neck", img: "product4.jpg", tag: "", bg: "#d1d5db" },
    { id: 5, name: "Elegant White Blouse", price: "2,900", desc: "Silk Finish", img: "product5.jpg", tag: "Essential", bg: "#e5e7eb" },
    { id: 6, name: "Summer Crop Top", price: "1,800", desc: "Cotton", img: "product6.jpg", tag: "", bg: "#fecaca" },
    { id: 7, name: "Classic Polo Shirt", price: "3,200", desc: "Pique Cotton", img: "product7.jpg", tag: "Best", bg: "#bfdbfe" },
    { id: 8, name: "Denim Jacket", price: "5,500", desc: "Vintage Wash", img: "product8.jpg", tag: "Top", bg: "#93c5fd" },
    { id: 9, name: "Casual T-Shirt", price: "1,500", desc: "100% Cotton", img: "product9.jpg", tag: "Sale", bg: "#fbcfe8" },
    { id: 10, name: "Striped Maxi Dress", price: "4,200", desc: "Summer Collection", img: "product10.jpg", tag: "New", bg: "#fed7aa" },
    { id: 11, name: "Leather Handbag", price: "8,000", desc: "Genuine Leather", img: "product11.jpg", tag: "", bg: "#e7e5e4" },
    { id: 12, name: "Sunglasses", price: "2,000", desc: "UV Protection", img: "product12.jpg", tag: "Trending", bg: "#fef08a" }
    // Oya me widihata thawa products 100k unath pahalata line by line add karagena yanna.
    // { id: 13, name: "Oyalage Item Name", price: "Gana", desc: "Vistaraya", img: "Photo eke nama.jpg", tag: "New", bg: "#cccccc" }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // -- 1. HOME PAGE GRID (9 Products) --
    const homeGrid = document.getElementById('home-product-grid');
    if (homeGrid) {
        // Home page eke 9k pennanawa
        const homeProducts = productData.slice(0, 9);
        
        homeGrid.innerHTML = homeProducts.map(item => `
            <div class="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500">
                <img src="assets/images/${item.img}" alt="${item.name}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out fallback-bg" style="background-color: ${item.bg};">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60"></div>
                
                ${item.tag ? `<div class="absolute top-4 left-4 z-10"><span class="bg-brand-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">${item.tag}</span></div>` : ''}
                
                <div class="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start translate-y-2 group-hover:translate-y-0 transition-transform duration-500 z-10">
                    <h3 class="text-xl md:text-2xl font-playfair font-semibold text-white mb-1 drop-shadow-md">${item.name}</h3>
                    <p class="text-brand-light font-bold mb-3 drop-shadow-sm">Rs. ${item.price}</p>
                    <a href="products.html" class="text-white text-xs md:text-sm uppercase tracking-wider font-semibold border-b border-white/50 pb-1 group-hover:border-white transition-colors">Shop Now</a>
                </div>
            </div>
        `).join('');
    }

    // -- 2. SHOP PAGE GRID (All 100+ Products) --
    const shopGrid = document.getElementById('shop-product-grid');
    if (shopGrid) {
        // Shop page eke okkoma pennanawa
        shopGrid.innerHTML = productData.map(item => `
            <div class="group flex flex-col">
                <div class="relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4] mb-4 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                    <img src="assets/images/${item.img}" alt="${item.name}" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 fallback-bg" style="background-color: ${item.bg};">
                    
                    ${item.tag ? `<div class="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider z-10 shadow-sm">${item.tag}</div>` : ''}
                    
                    <!-- Add to cart overlay -->
                    <div class="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
                        <button class="w-full bg-white text-gray-900 font-semibold py-3 rounded-full hover:bg-brand-primary hover:text-white transition-colors duration-300 shadow-xl text-sm uppercase tracking-wider translate-y-4 group-hover:translate-y-0 transform">Add to Cart</button>
                    </div>
                </div>
                <div class="flex justify-between items-start mt-2 px-1">
                    <div>
                        <h3 class="text-base md:text-lg font-medium text-gray-900 group-hover:text-brand-primary transition-colors"><a href="#">${item.name}</a></h3>
                        <p class="text-xs md:text-sm text-gray-500 mt-1">${item.desc}</p>
                    </div>
                    <p class="text-base md:text-lg font-bold text-brand-primary">Rs. ${item.price}</p>
                </div>
            </div>
        `).join('');
        
        // Update items count
        const counts = document.querySelectorAll('.items-count');
        counts.forEach(c => c.textContent = productData.length);
    }
});
