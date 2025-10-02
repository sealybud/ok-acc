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

// VIDEOS SCRIPT //
  function changeVideo(newVideoSrc) {
    const videoPlayer = document.getElementById('myVideo');
    videoPlayer.src = newVideoSrc;
    videoPlayer.load(); // Loads the new video into the player
    videoPlayer.play(); // Automatically plays the new video
}

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


// POST SCRIPT //
const button = document.getElementById("button")
const textarea = document.getElementById("textarea")
const input = document.getElementById("input")

button.addEventListener("click", function() {
  const inputValue = input.value.trim();
  if (inputValue === "") return;

  const POSTING = new Date();

    const POSTDATE = POSTING.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });

  const newPost = `${inputValue} \n (${username}, ${POSTDATE})`

  textarea.textContent += (textarea.textContent ? "\n\n" : "") + newPost;

  input.value = "";


});

// SCREENSHOT SCRIPT //
 document.getElementById('screenshot').addEventListener('click', function() {
    const captureArea = document.getElementById('captureArea'); // Or document.body for the whole page

    html2canvas(captureArea).then(canvas => {
        // Convert the canvas to an image data URL
        const imageDataURL = canvas.toDataURL('image/png');

        // Option 2: Download the screenshot
        const a = document.createElement('a');
        a.href = imageDataURL;
        a.download = 'web2post.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});

