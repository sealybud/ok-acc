// GREETING TEXT //
  const hour = new Date().getHours();
  let greetingText = '';

  if (hour < 4) {
    greetingText="добраніч"
  } else if (hour < 12) {
    greetingText="добрий ранок"
  } else if (hour < 18) {
    greetingText="добрий день"
  } else if (hour < 21) {
    greetingText="добрий вечір"
  }  else {
    greetingText="добраніч"
  }

  document.getElementById('greeting').textContent = greetingText;


// DATE SCRIPT //

    const today = new Date();

    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    document.getElementById('date').textContent = `Today is: ${formattedDate}`;

// CLOCK SCRIPT //
 function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  updateClock();

  setInterval(updateClock, 1000);

// REMEMBER USERNAME //
  let username = localStorage.getItem("rememberedUsername");

  if (!username) {
      username = window.prompt("whats ur name")
      if (username) { // Only save if the user actually entered a name
          localStorage.setItem("rememberedUsername", username); // Store the username in localStorage
      }
  }

  document.getElementById("greeting").textContent = `${greetingText}, ${username}`


// CLEAR NAME BUTTON SCRIPT //
  const clearButton = document.getElementById("clearNameButton");

  clearButton.addEventListener("click", function() {
    localStorage.removeItem("rememberedUsername");
    username = null;
    headingElement.textContent = `${greetingText}, Guest`;
  });
