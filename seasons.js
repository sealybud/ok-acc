// SEASON SCRIPT //
function displayCurrentSeason() {
    const currentDate = new Date(); 
        const startSpring = new Date('2026-03-20'); 
        const endSpring = new Date('2026-06-20');
        const startSummer = new Date('2025-06-20'); 
        const endSummer = new Date('2025-09-21');
        const startFall = new Date('2025-09-22'); 
        const endFall = new Date('2025-12-20');
    let currentSeason = "";

    if (currentDate >= startSpring && currentDate <= endSpring) { 
        currentSeason = "🌿SPRING🌿";
    } else if (currentDate >= startSummer && currentDate <= endSummer) { 
        currentSeason = "☀️SUMMER☀️";
    } else if (currentDate >= startFall && currentDate <= endFall) { 
        currentSeason = "🍁FALL🍁";
    } else { 
        currentSeason = "❄️WINTER❄️";
    }

    document.getElementById("currentSeason").innerHTML = `${currentSeason}` // Updates the HTML element.
}

displayCurrentSeason();

// NEXT SEASON SCRIPT //
function displayNextSeason() {
    const nextDate = new Date();
        const startnextSpring = new Date('2026-03-20'); 
        const endnextSpring = new Date('2026-06-20');
        const startnextSummer = new Date('2025-06-20'); 
        const endnextSummer = new Date('2025-09-21');
        const startnextFall = new Date('2025-09-22'); 
        const endnextFall = new Date('2025-12-20');
    let nextseason = "";

    if (nextDate >= startnextSpring && nextDate <= endnextSpring) {
        nextseason = "☀️SUMMER☀️";
    } else if (nextDate >= startnextSummer && nextDate <= endnextSummer) { 
        nextseason = "🍁FALL🍁";
    } else if (nextDate >= startnextFall && nextDate <= endnextFall) { 
        nextseason = "❄️WINTER❄️";
    } else {
        nextseason = "🌿SPRING🌿";
    }

    document.getElementById("nextSeason").innerHTML = `${nextseason}`
}

displayNextSeason();

// DATE SCRIPT //

    const today = new Date();

    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    document.getElementById('date').textContent = `(${formattedDate} - today)`;


// NEXT DATE //
const nextDate = new Date('2025-09-23');

    const formatDate = nextDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    // NOTE - the display element is in the countdown script for both the date and the amount of days remaining //


// COUNTDOWN SCRIPT //

const targetDate = new Date('2025-09-22T00:00:00');
const countdownday = new Date();
countdownday.setHours(0, 0, 0, 0);

const differenceInMilliseconds = targetDate.getTime() - countdownday.getTime();

const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

document.getElementById('countdown').textContent = `(${formatDate} - in ${differenceInDays} days)`;

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
