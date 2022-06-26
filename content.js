// On DOM loaded
window.addEventListener('DOMContentLoaded', () => {
    // Remove Promo Banner
    document.querySelectorAll('div.ytd-banner-promo-renderer-background').forEach(div => {
        div.remove()
    })

    // Video Download
    if (document.querySelector('ytd-download-button-renderer')) {
        
    }

    // Watch Party
    
})