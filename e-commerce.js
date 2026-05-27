let cart = JSON.parse(localStorage.getItem('cart'))|| [];
function addToCart(name,price){
    cart.push({
     name : name,
     price : price
    
});
localStorage.setItem('cart', JSON.stringify(cart));
alert(name + 'added to cart');
}
function displayCart(){

    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('Total');

    if(!cartItems)
        return;

    cartItems.innerHTML = '';

    let totalprice = 0;

    cart.forEach((item,index) => {

        totalprice += item.price;

        let li = document.createElement('li');

        li.innerHTML = item.name + " - $" + item.price;

        cartItems.appendChild(li);

    });

    total.innerText = "Total: $" + totalprice;
}
function clearCart(){

    localStorage.removeItem('cart');

    cart = [];

    displayCart();
}

const search = document.getElementById('search');
search.addEventListener('keyup',function(){
    const value = search.value.toLowerCase();
    const product = document.querySelectorAll('.product-card');
    product.forEach(product =>{
    const text = product.innerText.toLowerCase();
    if(text.includes(value)){
        product.style.display = "";
    }
    else{
        product.style.display = "none";
    }
    })
})
displayCart();
function darkMode(){
    document.body.classList.toggle('dark');
}

