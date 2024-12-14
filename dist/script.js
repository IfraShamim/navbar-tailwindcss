// Select the menu toggle and mobile menu elements
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Add event listener to toggle menu visibility and icon class
menuToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default action of anchor tag
    
    // Toggle the 'hidden' class to show/hide the mobile menu
    mobileMenu.classList.toggle('hidden'); 
    
    // Check and toggle the icon class between fa-bars and fa-times
    if (menuToggle.classList.contains('fa-bars')) {
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-times');
    } else {
        menuToggle.classList.remove('fa-times');
        menuToggle.classList.add('fa-bars');
    }
});
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    });
  }