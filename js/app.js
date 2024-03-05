document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor elements
   

    // Get the image elements
    const firstImage = document.getElementById("first-image");
    const secondImage = document.getElementById("second-image");
    const thirdImage = document.getElementById("third-image");

    // Get the list of image URLs
    const imageLinks = [
        "./201-lab11-assets-/assets/bag.jpg",
        "./201-lab11-assets-/assets/banana.jpg",
        "./201-lab11-assets-/assets/bathroom.jpg",
        "./201-lab11-assets-/assets/boots.jpg",
        "./201-lab11-assets-/assets/breakfast.jpg",
        "./201-lab11-assets-/assets/bubblegum.jpg",
        "./201-lab11-assets-/assets/chair.jpg",
        "./201-lab11-assets-/assets/cthulhu.jpg",
        "./201-lab11-assets-/assets/dog-duck.jpg",
        "./201-lab11-assets-/assets/dragon.jpg",
        "./201-lab11-assets-/assets/pen.jpg",
        "./201-lab11-assets-/assets/pet-sweep.jpg",
        "./201-lab11-assets-/assets/scissors.jpg",
        "./201-lab11-assets-/assets/shark.jpg",
        "./201-lab11-assets-/assets/sweep.png",
        "./201-lab11-assets-/assets/tauntaun.jpg",
        "./201-lab11-assets-/assets/unicorn.jpg",
        "./201-lab11-assets-/assets/water-can.jpg",
        "./201-lab11-assets-/assets/wine-glass.jpg"
    ];

    // Function to select a random image URL
    function getRandomImageUrl() {
        return imageLinks[Math.floor(Math.random() * imageLinks.length)];
    }

    // Update image sources
    firstImage.src = getRandomImageUrl();
    secondImage.src = getRandomImageUrl();
    thirdImage.src = getRandomImageUrl();
});
