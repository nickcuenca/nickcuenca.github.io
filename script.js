document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded!"); 
    // Logs a message in the browser console when the page is fully loaded.

    const navLinks = document.querySelectorAll("nav a"); 
    // Selects all the links (<a>) inside the <nav> tag.

    navLinks.forEach(link => {
        link.addEventListener("click", () => alert(`You clicked on ${link.textContent}`)); 
        // Adds a click event listener to each navigation link.
        // When a user clicks a link, an alert box appears with the text of the link.
    });
});
