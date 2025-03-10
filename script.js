document.getElementById('search-button').addEventListener('click', function() {
    const input = document.getElementById('search-input').value;
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

    if (urlPattern.test(input)) {
        window.location.href = input;
    } else if (input.trim() !== "") {
        const searchQuery = encodeURIComponent(input);
        window.open(`https://www.bing.com/search?q=${searchQuery}`, '_blank');
    } else {
        document.getElementById('error-message').innerText = "Please enter a valid search or URL.";
    }
});
const buttonUrl = "My Websites.html"; // Change this URL to your desired link

function navigateToUrl() {
    window.location.href = buttonUrl;
}
