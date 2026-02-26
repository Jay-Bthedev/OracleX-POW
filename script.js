// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Wallet Copy Logic
function copyWallet() {
    const address = document.getElementById("walletAddress").value;
    const btn = document.getElementById("walletBtn");
    
    navigator.clipboard.writeText(address).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = "✅ Address Copied!";
        btn.style.background = "#10b981";
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = "";
        }, 2000);
    });
}