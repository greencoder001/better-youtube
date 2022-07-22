const BYT = {
    removeYTNotificationCounter: () => {
        // Remove Notification Counter
        document.querySelectorAll('.yt-spec-icon-badge-shape__badge').forEach(_ => _.remove())
        document.title = document.title.startsWith('(') ? document.title.replace(/\(([0-9]*?)\)\s/, '') : document.title
    }
}

// Print Extension Loaded Message in console
console.log("%cBetter Youtube - Loaded", "background: #ff0000; color: #fff; border: 1px solid #000; padding: 1%; font-size: 1.5em; border-radius: 5px;")

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

setInterval(BYT.removeYTNotificationCounter, 1000)