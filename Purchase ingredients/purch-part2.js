//cart 
//data list
let cartList = []

//merchandise
//data list
let merchandiseList = [
    {
        id: 1,
        product_image: 'cake.png',
        product_category: 'grains',
        product_name:'cake',
        product_price:'10'
    },
    {
        id: 2,
        product_image: 'cupcake.png',
        product_category: 'grains',
        product_name:'cupcake',
        product_price:'8'
    },
    {
        id: 3,
        product_image: 'naan.png',
        product_category: 'grains',
        product_name:'naan',
        product_price:'6'
    },
    {
        id: 4,
        product_image: 'pretzel.png',
        product_category: 'grains',
        product_name:'pretzel',
        product_price:'3'
    },

]

//merchandise
//data list
let previousList = [
    {
        id: 1,
        product_image: 'carrots.png',
        product_category: 'vegetables',
        product_name:'carrots',
        product_price:'5 per bundle'
    },
    {
        id: 2,
        product_image: 'chilli.png',
        product_category: 'vegetables',
        product_name:'red chilli peppers',
        product_price:'3 per lb.'
    },
    {
        id: 3,
        product_image: 'eggs.png',
        product_category: 'dairy',
        product_name:'12 pack eggs',
        product_price:'4'
    },
    {
        id: 4,
        product_image: 'naan.png',
        product_category: 'grains',
        product_name:'naan',
        product_price:'6'
    },

]




//add items to cart list
function addToCart(key) {
    if(cartList[key] == null){
        cartList[key] = JSON.parse(JSON.stringify(merchandiseList[key]));
        cartList[key].quantity = 1;     //default value of quantity when item add to cart 
        
    }
    reloadCart();
}


function reloadCart() {
    const cartContent = document.querySelector(".cart-content");
    cartContent.innerHTML = '';
    let totalPrice = 0;
    cartList.forEach((value, key) => {
        totalPrice = totalPrice + value.product_price;
        if(value != null) {
            var cartShopBox = document.createElement("div");
            cartShopBox.classList.add("cart-box");

            //build html structure to display item
            //add the item data to cart list and show it
            cartShopBox.innerHTML = `
            <img class="cart-img" src="${value.product_image}" alt="${value.product_name}">
            <div class="detail-box">
                <div class="cart-product-title">${value.product_name}</div>
                <div class="cart-price">$${value.product_price.toLocaleString()}</div>
                <div class="product-quantity">
                    <button class="more-quantity" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <span> 3 </span>
                    <button class="less-quantity" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            </div>
            <button class="cart-remove" onclick="removeCartItem(event, ${key})">Remove</button>
            `
            //add the item to the cart list and show it
            cartContent.appendChild(cartShopBox)
        }
    });

    //update total price in the cart
   // document.querySelector(".total-price").textContent = `${totalPrice.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const cart = document.querySelector(".cart");
    const cartIcon = document.querySelector(".material-symbols-outlined");
    const closeButton = document.getElementById("close-cart");
    const searchStoreContainer = document.querySelector(".search-store__container")
    const enterStoreBtn = document.getElementById("choose-store")
    function openCart() {
      cart.classList.remove("closed");
    }
  
    function closeCart() {
      cart.classList.add("closed");
    }
    function handleCloseSearchStore(){
        searchStoreContainer.classList.add("removePopup")
    }
    cartIcon.addEventListener("click", openCart);
    closeButton.addEventListener("click", closeCart);
    enterStoreBtn.addEventListener("click", handleCloseSearchStore);

    // product category
// data list
let productCategoryList = [
    {
        pc_image: 'fruit.png',
        pc_category: 'fruit',
        pc_name: 'berry'
    },

    {
        pc_image: 'milk.png',
        pc_category: 'dairy',
        pc_name: 'milk'
    },

    {
        pc_image: 'bread2.png',
        pc_category: 'grains',
        pc_name: 'bread'
    },



]



//load data to display for merch
const merchandiseContainer = document.querySelector(".merchandise-content");
function pushProductList(){
    merchandiseList.forEach((value, key) => {
        let newDiv = document.createElement("div")
        newDiv.classList.add("product-box")
        newDiv.innerHTML=`
        <div class="product-image">
        <img src="${value.product_image}" alt="${value.product_name}">

    </div>
    <div class="product-desc">
        <span class="product-category">${value.product_category}</span>
        <span class="product-title">${value.product_name}</span>
        <span class="price">${value.product_price}</span>
    </div>
    <button class="add-cart" onclick="addToCart(${key})">
        Add to Cart
    </button>`
    merchandiseContainer.appendChild(newDiv);
    })
}
pushProductList()




//load data to display for previously bought
const previousContainer = document.querySelector(".previous-content");
function pushPreviousList(){
    previousList.forEach((value, key) => {
        let newDiv = document.createElement("div")
        newDiv.classList.add("product-box")
        newDiv.innerHTML=`
        <div class="product-image">
        <img src="${value.product_image}" alt="${value.product_name}">

    </div>
    <div class="product-desc">
        <span class="product-category">${value.product_category}</span>
        <span class="product-title">${value.product_name}</span>
        <span class="price">${value.product_price}</span>
    </div>
    <button class="add-cart" onclick="addToCart(${key})">
        Add to Cart
    </button>`
    previousContainer.appendChild(newDiv);
    })
}
pushPreviousList()




//load data list to display for categories
const productCategoryContainer = document.querySelector(".product-category-container");
function pushProductCatList(){
    productCategoryList.forEach((value) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('content-item')
        newDiv.innerHTML = ` <div class="image-item">
        <img src="${value.pc_image}" alt="${value.pc_name}">

    </div>
    <div class="title-item">
        ${value.pc_name}
        
    </div>`
    productCategoryContainer.appendChild(newDiv);
    })
}

pushProductCatList();


    // Get references to the input element and the results list
    const searchInput = document.getElementById("searchInput");
    const resultsList = document.getElementById("resultsList");

    // Sample data for demonstration
    const items = [
        "Apples",
        "Bananas",
        "Oranges",
        "Strawberries",
        "Blueberries",
        "Milk",
        "Bread",
        "Eggs",
    ];

    // Function to perform the search and display results
    function performSearch() {
        const searchText = searchInput.value.toLowerCase();
        const filteredItems = items.filter(item => item.toLowerCase().includes(searchText));
        displayResults(filteredItems);
    }

    // Function to display search results in the list
    function displayResults(results) {
        resultsList.innerHTML = "";

        if (results.length === 0) {
            resultsList.innerHTML = "<li>No results found</li>";
        } else {
            results.forEach(result => {
                const listItem = document.createElement("li");
                listItem.textContent = result;
                resultsList.appendChild(listItem);
            });
        }
    }

    // Event listener to trigger the search on input change
    searchInput.addEventListener("input", performSearch);




//code for cart content switch
const cartContent = document.querySelector(".cart-content");
const checkoutButton = document.getElementById("btn-buy");
const userInfoForm = document.querySelector(".user-info-form");

// Function to toggle between cart content and user information form
function toggleCheckout() {
    if (cartContent.style.display === "block") {
        // Hide cart content and show user information form
        cartContent.style.display = "none";
        userInfoForm.style.display = "block";
        checkoutButton.textContent = "Confirm Order";
    } else {
        // Hide user information form and show cart content
        cartContent.style.display = "block";
        userInfoForm.style.display = "none";
        checkoutButton.textContent = "Checkout";
    }
}

// Event listener for the "Checkout" button
checkoutButton.addEventListener("click", toggleCheckout);


//call the reloadCart() function to initialise the cart content 
//reloadCart();

});


