let username = window.prompt("whats ur name")

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
  
    document.getElementById('date').textContent = formattedDate;
