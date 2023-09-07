// script.js

// Function to get the current day of the week
function getCurrentDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    return dayOfWeek;
}

// Function to get the current UTC time
function getCurrentUTCTime() {
    const currentDate = new Date();
    const hours = currentDate.getUTCHours().toString().padStart(2, '0');
    const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes} UTC`;
}

// Update the elements with data-testid attributes
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = getCurrentDayOfWeek();
document.querySelector('[data-testid="currentUTCTime"]').textContent = getCurrentUTCTime();
