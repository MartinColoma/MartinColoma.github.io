document.getElementById("MyEmail").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent the default action of the link
    var spanElement = document.getElementById("SpanEmail");
    if (spanElement.style.display === "none") {
        spanElement.style.display = "inline";  // Show the span
    } else {
        spanElement.style.display = "none";  // Hide the span
    }
});

// Navigation Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});