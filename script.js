// SCROLL  
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


document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
});

//WALLET 
function copyWallet() {
    const addressInput = document.getElementById("walletAddress");
    const btn = document.getElementById("walletBtn");
    
   
    navigator.clipboard.writeText(addressInput.value).then(() => {
       
        const originalHTML = btn.innerHTML;
        
       
        btn.innerHTML = `<span class="icon">✅</span> Copied!`;
        btn.classList.add("copied"); 
        
       
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove("copied");
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy wallet address: ', err);
    });
}