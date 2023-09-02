// Food data (replace this with your list of food items)
const foodItems = [
    { name: "Pizza", imageUrl: "https://img.freepik.com/free-photo/top-view-pizza-with-red-pepper-tomato-sauce-with-copy-space_23-2148765350.jpg?w=360&t=st=1693614805~exp=1693615405~hmac=832e9413a8bdcc6c44f439482325009ce93c22374679b48ba9c2cf40a61d4f42", price: "$10.99" },
    { name: "Burger", imageUrl:"https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=360&t=st=1693615515~exp=1693616115~hmac=05e20751f4e112be5db7515b977c7c18b6fb7672c702cfba7afbc4eb8b5bffa6", price: "$7.99" },
    { name: "Salad", imageUrl:"https://img.freepik.com/free-photo/top-view-homemade-delicious-salad-with-many-ingredients-plate-black-green-mix-colors-background_179666-20005.jpg?w=360&t=st=1693615692~exp=1693616292~hmac=3ce85e97333aab77e4b610da2308b0af91f3b5f0fcf31d4ab26d8ad9c9b29ea0", price: "$6.99" },
    { name: "Sushi", imageUrl: "sushi.jpg", price: "$14.99" },
    { name: "Ice Cream", imageUrl: "icecream.jpg", price: "$4.99" }
];

// Function to display the list of food items
function displayFoodItems() {
    const results = document.getElementById('results');
    const resultList = foodItems.map(item => `
        <div class="food-item">
            <img src="${item.imageUrl}" alt="${item.name}" onclick="openLink('${item.name}')">
            <p onclick="openLink('${item.name}')">${item.name}</p>
            <p>Price: ${item.price}</p>
        </div>
    `).join('');
    results.innerHTML = `<h2>Food Items:</h2><div class="food-items">${resultList}</div>`;
}

// Call the displayFoodItems function when the page loads
window.addEventListener('load', displayFoodItems);

// Function to open a link (replace with your desired link)
function openLink(foodName) {
    // You can define the links here based on the foodName
    const links = {
        "Pizza": "https://example.com/pizza-link",
        "Burger": "https://example.com/burger-link",
        "Salad": "https://example.com/salad-link",
        "Sushi": "https://example.com/sushi-link",
        "Ice Cream": "https://example.com/ice-cream-link"
    };

    const link = links[foodName];

    // Open the link in a new tab or window
    if (link) {
        window.open(link, '_blank');
    }
}