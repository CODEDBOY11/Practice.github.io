// Food data (Display list of Food items in menu)
const foodItems = [
    {
        name: "Pizza",
        imageUrl: "https://img.freepik.com/free-photo/top-view-pizza-with-red-pepper-tomato-sauce-with-copy-space_23-2148765350.jpg?w=360&t=st=1693614805~exp=1693615405~hmac=832e9413a8bdcc6c44f439482325009ce93c22374679b48ba9c2cf40a61d4f4",
        price: "₦600.00",
        link: "https://example.com/pizza-link"
    },
    {
        name: "Burger",
        imageUrl: "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?w=360&t=st=1693615515~exp=1693616115~hmac=05e20751f4e112be5db7515b977c7c18b6fb7672c702cfba7afbc4eb8b5bfa6",
        price: "$8.99",
        link: "https://example.com/burger-link"
    },
    {
        name: "Salad",
        imageUrl: "https://img.freepik.com/free-photo/top-view-homemade-delicious-salad-with-many-ingredients-plate-black-green-mix-colors-background_179666-20005.jpg?w=360&t=st=1693615692~exp=1693616292~hmac=3ce85e97333aab77e4b610da2308b0af91f3b5f0fcf31d4ab26d8ad9c9b29ea0",
        price: "$6.99",
        link: "https://example.com/salad-link"
    },
    // Add more food items here...
    {
        name: "Jollof Rice",
        imageUrl: "https://img.freepik.com/free-photo/top-view-pizza-with-red-pepper-tomato-sauce-with-copy-space_23-2148765350.jpg?w=360&t=st=1693614805~exp=1693615405~hmac=832e9413a8bdcc6c44f439482325009ce93c22374679b48ba9c2cf40a61d4f42",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Fried Rice",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2Eu0w-lBH8FLeLC-hQkItEsWHpDjXBrJFg&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Amala",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7d_jaF3Ly54m-8cx9RY1-UxL8RwWApcBnAg&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Iyan(pounded yam)",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSAmRxI60OoEsz-pMhNSFi0wMBSRt_BhWVHg&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Fufu",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4qamlpaNgVZAgG2yYVpAeKH9mKCipCphWw&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Eba",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGGB65KuHII6MagZFSgjcAj11H-FfW9txqw&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Goat Meat(Ogunfe)",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iPTJsOvGveuOwoTJnJTBTtnMz2o_D36SwA&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Ofada Rice",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQAVsYj2OGuv_IWmDwKPD-Q-CWYKThsczhw&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Edikang Ikong ",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUK0KQWDzs25zZB3_Ag9mmV17oMgQ0aCYM6w&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Vegetable(Efo riro)",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlig_DPQ4NNVRezMZE05QF70f0pxWtY70xQ&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "White Rice and Stew",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsgxkLfm3t1pL161-DV85GrhIWbq5KgdhkDQ&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Porridge",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagDXhA6auVuwc2wjXclzjz9ePReTVaCB3ug&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Periwinkle Soup",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHIn2Tw79GYbqAKliPh3oOUFUZ4G29ZYVLw&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Full Chicken",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyM5bELponfSi2APglJSO8mEHl5xZug0tIA&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Pepper Soup",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDKJBAuLuWY8Mw2EDxvhNTOn9DpGhf84dFw&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Afang Soup",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTch_RjHm46OjAJq6bDUIQZbumfehBMBMlyNw&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Sharwama",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnmqH_wks6Ugrvt18OEBAbX1FDLI1I7Q9qw&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Samosa",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIikY9bhd8XvWaoRh4e36x2seYiC5mbOVuEA&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Tuwo and Gbegiri",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XWmzY9vXacFHAD5sR1e_6lWvwuqCZhyx5w&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Meat Pie",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyyJ47JcnFZsWnHLysJFiuoXHLhttB1Zn7g&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Nsala Soup",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAYncZmGTfqEU7YZFc_qHoVJjCxkOkRHI0pw&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Banga Soup",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVimuQnBV8DZW5m2hcqI2mVE1XP40ZLOJyvA&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Isi Ewu",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXTOvOgiFUut22hS8wkFe-bN7rQH8TQ5ao_Q&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Egusi soup",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRIna9a8DOvOImI_Jf2E7hiGA2PlWnVWJDQ&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Ogbono Soup",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHgIS0PrZxXpr2qafBIFuJBhcJo6hD1PO7Q&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Ewedu Soup",
        imageUrl:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCHxjdeOGFJuB_25D13FUehJdtJaC0zIhyw&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Okra Soup",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Okro_soup_with_shrimps%2Cdried_fish%2Ccow_leg_and_tail_with_meat.jpg",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Peanut Rice",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6WVZJBsfMLKgTE1MRs7CaxpRCjrrocDbrw&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Coconut Rice",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0mZ0FxVBMLm55kz6oug5Q3v1UYr0i0Uwgg&usqp=CAU",
        price:"$45",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Honey Cake",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjz5Jm4ltHOp5czqLfCjt73piyof_wbbM78w&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Strawberry juice",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5zRyCpDTNLpM97jEF9G3VmBmEdJ-nQV8E0Q&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Banana Biscuit",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8pO-FklI0xLQsj69AiD6Gyabs19p2tevdg&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Plantain Chips",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgs4sVGjmS6m3zBrLGZ8cmNDBqripOeBV6cg&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Zobo juice",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdEaq7iE6wPlcvek8TLjYXG13dx4TibucXw&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Tropical Juice",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFKz31OrbrajdZi71lwmwqkBKWo__LimKfQ&usqp=CAU",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
    {
        name: "Orange Juice",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAwsKIiPgkBoDC2DtuHxa1kaboMaxtoUsLQ&usqp=CAU",
        price: "$Y.YY",
        link: "https://example.com/another-food-item-link"
    },
    {
        name: "Soft Drinks",
        imageUrl: "https://cdn.punchng.com/wp-content/uploads/2017/03/29201341/soft-drinks.png",
        price: "$X.XX",
        link: "https://example.com/new-food-item-link"
    },
        
];

// Rest of your code remains the same...

// Function to perform the food search
function searchFood() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const matchingItems = foodItems.filter(item => item.name.toLowerCase().includes(searchInput));
    displayFoodItems(matchingItems);
    const results = document.getElementById('results');

    if (matchingItems.length === 0) {
        results.innerHTML = '<p>Sorry, food not available.</p>';
    }
}

// Function to display the list of food items
function displayFoodItems(items) {
    const results = document.getElementById('results');
    const resultList = items.map(item => `
        <div class="food-items">
            <img src="${item.imageUrl}" alt="${item.name}" onclick="openLink('${item.name}')">
            <p onclick="openLink('${item.name}')">${item.name}</p>
            <p>Price: ${item.price}</p>
        </div>
    `).join('');
    results.innerHTML = `<h2>Food Items:</h2><div class="food-items">${resultList}</div>`;
}

// Call the displayFoodItems function when the page loads
window.addEventListener('load', () => {
    displayFoodItems(foodItems);
});

// Function to open a link (replace with your desired link)
function openLink(foodName) {
    // You can define the links here based on the foodName
    const links = {
        "Pizza": "https://example.com/pizza-link",
        "Burger": "https://example.com/burger-link",
        "Salad": "https://example.com/salad-link",
        "Sushi": "https://example.com/sushi-link",
        "Ice Cream": "https://example.com/ice-cream-link",
        "Amala": "#"
        
    }; 

    const link = links[foodName];

    // Open the link in a new tab or window
    if (link) {
        window.open(link, '_blank');
    }
}

// Add an event listener to the search input to update the list as the user types
document.getElementById('searchInput').addEventListener('input', searchFood);