document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded and script running.");

    // Animation for goals section
    const goalsSection = document.querySelector('.goals ul');
    if (goalsSection) {
        goalsSection.classList.add('animate-goals');
    }

    // Function to update the current time in UTC
    function updateTimeUTC() {
        const timeElement = document.getElementById('time-utc');
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4]; // Extract the HH:MM:SS part from the UTC string
        timeElement.textContent = utcTime;
    }

    // Function to update the current day of the week
    function updateDayOfWeek() {
        const dayElement = document.getElementById('day-of-week');
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()]; // Get the day of the week in UTC
        dayElement.textContent = currentDay;
    }

    // Initial load of the time and day
    updateTimeUTC();
    updateDayOfWeek();

    // Update the time every second
    setInterval(updateTimeUTC, 1000);

    // Theme Toggle functionality
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme'); 
        // Optional: Save the user's theme preference in local storage
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Apply the saved theme on load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
