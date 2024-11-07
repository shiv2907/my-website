// Function to submit the form on Enter key press
function submitForm(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default form submission
        document.getElementById('contactForm').submit(); // Submit the form
    }
}

// Attach the submitForm function to all input fields and textarea
const inputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
inputs.forEach(function(element) {
    element.addEventListener('keydown', submitForm);
});














document.getElementById('contactLink').onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.getElementById('popup').style.display = 'block'; // Show the popup
};

document.getElementById('closePopup').onclick = function() {
    document.getElementById('popup').style.display = 'none'; // Hide the popup
};

window.onclick = function(event) {
    if (event.target === document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none'; // Hide the popup if clicked outside
    }
};

// Handle form submission
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);

    // Send form data using fetch
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message!');
            document.getElementById('popup').style.display = 'none'; // Close the popup
            this.reset(); // Reset the form
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    })
    .catch(error => {
        alert('There was a problem with your submission. Please try again.');
        console.error('Error:', error);
    });
};





// about me java script
const aboutLink = document.getElementById('aboutLink');
const aboutMeSection = document.getElementById('aboutMe');
const closeAbout = document.getElementById('closeAbout');

// Show the About Me section on click
aboutLink.onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    aboutMeSection.classList.toggle('hidden'); // Toggle visibility
};

// Close the About Me section
closeAbout.onclick = function() {
    aboutMeSection.classList.add('hidden'); // Hide the section
};

// Remove any outside click listener to prevent closing





document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});
