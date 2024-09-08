// Simple cart system
let cartCount = 0;

// Function to handle "Add to Cart" button click
function addToCart(productId) {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert("Product " + productId + " added to the cart!");
}

// Get all add-to-cart buttons
const cartButtons = document.querySelectorAll('.add-to-cart');

// Add event listeners to all add-to-cart buttons
cartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productId = this.getAttribute('data-product-id');
        addToCart(productId);
    });
});

//get dropdown
let myContent = document.getElementById('dropdown-content');

function toggleMenu(){
    if(myContent.style.display === 'none'){
        myContent.style.display = 'block';
    }
    else{
        myContent.style.display = 'none';
    }
}
