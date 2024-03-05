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

// Add more products as needed...

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
    const container = document.querySelector('.images');
    container.innerHTML = ''; // Clear previous images
    products.forEach(product => {
        const img = document.createElement('img');
        img.src = product.imagePath;
        img.alt = product.name;
        container.appendChild(img);
    });
}

// Function to handle click events on product images
function handleProductClick(event) {
    const clickedImageSrc = event.target.src;
    const clickedProduct = products.find(product => product.imagePath === clickedImageSrc);
    if (clickedProduct) {
        clickedProduct.timesClicked++; // Increment times clicked
        // Generate and display three new products
        const newProducts = generateThreeUniqueProducts();
        displayProducts(newProducts);
    }
}

// Add event listener to the container for product images
document.querySelector('.images').addEventListener('click', handleProductClick);

// Initial display of three unique products
const initialProducts = generateThreeUniqueProducts();
displayProducts(initialProducts);
