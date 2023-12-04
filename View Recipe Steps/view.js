const modal = document.querySelector(".modal");
const trigger = document.querySelector(".button1");
const closeButton = document.querySelector(".close-button1");

function toggleModal(modalId) {
  const modal = document.getElementById(`modal${modalId}`);
  modal.classList.toggle("show-modal");
}

function closePopup(){
  console.log("hidden")
  modal1.style.display = "hidden"
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

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


