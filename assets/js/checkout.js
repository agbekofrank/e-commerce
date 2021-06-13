let checkoutBtn = document.getElementById('checkoutBtn');
let checkout = document.getElementById('checkout');
let nItems = document.getElementById('numOfItems');
let itemsBought = window.localStorage;
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let oneImg = document.getElementById('one-img');
let oneData = document.getElementById('one-data');
let its = document.getElementById('its');
console.log(itemsBought.length);
if(nItems){
nItems.innerText = itemsBought.length;
for(let i = 0; i < itemsBought.length; i++){
    let item = JSON.parse(itemsBought.getItem(i));
    let img = document.createElement('img');
    let name = document.createElement('span');
    let price = document.createElement('span');
    let size = document.createElement('span');
    let color = document.createElement('span');
    let qty = document.createElement('input');
    let unitPrice = document.createElement('span');
    let totalPrice = document.createElement('span');
    qty.type = 'number';
    qty.placeholder = itemsBought.length;
    qty.style.width = '30px';
    qty.style.margin = '10px';
    img.src = item.images[0];
    name.innerText = item.name;
    price.innerText = item.price;
    size.innerText = 'Size: ' + item.sizes[1];
    color.innerText = item.colors[0].title;

    qty.innerText = itemsBought.length;
    unitPrice.innerText = '@ $' + item.price + 'per unit';
    totalPrice.innerText = '$' + item.price * itemsBought.length;
    totalPrice.className = 'h4';

    its.innerText = localStorage.length;

    oneImg.appendChild(img);
    oneData.appendChild(name);
    oneData.appendChild(color);
    oneData.appendChild(price);
    oneData.appendChild(size);

    two.appendChild(qty);
    two.appendChild(unitPrice);
    three.appendChild(totalPrice);


    console.log(img);
}



}
// checkoutBtn.onclick = function (){
//     // checkout.style.display = 'block';

//     window.location.href = './checkout.html';
// }