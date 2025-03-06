document.getElementById('searchButton').addEventListener('click', function() {
    const input = document.getElementById('searchInput').value;
    if (input.trim() === '') return; // Do nothing if the input is empty

    const isURL = /^https?:\/\//i.test(input);
    const url = isURL ? input : `https://www.bing.com/search?q=${encodeURIComponent(input)}`;
    window.open(url, '_blank');
});

document.getElementById('proxyButton').addEventListener('click', function() {
    window.open('https://example-proxy.com', '_blank'); // Replace with an actual proxy service URL
});
