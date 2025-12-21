// SEASON SCRIPT //
function displayCurrentSeason() {
    const currentDate = new Date(); 
        const startSpring = new Date('2026-03-20T00:00:00'); 
        const endSpring = new Date('2026-06-20T23:59:59');
        const startSummer = new Date('2026-06-21T00:00:00'); 
        const endSummer = new Date('2026-09-21T23:59:59');
        const startFall = new Date('2026-09-22T00:00:00');
        const endFall = new Date('2026-12-20T23:59:59');
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
        const startnextSpring = new Date('2026-03-20T00:00:00'); 
        const endnextSpring = new Date('2026-06-20T23:59:59');
        const startnextSummer = new Date('2026-06-21T00:00:00'); 
        const endnextSummer = new Date('2026-09-21T23:59:59'); 
        const startnextFall = new Date('2026-09-22T00:00:00');
        const endnextFall = new Date('2026-12-20T23:59:59'); 
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

// HOW MANY DAYS SCRIPTS //
    // SPRING //
        const howManySpring = new Date('2026-03-20T00:00:00');
        const howManySpringDays = new Date();
        howManySpringDays.setHours(0, 0, 0, 0);

        const springnumber = howManySpring.getTime() - howManySpringDays.getTime();

        const differenceInSpringDays = Math.ceil(springnumber / (1000 * 60 * 60 * 24));

        document.getElementById('springDays').textContent = `starts in ${differenceInSpringDays} days (March 20, 2026)`;

    // SUMMER //
        const howManySummer = new Date('2026-06-20T00:00:00');
        const howManySummerDays = new Date();
        howManySummerDays.setHours(0, 0, 0, 0);

        const summernumber = howManySummer.getTime() - howManySummerDays.getTime();

        const differenceInSummerDays = Math.ceil(summernumber / (1000 * 60 * 60 * 24));

        document.getElementById('summerDays').textContent = `starts in ${differenceInSummerDays} days (June 20, 2026)`;

    // FALL //
        const howManyFall = new Date('2026-09-22T00:00:00');
        const howManyFallDays = new Date();
        howManyFallDays.setHours(0, 0, 0, 0);

        const fallnumber = howManyFall.getTime() - howManyFallDays.getTime();

        const differenceInFallDays = Math.ceil(fallnumber / (1000 * 60 * 60 * 24));

        document.getElementById('fallDays').textContent = `starts in ${differenceInFallDays} days (September 22, 2026)`;

    // WINTER //
        const howManyWinter = new Date('2026-12-21T00:00:00');
        const howManyWinterDays = new Date();
        howManyWinterDays.setHours(0, 0, 0, 0);

        const winternumber = howManyWinter.getTime() - howManyWinterDays.getTime();

        const differenceInWinterDays = Math.ceil(winternumber / (1000 * 60 * 60 * 24));

        document.getElementById('winterDays').textContent = `starts in ${differenceInWinterDays} days (December 21, 2026)`;

// DATE SCRIPT //

    const today = new Date();

    const formattedDate = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    document.getElementById('date').textContent = `(${formattedDate} - today)`;


// NEXT DATE //
const nextDate = new Date('2026-03-20T00:00:00');

    const formatDate = nextDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    // NOTE - the display element is in the countdown script for both the date and the amount of days remaining //


// COUNTDOWN SCRIPT //

const targetDate = new Date('2026-03-20T00:00:00');
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

// SUNSET SCRIPT //

const latitude = 40.7128;  // Example: New York City
const longitude = -74.0060; // Example: New York City

const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;

async function getSunsetTime() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === "OK") {
      const sunsetUTC = data.results.sunset;
      
      
      const sunsetDate = new Date(sunsetUTC);
      const options = { hour: 'numeric', minute: '2-digit', hour12: true };
      const localSunsetTime = sunsetDate.toLocaleTimeString('en-US', options);

      
      document.getElementById('sunset-time').textContent = `${localSunsetTime}`;
    } else {
      document.getElementById('sunset-time').textContent = `Error: ${data.status}`;
    }

  } catch (error) {
    document.getElementById('sunset-time').textContent = `Failed to fetch sunset data.`;
    console.error('Error fetching sunset data:', error);
  }
}

getSunsetTime();

// SUNRISE SCRIPT //
const lat = 40.7128;  // Example: New York City
const long = -74.0060; // Example: New York City

const urls = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`;

async function getSunriseTime() {
  try {
    const response = await fetch(urls);
    const data = await response.json();

    if (data.status === "OK") {
      const sunriseUTC = data.results.sunrise;
      
      
      const sunriseDate = new Date(sunriseUTC);
      const options = { hour: 'numeric', minute: '2-digit', hour12: true };
      const localSunriseTime = sunriseDate.toLocaleTimeString('en-US', options);

      
      document.getElementById('sunrise-time').textContent = `${localSunriseTime}`;
    } else {
      document.getElementById('sunrise-time').textContent = `Error: ${data.status}`;
    }

  } catch (error) {
    document.getElementById('sunrise-time').textContent = `Failed to fetch sunrise data.`;
    console.error('Error fetching sunrise data:', error);
  }
}

getSunriseTime();
