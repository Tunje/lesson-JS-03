window.onload = function() {
    let price;
    price = prompt("Enter your price!",500);
    parseFloat(price);
    console.log("Your price: " + (price * 0.9))
    console.log("You saved: " + (price * 0.1))
};