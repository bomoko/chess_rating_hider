// Wrapping and immediately firing so we don't pollute global space
(function() {   
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = browser.runtime.getURL('styles.css');
    document.head.appendChild(link);
})();