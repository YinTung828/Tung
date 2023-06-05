function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.querySelector(".sidebar");
  var menuButton = document.getElementById("menuButton");

  if (x.className === "topnav-right") {
    x.className += " responsive";
    if (window.innerWidth <= 900) {
      y.style.right = "0";
    }
    menuButton.innerHTML = '<i class="fa fa-times"></i>'; // Change to close icon
  } else {
    x.className = "topnav-right";
    y.style.right = "-250px";
    menuButton.innerHTML = '<i class="fa fa-bars"></i>'; // Change back to menu icon
  }
}

function closeSidebar() {
  var x = document.getElementById("myTopnav");
  var y = document.querySelector(".sidebar");
  x.className = "topnav-right";
  y.style.right = "-250px";
}

window.addEventListener("resize", function () {
  var x = document.getElementById("myTopnav");
  var y = document.querySelector(".sidebar");
  var menuButton = document.getElementById("menuButton");

  if (window.innerWidth > 900) {
    x.className = "topnav-right";
    y.style.right = "-250px";
    menuButton.innerHTML = '<i class="fa fa-bars"></i>'; // Change back to menu icon
  } else if (x.className.includes("responsive")) {
    y.style.right = "0";
  }
});
