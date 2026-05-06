/* category.js */
document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", event => {
        const category = event.target.getAttribute("data-category");
        localStorage.setItem("category", category);
        window.location.href = "quiz.html"; // Redirect to the quiz page
    });
});
