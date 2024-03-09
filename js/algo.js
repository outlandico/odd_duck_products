let productContainer = document.getElementById('products');// Define global variables for votes and views
console.log(productContainer)
productContainer.addEventListener('click', eventHandler);

let votes = 0;
let views = 0;
let maxVotes = 25;

// Define a constructor function for Product objects
function Product(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.timesShown = 0;
    this.timesClicked = 0;
}

// Define an array to hold all products
let products = [];
// Array to store the previous set of products
let previousProductArray = [];
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

function savedProducts() {
    let stringifiedProducts = JSON.stringify(products);
    localStorage.setItem('products', stringifiedProducts);
}

function loadProducts(){
    let savedProducts = localStorage.getItem('products');
    if( savedProducts ) {
        let parsedProducts = JSON.parse(savedProducts);
        for( let product of parsedProducts) {
            let newProduct = new Product( product.name, product.imagePath);
            newProduct.timesClicked = product.timesClicked;
            newProduct.timesShown = product.timesShown;
            // products.push(newProduct);
        }
        products = parsedProducts;
    }
    else {
        generateThreeUniqueProducts();
    }
}
function getRandomNumber() {
    return Math.floor(Math.random() * products.length)
}
// Function to generate three unique product images
function generateThreeUniqueProducts() {

    //     return uniqueProducts;
    let product1, product2, product3;

    do {
        product1 = getRandomNumber();
        product2 = getRandomNumber();
        product3 = getRandomNumber();

    }
    while (product1 === product2 || product1 === product3 || product2 === product3 || previousProductArray.includes(product1) || previousProductArray.includes(product2) || previousProductArray.includes(product3));
    previousProductArray = [product1, product2, product3]

    let duckProduct1 = products[product1]
    let duckProduct2 = products[product2]
    let duckProduct3 = products[product3]
    console.log(duckProduct1.name, duckProduct2.name, duckProduct3.name);
    duckProduct1.timesShown++;
    duckProduct2.timesShown++;
    duckProduct3.timesShown++;

    let duck1Image = document.querySelector('.product1 img')
    let duck2Image = document.querySelector('.product2 img')
    let duck3Image = document.querySelector('.product3 img')

    duck1Image.src = duckProduct1.imagePath
    duck2Image.src = duckProduct2.imagePath
    duck3Image.src = duckProduct3.imagePath

    duck1Image.alt = duckProduct1.name
    duck2Image.alt = duckProduct2.name
    duck3Image.alt = duckProduct3.name
}

function eventHandler(event) {
    let productName = event.target.alt;
    console.log(productName);
    for (let i = 0; i < products.length; i++) {
        if (products[i].name === productName) {
            products[i].timesClicked++;
            break;
        }
    }
    votes++;
    if (votes >= maxVotes) {
        savedProducts();
        renderChart();
        productContainer.removeEventListener('click', eventHandler);
    }
    else {
        generateThreeUniqueProducts();
    }
}
// Add event listener to the container for product images after DOM content is loaded
function renderChart() {
    // Populate productNames array with the names of products
    const productNames = products.map(product => product.name);

    // Create the bar chart using Chart.js
    const ctx = document.getElementById('bar-chart').getContext('2d');
    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productNames, // Use productNames as labels
            datasets: [
                {
                    label: 'Votes',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    data: products.map(product => product.timesClicked)
                },
                {
                    label: 'Views',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    data: products.map(product => product.timesShown)
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
generateThreeUniqueProducts();
loadProducts();


