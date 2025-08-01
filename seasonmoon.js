// SEASON SCRIPT //
function displayCurrentSeason() {
    const currentDate = new Date(); // Creates a Date object for the current date and time.
    const currentMonth = currentDate.getMonth(); // Gets the month (0-11, where 0 is January).
    let season = "";

    if (currentMonth >= 2 && currentMonth <= 4) { // Months 2,3,4: March, April, May (Spring)
        season = "Spring";
    } else if (currentMonth >= 5 && currentMonth <= 7) { // Months 5,6,7: June, July, August (Summer)
        season = "☀️Summer☀️";
    } else if (currentMonth >= 8 && currentMonth <= 10) { // Months 8,9,10: September, October, November (Autumn/Fall)
        season = "Fall";
    } else { // Months 11, 0, 1: December, January, February (Winter)
        season = "Winter";
    }

    document.getElementById("currentSeason").innerHTML = `<br> ${season}` // Updates the HTML element.
}

// Call the function to display the season when the page loads
displayCurrentSeason();