const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle class 'active' untuk menampilkan menu
});

// Menambahkan event listener untuk setiap tautan
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah perilaku default link
        const targetId = link.getAttribute('href'); // Mendapatkan ID tujuan
        const targetElement = document.querySelector(targetId); // Mendapatkan elemen tujuan
        
        // Scroll ke elemen tujuan dengan delay
        setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Delay dalam milidetik (300 ms = 0.3 detik)
    });
});

