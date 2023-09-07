// script.js

// Function to get the current day of the week
function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}



// Function to update the current UTC time every second
function updateCurrentUTCTime() {
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    
    function updateTime() {
        const currentDate = new Date();
        const hours = currentDate.getUTCHours().toString().padStart(2, '0');
        const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
        const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds} UTC`;
    }

    updateTime(); // Initial update
    setInterval(updateTime, 1000); // Update every second
}

// Call the function to start updating the time
updateCurrentUTCTime();
