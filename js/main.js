var blueTshirt = {
  price:29.00,
  color:'Plain',
  inCart:false,
  title:'Crew Neck Tee',
}
var pinkTshirt = {
  price:19.00,
  color:'White',
  inCart:false,
  title:'Vneck Tee',
}
var orangeTshirt = {
  price:39.00,
  color:'Navy',
  inCart:false,
  title:'Pocket Tee',
}

// Array for the cart
var cart = [];

var total = 0;


// Accessing items from HTML
var subtotalBox = document.getElementById('subtotal');
var totalBox = document.getElementById('total');
var blueCart = document.getElementById('cartBlue');
var pinkCart = document.getElementById('cartPink');
var orangeCart = document.getElementById('cartOrange');
var cartBox = document.querySelector('.cartBox');
document.getElementById("date").innerHTML = "<h5>"+Date()+"</h5>";

function addToCart(price,color) { 

if (blueTshirt.inCart === false && color==='plain')
  {
    blueCart.className='active';
    blueTshirt.inCart=true;
    cart.push(blueTshirt);
    total=total+blueTshirt.price;
    subtotalBox.value = total;
    totalBox.value = calculateTotal(); 
  }
  else if(color === 'plain')
  {
    blueCart.className="click";
    blueTshirt.inCart=false;
    cart.splice(cart.indexOf(blueTshirt),1);
    total=total-blueTshirt.price;
    subtotalBox.value = total;
    totalBox.value = calculateTotal();
  }

  else if (pinkTshirt.inCart === false && color==='white')
  {
    pinkCart.className='active';
    pinkTshirt.inCart=true;
    cart.push(pinkTshirt);
    total=total+pinkTshirt.price;
    subtotalBox.value = total;
    totalBox.value = calculateTotal(); 
  }
  else if (color === 'white')
  {
    pinkCart.className="click";
    pinkTshirt.inCart=false;
    cart.splice(cart.indexOf(pinkTshirt),1);
    total=total-pinkTshirt.price;
    subtotalBox.value = total;
    totalBox.value = calculateTotal();
  }

  else if (orangeTshirt.inCart === false && color==='navy')
  {
    orangeCart.className='active';
    orangeTshirt.inCart=true;
    cart.push(orangeTshirt);
    total=total+orangeTshirt.price;
    subtotalBox.value = total;
    totalBox.value = calculateTotal(); 
  }
  else if (color === 'navy')
  {
    orangeCart.className="click";
    orangeTshirt.inCart=false;
    cart.splice(cart.indexOf(orangeTshirt),1);
    total=total-orangeTshirt.price;
    subtotalBox.value = total;
    totalBox.value = calculateTotal();
  }

  var HTML = "";

  cart.forEach(function(shirt){
    HTML+= "<h2 class='newItem'><span class='shirtColor'>"+shirt.color+"</span>"+ "<span class='shirtPrice'>$"+shirt.price+"</span>"+"<div class='shirtTitle'>"+shirt.title+"</div></h2>";
  });

  cartBox.innerHTML = HTML;

  console.log(cart);
}


function calculateTotal() {
  return (total*.065) + total;
}


