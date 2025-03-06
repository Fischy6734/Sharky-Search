document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
    let url;

    if (/^[a-zA-Z]+$/.test(query)) {
        // If input contains only letters, redirect to Bing search
        url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
    } else {
        // Redirect to the specified URL
        url = query.startsWith('http') ? query : `http://${query}`;
    }
    
    window.location.href = url;
});
