const TAX_RATE = 0.05; // 8% tax rate, adjust as needed
let DELIVERY_CHARGE = 0; //

const storeLocations = [
  "99 Imaginary Road, Dreamsville",
  "456 Mythical Lane, Atlantis",
  "789 Wonderland Avenue, Fantasia",
  "1010 Fable Street, Eldorado",
  "1313 Mystery Boulevard, Gotham",
  "2020 Vision Street, Utopia",
  "2468 Legend Drive, Camelot",
  "5050 Fictional Way, Shangri-La",
  "8675 Enigma Court, Avalon",
  "1357 Fairy Tale Lane, Neverland",
];
const dummyLocations = [
  "742 Evergreen Terrace, Springfield",
  "1640 Riverside Drive, Hill Valley",
  "123 Fake Street, Faketown",
  "221B Baker Street, London",
  "12 Grimmauld Place, London",
  "4 Privet Drive, Little Whinging",
  "124 Conch Street, Bikini Bottom",
  "308 Negra Arroyo Lane, Albuquerque",
  "10 Downing Street, London",
  "42 Wallaby Way, Sydney",
];

function getDefaults() {
  showPreviouslyBought();
  showCategory("Fruits");
}
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px";
  } else {
    sidebar.style.left = "0px";
  }
}
function toggleCartSidebar() {
  console.log("adsfg");
  const sidebar = document.getElementById("cart-bar");
  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-26rem";
  } else {
    sidebar.style.right = "0px";
  }
}
const productsData = {
  Vegetables: [
    {
      name: "Carrots",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJTmpg_KYGzV4EdR1FKqvsX18wgmtxCq50g&usqp=CAU",
      price: "3.99",
      bundle: "Bundle of 4",
    },
    {
      name: "Broccoli",
      image:
        "https://www.hopkinsmedicine.org/-/media/images/articles/2022/05/broccoli-content.jpeg?h=640&iar=0&w=640&hash=C5188A2865C9720F19BD2DF24A0FA6BB",
      price: "5.99",
      bundle: "Bundle of 2",
    },
    {
      name: "Spinach",
      image:
        "https://www.gofresh.com.kw/wp-content/uploads/2021/05/spinach.jpg",
      price: "2.99",
      bundle: "1 each",
    },
    {
      name: "Tomato",
      image: "https://farmfreshontario.com/wp-content/uploads/2019/12/p3.jpg",
      price: "2.49",
      bundle: "1 each",
    },
    {
      name: "Eggplant",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/740/169/non_2x/fresh-eggplant-icon-free-vector.jpg",
      price: "4.79",
      bundle: "1 each",
    },
  ],
  Fruits: [
    {
      name: "Apple",
      image:
        "https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg",
      price: "0.50",
      bundle: "1 each",
    },
    {
      name: "Banana",
      image:
        "https://product-images.metro.ca/images/h7a/he3/11860661338142.jpg",
      price: "2.99",
      bundle: "Bundle of 4",
    },
    {
      name: "Pineapple",
      image:
        "https://theproduceguyz.com/cdn/shop/products/Pineapple.jpg?v=1588502767",
      price: "1.99",
      bundle: "1 each",
    },
    {
      name: "Mango",
      image:
        "https://mi.alpremium.ca/cdn/shop/products/apple-mango.jpg?v=1590948616",
      price: "2.49",
      bundle: "1 each",
    },
    {
      name: "Grapes",
      image:
        "https://reimagineco.ca/cdn/shop/products/Untitleddesign-100_750x810.png?v=1667752249",
      price: "7.99",
      bundle: "Bundle",
    },
    {
      name: "Pomegranate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiuYnzM06DKeT5ILGwim6HKE6mPLVKQ6YHQ&usqp=CAU",
      price: "2.99",
      bundle: "1 each",
    },
  ],
  Bakery: [
    {
      name: "Bread",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbiRvsKtIBQPpfQ6MLGEXS2bCiOEeUNwON_A&usqp=CAU",
      price: "3.49",
      bundle: "1 loaf",
    },
    {
      name: "Pretzel",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbe7oo88d67eIYF0_q4hHVrICS4oVUO9Pxw&usqp=CAU",
      price: "3.49",
      bundle: "1 each",
    },
    {
      name: "Cupcakes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRizeDMeCdM5-KUeFJh_ZO92hUnMYRrpCIWQ&usqp=CAU",
      price: "5.99",
      bundle: "Pack of 6",
    },
    {
      name: "Naan",
      image:
        "https://img.freepik.com/premium-photo/naan-2d-vector-illustration-cartoon-white-background_889056-26648.jpg",
      price: "5.79",
      bundle: "Pack of 4",
    },
    {
      name: "Cinnamon Buns",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/005/338/143/small_2x/cinnamon-bun-sweet-roll-with-sugar-glaze-isolated-on-white-background-illustration-vector.jpg",
      price: "12.99",
      bundle: "Pack of 6",
    },
    {
      name: "Baklava",
      image:
        "https://previews.123rf.com/images/mything/mything2005/mything200500033/149841928-baklava-turkish-sweet-dessert-vector-illustration-cartoon-icon-isolated-on-white.jpg",
      price: "9.54",
      bundle: "Pack of 6",
    },
    //   { name: "", image: "bakery/cupcake.webp", price: "0.50" },
    //   { name: "Naan", image: "bakery/naan.jpeg", price: "0.50" },
  ],
  "Dairy and Eggs": [
    {
      name: "Milk",
      image:
        "https://media.istockphoto.com/id/1151948324/vector/cartoon-milk-carton-vector-illustration.jpg?s=612x612&w=0&k=20&c=f669eqlZ1dnRRYzD4JwENURtCWQezDjLhySHHo_jJ-4=", // Replace with your actual image URL
      price: "4.99",
      bundle: "1 gallon",
    },
    {
      name: "Cheese",
      image:
        "https://static.vecteezy.com/system/resources/previews/025/377/340/original/piece-of-cheese-cartoon-vector.jpg", // Replace with your actual image URL
      price: "3.50",
      bundle: "200g",
    },
    {
      name: "Butter",
      image:
        "https://www.shutterstock.com/image-vector/butter-oil-icon-fat-food-600nw-1471289870.jpg", // Replace with your actual image URL
      price: "2.99",
      bundle: "1 pack",
    },
    {
      name: "Eggs",
      image:
        "https://img.freepik.com/premium-vector/egg-vector-illustration-cartoon-egg-eggs-hand-draw-isolated_648083-257.jpg?w=2000", // Replace with your actual image URL
      price: "2.49",
      bundle: "12 per box",
    },
    {
      name: "Yogurt",
      image:
        "https://media.istockphoto.com/id/1474708403/vector/strawberry-yogurt-package-vector-illustration-cartoon-isolated-plastic-yoghurt-pack-with.jpg?s=612x612&w=0&k=20&c=WscHZ4vXl6ItIHlyNeqCzYpTx-WGWRkn9LrOLcJjiok=", // Replace with your actual image URL
      price: "5.99",
      bundle: "1kg",
    },
  ],
};
function showCategory(category) {
  console.log("category: " + category);
  // Update the category title
  document.getElementById("selected-category").querySelector("h3").innerText =
    category + " Category";

  // Fake products data with images and prices

  // Generate HTML for products
  let productsHtml = productsData[category]
    .map((product) => {
      return `
            <div class="product">
                <img src="${product.image}" alt="${product.name}"> <!-- Update with the correct path -->
                <p>$${product.price} CAD</p>
                <div class="product-desc">
                    <span>${category}</span>
                    <h4>${product.name}</h4>
                    <div class="bundle">${product.bundle}</div>
                </div>
                <button onclick="addToCart('${product.name}', '${product.price}','${product.image}','${product.bundle}')">Add to Cart</button>
            </div>
        `;
    })
    .join("");

  // Update the products container
  const categoryProducts = document.getElementById("category-products");
  categoryProducts.innerHTML = productsHtml;
  categoryProducts.style.display = "flex"; // Show the products
}
let cartItems = [];
function addToCart(
  productName,
  productPrice,
  productImage,
  productBundle,
  category
) {
  console.log("hello");
  cartItems.push({
    name: productName,
    price: productPrice,
    image: productImage,
    bundle: productBundle,
    quantity: 1,
    category: category,
  });
  console.log(cartItems);
  updateCartDisplay();
  // const cartItems = document.getElementById('cart-items');
  // const item = document.createElement('div');
  // item.innerHTML = `
  //     <p>${productName} - $${productPrice}</p>
  // `
  // cartItems.appendChild(item);
}

function updateCartDisplay() {
  const cartBar = document.getElementById("cart-list");
  const cartContainer = document.getElementById("cart-list-container");
  console.log(cartItems.length);
  // Clear the current contents
  cartContainer.innerHTML = "";
  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }
  cartItems.forEach((item, index) => {
    console.log(item);
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
    <img src="${item.image}"></img>
        <div class="cart-middle-container">
            <div class="cart-item-desc">
                <span>${item.name}</span>
                <span class="bundle">${item.bundle}</span>
            </div>

            <div class = "quantity-container">
            <button class="change-quantity-btn" id="decrease-${index}">-</button>
            <span class="quantity-number" id="quantity-${index}">${item.quantity}</span>
            <button class="change-quantity-btn" id="increase-${index}">+</button>
                <button class="remove-item-btn"onclick="removeFromCart(${index})">Remove</button>
            </div>
        </div>

      <span>$${item.price} CAD</span>

    `;
    cartContainer.appendChild(itemElement);
    document
      .getElementById(`increase-${index}`)
      .addEventListener("click", () => changeQuantity(index, 1));
    document
      .getElementById(`decrease-${index}`)
      .addEventListener("click", () => changeQuantity(index, -1));
  });
  const checkoutButton = document.getElementById("checkout-button");
  if (cartItems.length === 0) {
    checkoutButton.style.display = "none";
  } else {
    checkoutButton.style.display = "block";
  }
  updateCartTotals();
}
function calculateSubtotal() {
  return cartItems
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);
}
function calculateSalesTax(subtotal) {
  return (subtotal * TAX_RATE).toFixed(2);
}
function calculateGrandTotal(subtotal, tax, deliveryCharge) {
  return (
    parseFloat(subtotal) +
    parseFloat(tax) +
    parseFloat(deliveryCharge)
  ).toFixed(2);
}
function updateCartTotals() {
  const subtotal = calculateSubtotal();
  console.log("SUB TOTAL:", subtotal);
  const tax = calculateSalesTax(subtotal);
  const grandTotal = calculateGrandTotal(subtotal, tax, DELIVERY_CHARGE);

  document.getElementById("cart-total").innerText = `$${subtotal}`;
  document.getElementById("tax-total").innerText = `$${tax}`;
  document.getElementById(
    "delivery-total"
  ).innerText = `$${DELIVERY_CHARGE.toFixed(2)}`;
  document.getElementById("grand-total").innerText = `$${grandTotal}`;

  document.getElementById("checkout-cart-total").innerText = `$${subtotal}`;
  document.getElementById("checkout-tax-total").innerText = `$${tax}`;
  document.getElementById(
    "checkout-delivery-total"
  ).innerText = `$${DELIVERY_CHARGE.toFixed(2)}`;
  document.getElementById("checkout-grand-total").innerText = `$${grandTotal}`;
}
function changeQuantity(index, delta) {
  if (cartItems[index].quantity + delta > 0) {
    cartItems[index].quantity += delta;
    updateCartDisplay(); // Update the display after changing the quantity
  }
}
function removeFromCart(index) {
  // Set the message in the popup
  document.getElementById("confirmation-message").innerText =
    "Are you sure you want to remove this item from the cart?";

  // Show the popup
  document.getElementById("confirmation-popup").style.display = "grid";

  // Event listener for confirm remove
  document.getElementById("confirm-remove").onclick = function () {
    // Remove the item and update cart display
    cartItems.splice(index, 1);
    updateCartDisplay();
    document.getElementById("confirmation-popup").style.display = "none";
  };

  // Event listener for cancel remove
  document.getElementById("cancel-remove").onclick = function () {
    document.getElementById("confirmation-popup").style.display = "none";
  };
}

function calculateCartTotal() {
  return cartItems
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2); // toFixed(2) to format it as a price
}

// Optionally, pre-load the first category
// window.onload = function () {
//   showCategory("Vegetables"); // Replace 'Vegetables' with your default category
// };

document
  .getElementById("location-submit")
  .addEventListener("click", function () {
    var location = document.getElementById("location-input").value;
    if (location) {
      if (storeLocations.includes(location)) {
        sessionStorage.setItem("userLocation", location);
        document.getElementById("location-popup").style.display = "none";
      } else {
        alert("Location not recognized. Please enter a valid location.");
      }
    } else {
      alert("Please enter a location");
    }
  });

// window.onload = function () {
//   var userLocation = sessionStorage.getItem("userLocation");
//   if (!userLocation) {
//     document.getElementById("location-popup").style.display = "grid";
//   }
// };
function disableScrolling() {
  document.body.classList.add("no-scroll");
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  document.body.classList.remove("no-scroll");
  window.onscroll = function () {};
}

document
  .getElementById("location-submit")
  .addEventListener("click", function () {
    var location = document.getElementById("location-input").value;
    if (location) {
      sessionStorage.setItem("userLocation", location);
      document.getElementById("location-popup").style.display = "none";
      enableScrolling();
    } else {
      alert("Please enter a location");
    }
  });

window.onload = function () {
  var userLocation = sessionStorage.getItem("userLocation");
  if (!userLocation) {
    document.getElementById("location-popup").style.display = "block";
    disableScrolling();
  }
};
document
  .querySelector(".search-button")
  .addEventListener("click", searchProducts);
function searchProducts() {
  const searchText = document
    .querySelector(".search-input")
    .value.trim()
    .toLowerCase();
  let productFound = false;

  for (const category in productsData) {
    const product = productsData[category].find(
      (product) => product.name.toLowerCase() === searchText
    );
    if (product) {
      productFound = true;
      showAddToCartPopup(
        product.name,
        product.price,
        product.image,
        product.bundle
      );
      break;
    }
  }

  if (!productFound) {
    alert("Product not found");
  }
}

// Assuming productsData is your data object from earlier

function showRecommendations(searchText) {
  const recommendations = document.getElementById("search-recommendations");
  recommendations.innerHTML = ""; // Clear existing recommendations
  recommendations.style.display = "none"; // Hide initially

  if (searchText.length === 0) return; // Don't show recommendations if input is empty

  // Search for products
  for (const category in productsData) {
    productsData[category].forEach((product) => {
      if (product.name.toLowerCase().includes(searchText.toLowerCase())) {
        const div = document.createElement("div");
        div.textContent = product.name;
        div.onclick = () =>
          showAddToCartPopup(
            product.name,
            product.price,
            product.image,
            product.bundle
          );
        recommendations.appendChild(div);
      }
    });
  }

  if (recommendations.childElementCount > 0) {
    recommendations.style.display = "block"; // Show if there are recommendations
  }
}
function showAddToCartPopup(
  productName,
  productPrice,
  productImage,
  productBundle
) {
  // Set the message in the popup
  document.getElementById(
    "popup-message"
  ).innerText = `Add ${productName} to the cart?`;
  const itemDetailsDiv = document.querySelector(".popup-item-details");
  itemDetailsDiv.innerHTML = ""; // Clear previous content
  const img = document.createElement("img");
  const price = document.createElement("div");
  img.src = productImage;
  itemDetailsDiv.appendChild(img);

  const priceDiv = document.createElement("div");
  priceDiv.textContent = `Price: $${productPrice}`;
  itemDetailsDiv.appendChild(priceDiv);
  // Show the popup
  document.getElementById("add-to-cart-popup").style.display = "grid";

  // Event listener for confirm add
  document.getElementById("confirm-add").onclick = function () {
    addToCart(productName, productPrice, productImage, productBundle);
    document.getElementById("add-to-cart-popup").style.display = "none";
  };

  // Event listener for cancel
  document.getElementById("cancel-add").onclick = function () {
    document.getElementById("add-to-cart-popup").style.display = "none";
  };
}
function searchAndAddToCart() {
  console.log("Fet");
  const searchText = document.getElementById("search-input").value;
  let productFound = null;

  for (const category in productsData) {
    const product = productsData[category].find(
      (p) => p.name.toLowerCase() === searchText.toLowerCase()
    );
    if (product) {
      productFound = product;
      break;
    }
  }

  if (productFound) {
    console.log("Product found", productFound);
    document.getElementById(
      "popup-message"
    ).innerText = `Add ${productFound.name} to the cart?`;
    document.getElementById("add-to-cart-popup").style.display = "grid";

    // Event listener for confirm add
    document.getElementById("confirm-add").onclick = function () {
      addToCart(
        productFound.name,
        productFound.price,
        product.image,
        product.bundle
      );
      document.getElementById("add-to-cart-popup").style.display = "none";
    };

    // Event listener for cancel
    document.getElementById("cancel-add").onclick = function () {
      document.getElementById("add-to-cart-popup").style.display = "none";
    };
  } else {
    // Handle case when product is not found
    alert("Product not found");
  }
}
function checkoutBtn() {
  const recommendations = document.getElementById("search-recommendations");
  recommendations.innerHTML = ""; // Clear existing recommendations
  recommendations.style.display = "none"; // Hide initially
  console.log("cartt");
  if (cartItems.length === 0) {
    alert("Your cart is empty.");
  } else {
    document.getElementById("checkout-confirmation-popup").style.display =
      "grid";
  }
  document
    .getElementById("confirm-checkout")
    .addEventListener("click", function () {
      document.getElementById("checkout-confirmation-popup").style.display =
        "none";
      document.getElementById("cart-total-container").style.display = "none";
      document.getElementById("checkout-button").style.display = "none";
      document.getElementById("cart-list-container").style.display = "none";
      document.getElementById("loading-screen-container").style.display =
        "grid";

      setTimeout(() => {
        document.getElementById("loading-screen-container").style.display =
          "none";
      }, 2000);

      document.getElementById("back-to-cart-container").style.display = "block";
      document.getElementById("cart-delivery-container").style.display =
        "block";

      // You might want to clear the rt or redirect to a payment page
    });

  document
    .getElementById("cancel-checkout")
    .addEventListener("click", function () {
      console.log("cancel");
      document.getElementById("checkout-confirmation-popup").style.display =
        "none";
    });
}
var userLocation = sessionStorage.getItem("userLocation");
document.getElementById("location-drop-off").style.display = "block";
document.getElementById("location-drop-off").innerText = `${userLocation}`;

document.getElementById("pickupButton").addEventListener("click", function () {
  DELIVERY_CHARGE = 0;
  updateCartTotals();
  document.getElementById("pickdrop-header").innerText = "Pick up location:";
  document.getElementById("location-drop-off").style.display = "block";
  document.getElementById("location-drop-off").innerText = `${userLocation}`;
  document.getElementById("locationInput").style.display = "none";
  sessionStorage.setItem("selectedStore", selectedStore);
});

document.getElementById("dropoffButton").addEventListener("click", function () {
  DELIVERY_CHARGE = 10;
  updateCartTotals();
  document.getElementById("pickdrop-header").innerText = "Drop off location";
  document.getElementById("location-drop-off").style.display = "none";
  // });
  document.getElementById("locationInput").style.display = "block";
  sessionStorage.setItem("selectedHomeAddress", selectedHomeAddress);
});
function backToCart() {
  // Hide other containers, e.g., the checkout or delivery container
  document.getElementById("cart-delivery-container").style.display = "none";
  document.getElementById("checkout-confirmation-popup").style.display = "none";
  // ... hide other containers as needed

  // Show the cart list container
  document.getElementById("cart-list-container").style.display = "block";

  // You might also want to show the cart total and checkout button again
  document.getElementById("cart-total-container").style.display = "block";
  document.getElementById("checkout-button").style.display = "block";
}

document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var cardNumber = document.getElementById("cardNumber").value;
    var cardName = document.getElementById("cardName").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;

    if (
      cardNumber.length < 19 ||
      cardName === "" ||
      expiryDate.length < 5 ||
      cvv.length < 3
    ) {
      alert("Please fill out all fields correctly.");
      return;
    }

    // Process the payment here
    alert("Payment chosen successfully!");
  });

function showLocationRecommendations(value) {
  const recommendationsDiv = document.getElementById(
    "location-recommendations"
  );
  recommendationsDiv.innerHTML = ""; // Clear previous recommendations

  if (value) {
    const filteredLocations = dummyLocations.filter((location) =>
      location.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredLocations.length > 0) {
      // Show recommendations if there are matches
      filteredLocations.forEach((location) => {
        const div = document.createElement("div");
        div.textContent = location;
        div.onclick = () => selectLocation(location);
        sessionStorage.setItem("selectedHomeAddress", location);
        recommendationsDiv.appendChild(div);
      });
      recommendationsDiv.style.display = "block"; // Make sure to display the div
    } else {
      // Hide recommendations if there are no matches
      recommendationsDiv.style.display = "none";
    }
  } else {
    // Hide recommendations if the input is empty
    recommendationsDiv.style.display = "none";
  }
}

function selectLocation(location) {
  const locationInput = document.getElementById("locationInput");
  locationInput.value = location;

  // Clear recommendations
  document.getElementById("location-recommendations").innerHTML = "";
}

document.getElementById("locationInput").addEventListener("input", (e) => {
  showLocationRecommendations(e.target.value);
});

function showStoreRecommendations(value) {
  const recommendationsDiv = document.getElementById("store-recommendations");
  recommendationsDiv.innerHTML = ""; // Clear previous recommendations

  if (value) {
    const filteredLocations = storeLocations.filter((location) =>
      location.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredLocations.length > 0) {
      // Show recommendations if there are matches
      filteredLocations.forEach((location) => {
        const div = document.createElement("div");
        div.textContent = location;
        div.onclick = () => selectStoreLocation(location);
        sessionStorage.setItem("selectedStore", location);
        recommendationsDiv.appendChild(div);
      });
      recommendationsDiv.style.display = "block"; // Make sure to display the div
    } else {
      // Hide recommendations if there are no matches
      recommendationsDiv.style.display = "none";
    }
  } else {
    // Hide recommendations if the input is empty
    recommendationsDiv.style.display = "none";
  }
}

function selectStoreLocation(location) {
  const locationInput = document.getElementById("location-input");
  locationInput.value = location;

  // Clear recommendations
  document.getElementById("store-recommendations").innerHTML = "";
}

document.getElementById("location-input").addEventListener("input", (e) => {
  showStoreRecommendations(e.target.value);
});

function updateConfirmButtonState() {
  var cardNumber = document.getElementById("cardNumber").value;
  var expiryDate = document.getElementById("expiryDate").value;
  var cvv = document.getElementById("cvv").value;
  var preferredDate = document.getElementById("preferred-date").value;
  var preferredTime = document.getElementById("preferred-time").value;
  var confirmButton = document.getElementById("confirm-order-button"); // Add the correct ID

  var isFormComplete =
    cardNumber !== "" &&
    expiryDate !== "" &&
    cvv !== "" &&
    preferredDate !== "" &&
    preferredTime !== "";
  confirmButton.disabled = !isFormComplete;
}

document
  .getElementById("cardNumber")
  .addEventListener("input", updateConfirmButtonState);
document
  .getElementById("expiryDate")
  .addEventListener("input", updateConfirmButtonState);
document
  .getElementById("cvv")
  .addEventListener("input", updateConfirmButtonState);
document
  .getElementById("preferred-date")
  .addEventListener("input", updateConfirmButtonState);
document
  .getElementById("preferred-time")
  .addEventListener("input", updateConfirmButtonState);
document.getElementById("confirm-order-button").disabled = "true";
document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var cardNumber = document.getElementById("cardNumber").value;
    var cardName = document.getElementById("cardName").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
    const cardDetails = {
      cardNumber: cardNumber,
      cardName: cardName,
      expiryDate: expiryDate,
      cvv: cvv,
    };
    sessionStorage.setItem("cardDetails", cardDetails);
  });

function confirmOrder() {
  document.getElementById("loading-screen-truck").style.display = "grid";

  setTimeout(() => {
    document.getElementById("loading-screen-truck").style.display = "none";

    const shoppingCart = cartItems.map((item) => {
      return {
        name: item.name,
        image: item.image,
        quantity: item.quantity,
      };
    });

    sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Redirect happens after the timeout now
    window.location.href = "nextpage.html";
  }, 3000);
}

function showPreviouslyBought() {
  // Update the category title
  document
    .getElementById("previously-bought-wrapper")
    .querySelector("h3").innerText = "Previously Bought Items";

  // Get the container
  const container = document.getElementById("prev-products");
  container.innerHTML = ""; // Clear existing content

  // Get previously bought items from session storage
  const prevItems = JSON.parse(sessionStorage.getItem("cartItems"));

  // Check if there are any items
  if (prevItems && prevItems.length > 0) {
    // Generate HTML for each product and append it
    prevItems.forEach((product) => {
      console.log(product);
      const productHtml = `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <p>$${product.price} CAD</p>
                    <div class="product-desc">
                        <h4>${product.name}</h4>
                        <div class="bundle">${product.bundle}</div>
                    </div>
                    <button onclick="addToCart('${product.name}', '${product.price}', '${product.image}', '${product.bundle}')">Add to Cart</button>
                </div>
            `;
      container.insertAdjacentHTML("beforeend", productHtml);
    });
  } else {
    container.innerHTML = "<p>No previously bought items found.</p>";
  }

  // Set the display style for the container
  container.style.display = "flex";
}


function updateConfirmButtonState() {
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
    var preferredDate = document.getElementById("preferred-date").value;
    var preferredTime = document.getElementById("preferred-time").value;
    var confirmButton = document.getElementById("confirm-order-button");
  
    var isFormComplete =
      cardNumber !== "" &&
      expiryDate !== "" &&
      cvv !== "" &&
      preferredDate !== "" &&
      preferredTime !== "";
    confirmButton.disabled = !isFormComplete;
  }
  
  function autofillSavedCard() {
    document.getElementById("cardNumber").value = "1234 5678 9237 2289";
    document.getElementById("cardName").value = "Ben Garber";
    document.getElementById("expiryDate").value = "09/27";
    document.getElementById("cvv").value = "457";
    updateConfirmButtonState(); // Update the state of the confirm button
  }
  
  document.getElementById("saved-card-button").addEventListener("click", function () {
    autofillSavedCard();
  });




document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  // For example, code to toggle the sidebar
});


