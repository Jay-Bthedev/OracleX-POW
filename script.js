const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));


        function copyWallet() {
    const address = document.getElementById("walletAddress").value;
    const btn = document.getElementById("walletBtn");
    
    navigator.clipboard.writeText(address).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = "✅ Address Copied!";
        btn.classList.add("copied");
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove("copied");
        }, 2000);
    });
}