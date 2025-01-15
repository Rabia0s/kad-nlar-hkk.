// Story Share Form Submission
document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const storyText = event.target.querySelector('textarea').value;

    if (storyText.trim()) {
        alert("Hikayeniz başarıyla paylaşıldı!");
        event.target.reset();
    } else {
        alert("Lütfen hikayenizi yazın.");
    }
});
document.getElementById('downloadBtn').addEventListener('click', function() {
    // KADES uygulamasının indirme linkini buraya ekleyin
    window.open('https://play.google.com/store/apps/details?id=tr.gov.egm.kades', '_blank');
});

document.addEventListener('DOMContentLoaded', function() {
    // Kitap containerlarını seçiyoruz
    const bookContainers = document.querySelectorAll('.book-container');

    // Intersection Observer ayarları
    const options = {
        root: null, // viewport kullanarak sayfanın tamamı
        rootMargin: '0px', // hiç margin koymadık
        threshold: 0.5 // öğenin %50'si görünür olduğunda çalışır
    };

    // Callback fonksiyonu
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            // Eğer öğe görünür olduysa
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Görünür hale getir
                observer.unobserve(entry.target); // Bu öğeyi bir kez gözlemledikten sonra izlemeyi bırak
            }
        });
    };

    // Observer'ı oluşturuyoruz
    const observer = new IntersectionObserver(callback, options);

    // Her bir book-container için observer'ı başlatıyoruz
    bookContainers.forEach(container => {
        observer.observe(container);
    });
});
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slidesContainer = document.querySelector('.slides');

// Gösterilen slaytı güncelleyen fonksiyon
function updateSlidePosition() {
    const offset = -currentIndex * 100;  // Her slayt %100 genişlikte olduğu için, index ile çarpıyoruz
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Sonraki slayta geç
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;  // Eğer son slayta gelirsek, ilk slayta dön
    updateSlidePosition();
});

// Önceki slayta geç
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;  // Eğer ilk slayta gelirsek, son slayta dön
    updateSlidePosition();
});

// Sayfa yüklendiğinde ilk slaytı göster
updateSlidePosition();

