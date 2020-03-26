
// everytime user clicks on button, toggle between showing dropdown menu and hiding
function glazing() {
  document.getElementById("glazingdropdown").classList.toggle("show");
}

// same as above, but for second dropdown
function quantity() {
  document.getElementById("quantitydropdown").classList.toggle("show");
}


// close dropdown menu when users click outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// variable to store important info like quantity and glazing selected in keys
// glazings: glazing selected, qp: quantity + price, quant: quantity selected, price: price of selected quantity, cartp: change in quant in cart
var selected = { glazings: "", qp: "" , quant: "", price:"", cartp:""};
localStorage.setItem("mySelected", JSON.stringify(selected));
	
// selected glazing option is displayed in dropdown box once user clicks on glazing option 
// set appropriate values for the key ("glazings")
function selectglaze1() {
    document.getElementById("btn1").innerHTML = "None" ;
    localStorage.setItem("glazings", "None");
}

function selectglaze2() {
    document.getElementById("btn1").innerHTML = "Sugar-milk" ;
    localStorage.setItem("glazings", "Sugar-milk");
}

function selectglaze3() {
    document.getElementById("btn1").innerHTML = "Vanilla-milk" ;
    localStorage.setItem("glazings", "Vanilla-milk");
}

function selectglaze4() {
    document.getElementById("btn1").innerHTML = "Double-chocolate" ;
    localStorage.setItem("glazings", "Double-chocolate");
}


// selected quantity option is displayed in dropdown box once user clicks on quantity option 
// set appropriate values for the keys ("qp", "quant", "price", "cart")
function selectroll1() {
    document.getElementById("btn2").innerHTML = "1 roll - $5" ;
    localStorage.setItem("qp", "1 roll - $5");
    localStorage.setItem("quant", "1");
    localStorage.setItem("price", "5.00");
    localStorage.setItem("cartp", "added1.jpg");
}

function selectroll3() {
    document.getElementById("btn2").innerHTML = "3 rolls - $14" ;
    localStorage.setItem("qp", "3 rolls - $14");
    localStorage.setItem("quant", "3");
    localStorage.setItem("price", "14.00");
    localStorage.setItem("cartp", "added3.jpg");
}

function selectroll6() {
    document.getElementById("btn2").innerHTML = "6 rolls - $26" ;
    localStorage.setItem("qp", "6 rolls - $26");
    localStorage.setItem("quant", "6");
    localStorage.setItem("price", "26.00");
    localStorage.setItem("cartp", "added6.jpg");
}

function selectroll12() {
    document.getElementById("btn2").innerHTML = "12 rolls - $50" ;
    localStorage.setItem("qp", "12 rolls - $50");
    localStorage.setItem("quant", "12");
    localStorage.setItem("price", "50.00");
    localStorage.setItem("cartp", "added12.jpg");
}

// change indicator of quantity in cart (the brown circle with a number, beside "cart" text)
function added() {
    document.getElementById("cart").src = "added.jpg";
    document.getElementById("newcart").src = localStorage.getItem("cartp"); 
}

// when "remove" is clicked to remove item in cart
function removecart() {
	document.getElementById("everything1").remove();
	document.getElementById("everything2").remove();
	document.getElementById("prodpic").remove();
	document.getElementById("quantitypic").remove();
	document.getElementById("glazingpic").remove();
	localStorage.removeItem("mySelected");
}

// update relevant fields on cart page
function onLoad() {
	document.getElementById("chosenq").innerHTML = localStorage.getItem("qp");
	document.getElementById("choseng").innerHTML = localStorage.getItem("glazings");
	document.getElementById("subtotalprice").innerHTML = localStorage.getItem("price");
	document.getElementById("prelimprice").innerHTML = "$         " + localStorage.getItem("price");
	document.getElementById("calctax").innerHTML = (localStorage.getItem("price") * 0.07).toFixed(2);
	document.getElementById("carttotal").innerHTML = "Shopping Cart (" + localStorage.getItem("quant") + ")" ;
	document.getElementById("finalp").innerHTML = "$  " + (localStorage.getItem("price") * 1.07).toFixed(2);
	document.getElementById("cartquan").src = localStorage.getItem("cartp") ;
}
