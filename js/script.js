// *************   1   ****************
//Greeting message based on time of day with real-time clock display
// ************************************
function updateGreeting() {
    const greetingElement = document.getElementById('greeting'); // Get the HTML element where the greeting will be shown
    const now = new Date();  // Get the current date and time
    // Extract current hour, minutes, and seconds
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    // Time in HH:MM:SS format
    const timeString = `${hour}:${minutes}:${seconds}`;
    let message = "";
    // Message based on time of day
    if (hour >= 5 && hour < 12) {
        message = "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        message = "Good Afternoon";
    } else if (hour >= 18 && hour < 22) {
        message = "Good Evening";
    } else {
        message = "Welcome";
    }
    // Display greeting message and real-time clock in the HTML element
    greetingElement.innerHTML = `${message}, <span class="time-display">${timeString}</span>`;
}

// Run greeting function when the page finishes loading
document.addEventListener('DOMContentLoaded', () => {
    updateGreeting();
    // Update greeting every second
    setInterval(updateGreeting, 1000);
});

// *************   2   ****************
// GitHub button functionality
// ************************************
document.addEventListener('DOMContentLoaded', () => {
    const githubBtn = document.getElementById('githubBtn');   // get the GitHub button element
    // add click event listener to the button
    githubBtn.addEventListener('click', () => {
        const githubURL = 'https://github.com/RayhanaMoh';
        window.open(githubURL, '_blank');   // open the GitHub profile in a new tab
    });
});
// *************   3   ****************
// moving to about-me section
//*************************************
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('aboutLink'); // Get About link and section
    const aboutSection = document.getElementById('about');
    aboutLink.addEventListener('click', (e) => {  // When link is clicked
        e.preventDefault(); // prevent jumping to the content
        aboutSection.scrollIntoView({
            behavior: 'smooth', // smooth move
            block: 'start'
        });
    });
});
// *************   4   ****************
// moving to skills section
//*************************************
document.addEventListener('DOMContentLoaded', () => {
    const skillsLink = document.getElementById('skillsLink');
    const skillsSection = document.getElementById('skills');
    skillsLink.addEventListener('click', (e) => {
        e.preventDefault(); // prevent jumping to the content
        skillsSection.scrollIntoView({
            behavior: 'smooth', // smooth move
            block: 'start'
        });
    });
});

// *************   5   ****************
// moving to projects section
//*************************************
document.addEventListener('DOMContentLoaded', () => {
    const projectLink = document.getElementById('projectsLink');
    const projectSection = document.getElementById('projects');
    projectLink.addEventListener('click', (e) => {
        e.preventDefault(); // prevent jumping to the content
        projectSection.scrollIntoView({
            behavior: 'smooth', // smooth move
            block: 'start'
        });
    });
});

// *************   6   ****************
// moving to contact-me section
//*************************************
document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contactBtn');
    const contactSection = document.getElementById('contact');
    contactLink.addEventListener('click', (e) => {
        e.preventDefault(); // prevent jumping to the content
        contactSection.scrollIntoView({
            behavior: 'smooth', // smooth move
            block: 'start'
        });
    });
});

// *************   7   ****************
// moving to content section when clicking on the name in the header
//*************************************
document.addEventListener('DOMContentLoaded', () => {
    const nameLeft = document.getElementById('nameLeft');
    const nameSection = document.getElementById('content');
    nameLeft.addEventListener('click', (e) => {
        e.preventDefault(); // prevent jumping to the content
        nameSection.scrollIntoView({
            behavior: 'smooth', // smooth move
            block: 'start'
        });
    });
    nameLeft.style.cursor = 'pointer'; // mouse pointer to indicate it's clickable
});

// *************   8   ****************
// open Massarra store when clicking on the card
//*************************************
document.addEventListener('DOMContentLoaded', () => {
    const masarraCard = document.getElementById('project1'); // Get project card element
    if (masarraCard) { // Check if element exists to avoid errors
        masarraCard.addEventListener('click', () => {
            const storeURL = 'https://masarra.world/?srsltid=AfmBOoqC7yxjOvGGtoweEmRMpaB0-C79fafLdcNIlu3YiRzjATMN4_rq';
            window.open(storeURL, '_blank'); // open the store in a new tab
        });
        masarraCard.style.cursor = 'pointer';
    }
});