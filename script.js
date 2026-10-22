document.addEventListener("DOMContentLoaded", () => {
// Automatically update the copyright year.
const year = document.getElementById("year");

```
if (year) {
    year.textContent = new Date().getFullYear();
}

// Prevent accidental clicks on article links that
// have not been configured yet.
document.querySelectorAll(".article-button").forEach((link) => {
    link.addEventListener("click", (event) => {
        if (link.getAttribute("href") === "#") {
            event.preventDefault();

            alert(
                "This article link has not been added yet. " +
                "Please update it with the published Medium article URL."
            );
        }
    });
});
```

});
