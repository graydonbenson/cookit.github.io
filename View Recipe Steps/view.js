function openPopup(popupId) {
    popupElement = document.getElementById(popupId)
    if (popupId === 'popup2') {
        document.getElementById('popup1').style.display = 'none';
    }
    popupElement.style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';

    popupElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

let navOpen = false;
function toggleNav(sidenavId) {
    const isOpen = (sidenavId === "mySidenav") ? navOpen : fridgenavOpen;
    const width = isOpen ? "0" : "300px";

    if (sidenavId === "mySidenav") {
        navOpen = !navOpen;
    } else if (sidenavId === "fridgeSidenav") {
        fridgenavOpen = !fridgenavOpen;
    }

    document.getElementById(sidenavId).style.width = width;
}

// Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
    // Add an event listener that runs a function when the "click" event is triggered
    star.addEventListener("click", () => {
        // Loop through the "stars" NodeList Again
        stars.forEach((star, index2) => {
            // Add the "active" class to the clicked star and any stars with a lower index
            // and remove the "active" class from any stars with a higher index
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});
