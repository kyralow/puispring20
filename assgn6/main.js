
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

// selected glazing option is displayed in dropdown box once user clicks on glazing option 
function selectglaze1() {
    document.getElementById("btn1").innerHTML = "None" ;
}

function selectglaze2() {
    document.getElementById("btn1").innerHTML = "Sugar-milk" ;
}

function selectglaze3() {
    document.getElementById("btn1").innerHTML = "Vanilla-milk" ;
}

function selectglaze4() {
    document.getElementById("btn1").innerHTML = "Double-chocolate" ;
}


// selected quantity option is displayed in dropdown box once user clicks on quantity option 
function selectroll1() {
    document.getElementById("btn2").innerHTML = "1 roll - $5" ;
}

function selectroll3() {
    document.getElementById("btn2").innerHTML = "3 rolls - $14" ;
}

function selectroll6() {
    document.getElementById("btn2").innerHTML = "6 rolls - $26" ;
}

function selectroll12() {
    document.getElementById("btn2").innerHTML = "12 rolls - $50" ;
}

function added() {
    document.getElementById("cart").src = "added.jpg";
    document.getElementById("newcart").src = "added6.jpg";
}