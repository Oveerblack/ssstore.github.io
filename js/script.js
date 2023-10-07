document.addEventListener('DOMContentLoaded', function() {
// Arama çubuğu ve arama sonuçlarını alın
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
const gameCards = document.querySelectorAll('.home-cards > div');
   // Tüm bağlantıları alın
   const menuLinks = document.querySelectorAll('.main-menu a');
 
   // Her bir bağlantıya tıklama olayı ekleyin
   menuLinks.forEach(function (link) {
       link.addEventListener('click', function (event) {
           event.preventDefault(); // Bağlantının varsayılan davranışını engelleyin
   
           // Hedef bağlantının hedefini alın (örneğin, #recommended-books)
           const targetId = link.getAttribute('href');
   
           // Hedef bağlantının bulunduğu elementi alın
           const targetElement = document.querySelector(targetId);
   
           // Elementi görünür hale getirin (animasyonlu bir şekilde kaydırın)
           targetElement.scrollIntoView({ behavior: 'smooth' });
       });
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    gameCards.forEach((card) => {
        const gameTitle = card.querySelector('h3').textContent.toLowerCase();
        
        // Aranan terimi içeren oyun kartlarını göster veya gizle
        if (gameTitle.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
});
   })


// Arama çubuğunda arama simgesine tıklandığında tetiklenecek fonksiyon
searchIcon.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();

    gameCards.forEach((card) => {
        const gameTitle = card.querySelector('h3').textContent.toLowerCase();
        
        // Aranan terimi içeren oyun kartlarını göster veya gizle
        if (gameTitle.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
});