// JavaScript (script.js)

// Define global variables for votes and views
let votes = 0;
let views = 0;

// Define a variable to store the name of the product that received a vote
let votedProduct = '';

// Define an object to store the total clicks for each product
let productClicks = {};

// Function to increment votes
function upvote(productName) {
    if (votes < 25) {
        votes++;
        console.log("Vote recorded for " + productName);
        // Update the votedProduct variable
        votedProduct = productName;
    } else {
        console.log("You have reached the vote limit.");
    }
}

// Function to increment views
function incrementViews() {
    if (views < 10) {
        views++;
        console.log("View recorded");
    } else {
        console.log("You have reached the view limit.");
    }
}

// Function to display the statistics
function displayStats() {
    console.log("Votes: " + votes);
    console.log("Views: " + views);
    // Display the voted product along with the votes
    document.querySelector('.votes-total').textContent = "Votes: " + votes + (votedProduct ? " for " + votedProduct : '');
    document.querySelector('.views-total').textContent = "Views: " + views;

    // Display the list of products and their total clicks
    const clicksList = document.querySelector('.clicks-list');
    clicksList.innerHTML = '';
    for (const productName in productClicks) {
        const listItem = document.createElement('li');
        listItem.textContent = productName + ': ' + productClicks[productName] + ' clicks';
        clicksList.appendChild(listItem);
    }
}

// Define a constructor function for Product objects
function Product(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.timesShown = 0;
    this.timesClicked = 0;
}

// Define an array to hold all products
const products = [];

// Add product objects to the array
products.push(new Product('Bag', './images/bag.jpg'));
products.push(new Product('Banana', './images/banana.jpg'));
products.push(new Product('Bathroom', './images/bathroom.jpg'));
products.push(new Product('Boots', './images/boots.jpg'));
products.push(new Product('Breakfast', './images/breakfast.jpg'));
products.push(new Product('Bubblegum', './images/bubblegum.jpg'));
products.push(new Product('Chair', './images/chair.jpg'));
products.push(new Product('Cthulhu', './images/cthulhu.jpg'));
products.push(new Product('Dog-duck', './images/dog-duck.jpg'));
products.push(new Product('Dragon', './images/dragon.jpg'));
products.push(new Product('Pen', './images/pen.jpg'));
products.push(new Product('Pet-sweep', './images/pet-sweep.jpg'));
products.push(new Product('Scissors', './images/scissors.jpg'));
products.push(new Product('Shark', './images/shark.jpg'));
products.push(new Product('Sweep', './images/sweep.jpg'));
products.push(new Product('Tauntaun', './images/tauntaun.jpg'));
products.push(new Product('Unicorn', './images/unicorn.jpg'));
products.push(new Product('Water-can', './images/water-can.jpg'));
products.push(new Product('Wine-glass', './images/wine-glass.jpg'));

// Function to generate three unique product images
function generateThreeUniqueProducts() {
    const uniqueProducts = [];
    while (uniqueProducts.length < 3) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const product = products[randomIndex];
        if (!uniqueProducts.includes(product)) {
            uniqueProducts.push(product);
            product.timesShown++; // Increment times shown
        }
    }
    return uniqueProducts;
}

// Function to display the products
function displayProducts(products) {
    const container = document.querySelector('.images-container');
    container.innerHTML = ''; // Clear previous images
    products.forEach((product, index) => {
        const img = document.createElement('img');
        img.src = product.imagePath;
        img.alt = product.name;
        img.id = `product-${index}`;
        img.addEventListener('click', function () {
            upvote(product.name); // Pass the product name to the upvote function
            incrementViews(); // Increment views
            product.timesClicked++;
            // Increment the total clicks for the product
            if (product.name in productClicks) {
                productClicks[product.name]++;
            } else {
                productClicks[product.name] = 1;
            }
            const newProducts = generateThreeUniqueProducts();
            displayProducts(newProducts);
            displayStats(); // Update stats
        });
        container.appendChild(img);
    });
}

// Add event listener to the container for product images after DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initial display of three unique products
    const initialProducts = generateThreeUniqueProducts();
    displayProducts(initialProducts);
    displayStats(); // Display initial stats
});


