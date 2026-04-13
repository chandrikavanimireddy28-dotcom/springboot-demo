let designations = [
    "Software Engineer",
    "Web Developer",
    "Data Analyst",
    "UI/UX Designer",
    "Backend Developer"
];

let index = 0;

// Function to load user from API
function loadUser() {
    fetch("https://randomuser.me/api")
    .then(res => res.json())
    .then(data => {
        const user = data.results[0];

        const img = document.getElementById("userImage");

        // Username from API
        document.getElementById("username").innerText = user.login.username;

        // Change designation
        document.getElementById("designation").innerText = designations[index];

        // Step 1: Show placeholder based on gender
        if (user.gender === "male") {
            img.src = "https://via.placeholder.com/150?text=John";
        } else {
            img.src = "https://via.placeholder.com/150?text=Jane";
        }

        // Step 2: Show real image after delay
        setTimeout(() => {
            img.src = user.picture.large;
        }, 1500);
    })
    .catch(err => console.log(err));
}

// Next button
function nextDesignation() {
    index = (index + 1) % designations.length;
    loadUser(); // fetch new user each click
}

// Load first user on page load
window.onload = loadUser;