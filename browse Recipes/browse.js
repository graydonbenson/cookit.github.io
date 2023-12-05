
function openPopup() {
      document.getElementById("myPopup").style.display = "block";
  }
  
  function closePopup() {
      document.getElementById("myPopup").style.display = "none";
  }

  let navOpen = false;
  function toggleNav(sidenavId) {
      const isOpen = navOpen;
      const width = isOpen ? "0" : "300px";
      navOpen = !navOpen;
      document.getElementById(sidenavId).style.width = width;
  }

  function openPopupCuisine() {
      document.getElementById("myPopup2").style.display = "block";
  }

  function closePopupCuisine() {
      document.getElementById("myPopup2").style.display = "none";
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
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(9.7k)</div>
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
        <button onclick = "window.location.href='../View Recipe Steps/view-burger.html';" style="   position:relative; bottom:0; left: 25%; transform: translateX(-50%); cursor: pointer;   -webkit-border-radius: 60;
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
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(8.7k)</div>
        <button onclick = "window.location.href='../View Recipe Steps/view-lobster.html';" style="  position:relative; bottom:0; left: 25%; transform: translateX(-50%); cursor: pointer;   -webkit-border-radius: 60;
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
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(4.8k)</div>
        <button onclick = "window.location.href='../View Recipe Steps/view-pizza.html';" style="  position:relative; bottom:0; left: 25%; transform: translateX(-50%); cursor: pointer;   -webkit-border-radius: 60;
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
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(5.4k)</div>
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
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(7.6k)</div>
        <button onclick = "window.location.href='../View Recipe Steps/view-mongolian.html';" style=" position:relative; bottom:0; left: 25%; transform: translateX(-50%); cursor: pointer; -webkit-border-radius: 60;
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

    




    function showRecipeDetails7(recipe) {
      const sidebar = document.getElementById('recipeSidebar');
      sidebar.innerHTML = ''; // Clear previous content
      
      sidebar.innerHTML = `
        <img src="./img/carbonara-horizontal-superJumbo-v2.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
        <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
        <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
        <p style="margin-left:2%; font-size: 18px;">  
            Spaghetti Carbonara is a classic Italian pasta dish known for its simple yet indulgent preparation. It typically consists of spaghetti noodles tossed with a rich sauce made from eggs, grated Pecorino Romano cheese, pancetta or guanciale (cured pork jowl), and black pepper. The heat from the freshly cooked pasta and the sautéed pork components combine to create a creamy, flavorful sauce without the use of cream. The result is a satisfying and comforting dish, celebrated for its deliciously creamy texture and bold, savory taste.</p>
        <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(7.1k)</div>
        <button style="   position:relative; bottom:0; left: 25%; transform: translateX(-50%); cursor: pointer;   -webkit-border-radius: 60;
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
  
  
    function showRecipeDetails8(recipe) {
      const sidebar = document.getElementById('recipeSidebar');
      sidebar.innerHTML = ''; // Clear previous content
      
      sidebar.innerHTML = `
        <img src="./img/SEA-bravetart-homemade-cinnamon-rolls-recipe-hero-04-df109d751ac34d1e8ee91a2a9e15dd9e.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
        <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
        <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
        <p style="margin-left:2%; font-size: 18px;">Easy Cinnamon Rolls are a delightful baked treat, featuring soft and fluffy dough spirals generously coated with a sweet and aromatic cinnamon-sugar filling. Topped with a creamy glaze or frosting, these rolls are a comforting and indulgent breakfast or dessert option, perfect for satisfying your sweet tooth.</p>
        <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(6.6k)</div>
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
  
  
    function showRecipeDetails9(recipe) {
      const sidebar = document.getElementById('recipeSidebar');
      sidebar.innerHTML = ''; // Clear previous content
      
      sidebar.innerHTML = `
        <img src="./img/hamburgerSteak.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
        <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
        <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
        <p style="margin-left:2%; font-size: 18px;">
        Hamburger Steak with Onions and Gravy is a hearty and savory dish where seasoned ground beef patties are pan-seared to perfection, topped with caramelized onions, and smothered in a flavorful brown gravy. This classic comfort food delivers a satisfying blend of juicy meat, sweet onions, and rich gravy, creating a deliciously comforting meal.
        </p>
        <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(8.4k)</div>
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
  
  
    function showRecipeDetails10(recipe) {
      const sidebar = document.getElementById('recipeSidebar');
      sidebar.innerHTML = ''; // Clear previous content
      
      sidebar.innerHTML = `
        <img src="./img/brunchCasserole.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
        <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
        <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
        <p style="margin-left:2%; font-size: 18px;">
        The Sunday Brunch Casserole is a versatile and crowd-pleasing dish that combines layers of ingredients like eggs, bread, cheese, and a variety of savory or breakfast-friendly elements. Baked to golden perfection, this casserole is a convenient and delicious option for a leisurely brunch, offering a harmonious medley of flavors in every bite.</p>
        <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(2.9k)</div>
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
  
  
    function showRecipeDetails11(recipe) {
      const sidebar = document.getElementById('recipeSidebar');
      sidebar.innerHTML = ''; // Clear previous content
      
      sidebar.innerHTML = `
        <img src="./img/ChickenSalad.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
        <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
        <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
        <p style="margin-left:2%; font-size: 18px;">
        Healthy Chicken Salad is a light and nutritious dish made with cooked and shredded chicken breast, mixed with an array of crisp and colorful vegetables. Often dressed with a tangy vinaigrette or a yogurt-based dressing, this salad is a wholesome and satisfying option for those looking to enjoy a flavorful yet health-conscious meal.</p>
        <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(6.8k)</div>
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

    function showRecipeDetails12(recipe) {
      const sidebar = document.getElementById('recipeSidebar');
      sidebar.innerHTML = ''; // Clear previous content
      
      sidebar.innerHTML = `
        <img src="./img/chickencasserole.jpg" style=" width: 100%; height: 30%; object-fit: cover;"></img>
        <a href="javascript:void(0)" style="position: absolute; top: 30px; right: 30px; font-size: 50px; background-color: burlywood; border-radius: 5px;" class="closebtn" onclick="toggleSidebar()">&times;</a>
        <h2 style="margin-left:2%;">${recipe.querySelector('.recipe-details h2').textContent}</h2>
        <p style="margin-left:2%; font-size: 18px;">
        Chicken Casserole is a comforting one-dish meal that typically combines cooked chicken with vegetables, a starch (such as rice or pasta), and a creamy or flavorful sauce. Baked until bubbly and golden, this casserole provides a convenient way to bring together a variety of ingredients, resulting in a warm and hearty family-friendly dinner option.</p>
        <p style="margin-left:2%;">${recipe.querySelector('.recipe-details p').textContent}</p>
        <div class="rating" style="margin-left:2%; margin-right:10%">${recipe.querySelector('.rating').innerHTML}(3.1k)</div>
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

  function search_recipe() {
      let input = document.getElementById('searchbar').value
      input=input.toLowerCase();
      let x = document.getElementsByClassName('recipe');

      for (i = 0; i < x.length; i++) {  
            if (!x[i].innerHTML.toLowerCase().includes(input)) { 
                x[i].style.display="none"; 
            } 
            else { 
                x[i].style.display="list-item";                  
            } 
        } 
  }

  function filterSelection(e) {
      const recipes = document.querySelectorAll('.recipe');
      let filter = e.target.dataset.filter;
      recipes.forEach(recipe => {
            recipe.classList.contains(filter)
            ? recipe.classList.remove('hidden')
            : recipe.classList.add('hidden');
      });

  };