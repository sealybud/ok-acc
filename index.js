
let username = localStorage.getItem("rememberedUsername");

if (!username) {
    username = window.prompt("whats ur name")
    if (username) { // Only save if the user actually entered a name
        localStorage.setItem("rememberedUsername", username); // Store the username in localStorage
    }
}

document.getElementById("heading").textContent = `${greetingText}, ${username}`

// DATE SCRIPT //

    const today = new Date();
  
    // Format: "Month Day, Year"
    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    document.getElementById('date').textContent = `Today is: ${formattedDate}`;




    const clearButton = document.getElementById("clearNameButton");

clearButton.addEventListener("click", function() {
    // 1. Remove the item from localStorage
    localStorage.removeItem("rememberedUsername");

    // 2. Clear the username variable in memory
    username = null; // Or undefined, to signify it's no longer set

    // 3. Update the UI to reflect the change
    headingElement.textContent = `${greetingText}, Guest`;
});
