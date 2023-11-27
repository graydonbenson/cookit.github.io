function openPopup() {
    document.getElementById("myPopup").style.display = "block";
}

function closePopup() {
    document.getElementById("myPopup").style.display = "none";
}

const hamburgerToggle = document.getElementById('hamburger-toggle');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerToggle.addEventListener('change', function() {
    if (this.checked) {
        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';
    }
});

// JavaScript function to show recipe details sidebar
function showRecipeDetails(recipe) {
    const sidebar = document.getElementById('recipeSidebar');
    sidebar.innerHTML = ''; // Clear previous content
    // Populate the sidebar content with recipe details
    const image = document.createElement('img');
    image.src = 'path_to_your_image.jpg'; // Replace 'path_to_your_image.jpg' with the actual image path
    image.alt = 'Recipe Image'; // Add alt text for the image
    sidebar.appendChild(image);
    
    sidebar.innerHTML = `
      <img src="./img/fp-fp-2149056043.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
      <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
      <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
      <div class="rating" style="margin-left:2%;">${recipe.querySelector('.rating').innerHTML}(7.4k)</div>
      <button style=" position:absolute; top:50%;   -webkit-border-radius: 60;
      -moz-border-radius: 60;
      border-radius: 60px;
      font-family: Georgia;
      color: #000000;
      font-size: 40px;
      background: #D2B48C;
      padding: 10px 20px 10px 20px;
      text-decoration: none;">View Recipe</button>
      <!-- Add more details or content as needed -->
    `;
    sidebar.classList.add('active'); // Show the sidebar by adding 'active' class
  }

  function toggleSidebar() {
    const sidebar = document.querySelector('.recipe-sidebar');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

const recipes = document.querySelectorAll('.recipe');

recipes.forEach(recipe => {
    recipe.addEventListener('click', toggleSidebar);
});
  