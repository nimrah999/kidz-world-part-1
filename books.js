var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons=document.getElementsByClassName("button");
console.log(addButtons[0]);


//array of objects

var items=[
  {
  name: "This was our pact",
  quantity: 0,
  dollars: 7,
  cents: 49,
},
{
  name: "The famous five",
  quantity: 0,
  dollars: 4,
  cents: 59,
},
 {
  name: "Matlida",
  quantity: 0,
  dollars: 6,
  cents: 80,
},
 {
  name: "Harry Potter",
  quantity: 0,
  dollars: 10,
  cents: 0,
},
 {
  name: "For Young Readers",
  quantity: 0,
  dollars: 7,
  cents: 29,
},
{
  name: "Wimpy Kid - DIY",
  quantity: 0,
  dollars: 4,
  cents: 99,
},
{
  name: "Fing",
  quantity: 0,
  dollars: 7,
  cents: 49,
},
{
  name: "Blinky bill",
  quantity: 0,
  dollars: 4,
  cents: 59,
},
{
  name: "We are Giants",
  quantity: 0,
  dollars: 6,
  cents: 80,
},
{
  name: "You don't have a clue",
  quantity: 0,
  dollars: 10,
  cents: 0,
},
{
  name: "Beautiful You",
  quantity: 0,
  dollars: 7,
  cents: 29,
},
{
  name: "My Blue Sweater",
  quantity: 0,
  dollars: 4,
  cents: 99,
},
{
  name: "Bedtime Math",
  quantity: 0,
  dollars: 7,
  cents: 49,
},
{
  name: "Helen Keller",
  quantity: 0,
  dollars: 4,
  cents: 59,
},
{
  name: "The Whistling Schoolboy",
  quantity: 0,
  dollars: 6,
  cents: 80,
},
{
  name: "Gulliver's Travel",
  quantity: 0,
  dollars: 10,
  cents: 0,
},
{
  name: "Oliver Twist",
  quantity: 0,
  dollars: 7,
  cents: 29,
},
{
  name: "Cindrella",
  quantity: 0,
  dollars: 4,
  cents: 99,
},
{
  name: "Dart Board",
  quantity: 0,
  dollars: 17,
  cents: 49,
},
{
  name: "Connect 4",
  quantity: 0,
  dollars: 19,
  cents: 99,
},
{
  name: "Jenga",
  quantity: 0,
  dollars: 20,
  cents: 99,
},
{
  name: "Monopoly",
  quantity: 0,
  dollars: 19,
  cents: 49,
},
{
  name: "Snake Ladder",
  quantity: 0,
  dollars: 17,
  cents: 49,
},
{
  name: "Dancing Robot",
  quantity: 0,
  dollars: 19,
  cents: 99,
},
{
  name: "Car Set",
  quantity: 0,
  dollars: 20,
  cents: 99,
},
{
  name: "Kids Laptop",
  quantity: 0,
  dollars: 19,
  cents: 49,
},
{
  name: "Puzzle",
  quantity: 0,
  dollars: 17,
  cents: 49,
},
{
  name: "Clay Set",
  quantity: 0,
  dollars: 19,
  cents: 99,
},
{
  name: "Plastic Bow",
  quantity: 0,
  dollars: 20,
  cents: 99,
},
{
  name: "My Happy House",
  quantity: 0,
  dollars:19,
  cents: 49,
},
 {
  name: "Bookmarks",
  quantity: 0,
  dollars: 12,
  cents: 49,
},
{
  name: "Birthday card",
  quantity: 0,
  dollars: 19,
  cents: 99,
},
{
  name: "Stuffed toys",
  quantity: 0,
  dollars: 15,
  cents: 99,
},
 {
  name: "Dream catcher drawing",
  quantity: 0,
  dollars: 18,
  cents: 49,
},
];
//update cart
function updateCart(){
  let cart=0;
  for(index=0;index<items.length;index++){
    cart=cart+items[index].quantity;
  }
  cartValue.innerHTML=cart;
}

//link Add button and invoke update cart

for(let i=0;i<addButtons.length;i++){
addButtons[i].onclick=(e)=>{
items[i].quantity++;
updateCart();
};
}

//logic starts here...

var finalDollars = 0;
var finalCents = 0;

function updatePrice(){
  let totalPriceInCents=0;

  for(index=0;index<items.length;index++){
    totalPriceInCents=totalPriceInCents+items[index].quantity*(items[index].dollars*100+items[index].cents);
  }
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
 }

//adding whatsapp API 

var whatsappLink =
  "https://api.whatsapp.com/send?phone=+917798432856&text=Order%20details";

  function updateWhatsappLink(){
    for(index=0;index<items.length;index++){
      if (items[index].quantity != 0) {
           whatsappLink += "%0A" + items[index].name + "%20" + items[index].quantity;
            }

    }
    whatsappLink +=
         "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
     
    
  }
//linking cart button to whatsapp

cartButton.onclick = () => {
  updatePrice();
  updateWhatsappLink();
  window.open(whatsappLink, "_blank");
};
