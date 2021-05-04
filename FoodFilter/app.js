// Menu

let menu = ["Kadhai Paneer", "Daal Makhni", "Chicken Changezi", "Veg Biryani", "Chhole Bhature",
    "Pizza", "Daal Fry", "Chicken roll", "Jeera Rice", "Onion Rings", "Garlic Breads", "Onion Pizza",
    "Rajma Chawal", "Garlic Naan", "Egg Curry", "Egg roll", "Egg Biryani"
];

function isVeg(food) {

    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1) {

        return false;

    } else {
        return true;
    }

}

function isOnionGarlicFree(food) {

    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic') !== -1) {

        return false;

    } else {
        return true;
    }
}


let vegMenu = menu.filter(isVeg);

let jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);

console.log(vegMenu);

console.log(jainMenu);