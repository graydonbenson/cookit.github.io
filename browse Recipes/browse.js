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
      <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
      <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
      <p style="margin-left:2%; font-size: 18px;">Savor the delight of our Crispy Chicken Parmesan – a golden symphony of tender chicken, breadcrumbs, and savory marinara sauce. Expertly pan-fried to perfection, each cutlet is crowned with a melty blend of mozzarella and Parmesan cheeses. Serve over spaghetti or in a warm Italian roll for an instant classic that's both comforting and crave-worthy. Elevate your weeknight dinner with this quick and delicious recipe!</p>
      <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
      <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(7.4k)</div>
      <button style="  position:relative; bottom:0; left: 25%; transform: translateX(-50%); cursor: pointer;   -webkit-border-radius: 60;
      -moz-border-radius: 60;
      border-radius: 60px;
      font-family: Georgia;
      color: #000000;
      font-size: 40px;
      background: #D2B48C;
      padding: 10px 20px 10px 20px;
      text-decoration: none; style="padding-top: 65%;">View Recipe</button>
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

function showRecipeDetails2(recipe) {
    const sidebar = document.getElementById('recipeSidebar');
    sidebar.innerHTML = ''; // Clear previous content
    
    sidebar.innerHTML = `
      <img src="./img/loaded-burgers-featured.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
      <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
      <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
      <p style="margin-left:2%; font-size: 18px;">
      Savor the classic perfection of our cheeseburger, a culinary masterpiece that tantalizes your taste buds with every bite. Nestled between soft, golden brioche buns, our juicy, flame-grilled beef patty is a symphony of flavor and texture. Melted slices of premium cheddar cheese embrace the meat, adding a creamy richness that complements the savory notes. Crisp lettuce, ripe tomatoes, and zesty pickles provide a refreshing crunch, while our secret sauce delivers a harmonious blend of tanginess and creaminess</p>
      <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
      <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(7.4k)</div>
      <button style="   position:relative; bottom:0; left: 50%; transform: translateX(-50%); cursor: pointer; -webkit-border-radius: 60; 
      -moz-border-radius: 60;
      border-radius: 60px;
      font-family: Georgia;
      color: #000000;
      font-size: 40px;
      background: #D2B48C;
      padding: 10px 20px 10px 20px;
      text-decoration: none; style="padding-top: 65%;">View Recipe</button>
      <!-- Add more details or content as needed -->
    `;
    sidebar.classList.add('active'); // Show the sidebar by adding 'active' class
  }


  function showRecipeDetails3(recipe) {
    const sidebar = document.getElementById('recipeSidebar');
    sidebar.innerHTML = ''; // Clear previous content
    
    sidebar.innerHTML = `
      <img src="./img/FINAL-lobster-ravioli-1-1200x1800.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
      <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
      <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
      <p style="margin-left:2%; font-size: 18px;">Indulge in the exquisite luxury of our lobster ravioli, a culinary creation that elevates the art of pasta. Each delicate parcel boasts a luscious filling of succulent lobster meat, delicately seasoned to enhance its natural sweetness. Enveloped in tender, handcrafted pasta, the ravioli offers a perfect balance of richness and elegance. Drizzled with a velvety, buttery sauce infused with hints of garlic and fresh herbs, every bite is a symphony of flavors that transports you to a gourmet seafood paradise. Immerse yourself in a dining experience that celebrates the refined essence of lobster in a delectable pasta masterpiece.</p>
      <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
      <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(7.4k)</div>
      <button style="  position:relative; bottom:0; left: 25%; transform: translateX(-50%); cursor: pointer;  -webkit-border-radius: 60;
      -moz-border-radius: 60;
      border-radius: 60px;
      font-family: Georgia;
      color: #000000;
      font-size: 40px;
      background: #D2B48C;
      padding: 10px 20px 10px 20px;
      text-decoration: none; style="padding-top: 65%;">View Recipe</button>
      <!-- Add more details or content as needed -->
    `;
    sidebar.classList.add('active'); // Show the sidebar by adding 'active' class
  }


  function showRecipeDetails4(recipe) {
    const sidebar = document.getElementById('recipeSidebar');
    sidebar.innerHTML = ''; // Clear previous content
    
    sidebar.innerHTML = `
      <img src="./img/cheese-pizza.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
      <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
      <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
      <p style="margin-left:2%; font-size: 18px;">
      Experience the timeless delight of our Classic Cheese Pizza—a culinary masterpiece that celebrates simplicity and flavor. Picture a golden, thin crust, perfectly crisp at the edges and delightfully chewy at its center. Generously adorned with a blend of premium mozzarella and tangy tomato sauce, each slice is a canvas of pure, unadulterated pizza perfection. The molten cheese bubbles and melts into a gooey, savory layer that complements the sweet acidity of the tomatoes. This pizza is a nostalgic journey back to the fundamentals, where the harmony of cheese and sauce creates a symphony of taste that satisfies cravings and leaves you wanting more. It's a true celebration of the timeless charm of a classic cheese pizza.</p>
      <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
      <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(7.4k)</div>
      <button style="  position:relative; bottom:0; left: 50%; transform: translateX(-50%); cursor: pointer;   -webkit-border-radius: 60;
      -moz-border-radius: 60;
      border-radius: 60px;
      font-family: Georgia;
      color: #000000;
      font-size: 40px;
      background: #D2B48C;
      padding: 10px 20px 10px 20px;
      text-decoration: none; style="padding-top: 65%;">View Recipe</button>
      <!-- Add more details or content as needed -->
    `;
    sidebar.classList.add('active'); // Show the sidebar by adding 'active' class
  }


  function showRecipeDetails5(recipe) {
    const sidebar = document.getElementById('recipeSidebar');
    sidebar.innerHTML = ''; // Clear previous content
    
    sidebar.innerHTML = `
      <img src="./img/Lasagna.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
      <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
      <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
      <p style="margin-left:2%; font-size: 18px;">
      Dive into the comforting embrace of our Cottage Cheese Lasagna, a delightful twist on the traditional Italian favorite. Layer upon layer of tender lasagna noodles cradle a velvety blend of cottage cheese, spinach, and herbs—creating a satisfyingly creamy and flavorful filling. Each bite is a harmonious dance of textures, with the pasta providing a perfect al dente bite and the cottage cheese mixture delivering a rich, comforting creaminess. Blanketed in a robust marinara sauce and crowned with a generous sprinkle of melted mozzarella, this lasagna is a vegetarian masterpiece that proves meatless can be equally indulgent. Enjoy a symphony of flavors that makes every bite a celebration of wholesome goodness and culinary creativity.</p>
      <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
      <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(7.4k)</div>
      <button style="  position:relative; bottom:0; left: 50%; transform: translateX(-50%); cursor: pointer;   -webkit-border-radius: 60;
      -moz-border-radius: 60;
      border-radius: 60px;
      font-family: Georgia;
      color: #000000;
      font-size: 40px;
      background: #D2B48C;
      padding: 10px 20px 10px 20px;
      text-decoration: none; style="padding-top: 65%;">View Recipe</button>
      <!-- Add more details or content as needed -->
    `;
    sidebar.classList.add('active'); // Show the sidebar by adding 'active' class
  }


  function showRecipeDetails6(recipe) {
    const sidebar = document.getElementById('recipeSidebar');
    sidebar.innerHTML = ''; // Clear previous content
    
    sidebar.innerHTML = `
      <img src="./img/mongolian-beef-5-650x852.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
      <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
      <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
      <p style="margin-left:2%; font-size: 18px;">
      Savor the bold and savory allure of our Mongolian Beef, a culinary journey that takes your taste buds to new heights. Tender strips of succulent beef are wok-seared to perfection, creating a perfect balance of crispy edges and melt-in-your-mouth tenderness. The star of the show is the irresistibly flavorful Mongolian sauce—rich, slightly sweet, and infused with a medley of aromatic spices. As the beef mingles with green onions and sesame seeds, each bite is a tantalizing symphony of savory umami and subtle sweetness. Immerse yourself in the culinary magic of Mongolian Beef, where the artful blend of ingredients creates a dish that's both satisfyingly hearty and delightfully nuanced.</p>
      <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
      <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(7.4k)</div>
      <button style=" position:relative; bottom:0; left: 25%; transform: translateX(-50%); cursor: pointer; -webkit-border-radius: 60;
      -moz-border-radius: 60;
      border-radius: 60px;
      font-family: Georgia;
      color: #000000;
      font-size: 40px;
      background: #D2B48C;
      padding: 10px 20px 10px 20px;
      text-decoration: none; style="padding-top: 65%;">View Recipe</button>
      <!-- Add more details or content as needed -->
    `;
    sidebar.classList.add('active'); // Show the sidebar by adding 'active' class
  }



 






























const recipes = document.querySelectorAll('.recipe');

recipes.forEach(recipe => {
    recipe.addEventListener('click', toggleSidebar);
});
  