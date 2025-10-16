



let navbar = document.getElementById("navbar");
let username = localStorage.getItem("login_data");


let phonepeBtn = document.getElementById("phonepe-btn");
let gpayBtn = document.getElementById("gpay-btn");
let paytmBtn = document.getElementById("paytm-btn");

const product = JSON.parse(localStorage.getItem("payment_item"));











if (username != null) {
  navbar.innerHTML = null;

  let name = document.createElement("h4");
  name.innerText = username;

  let cart = document.createElement("button");
  cart.innerText = "Cart 🛒";
  cart.addEventListener("click", function () {
    window.location.href = "../html/cart.html";
  });

  let logout = document.createElement("button");
  logout.innerText = "Logout";
  logout.addEventListener("click", logoutfun);

  navbar.append(name, cart, logout);
}

function logoutfun() {
  localStorage.removeItem("login_data");
  window.location.href = "../html/login.html";
}

// Select container where images will go
let appRow = document.getElementById("appRow");

// Payment app data
let apps = [
  {
    name: "PhonePe",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/PhonePe_Logo.svg",
    link: "../html/phonepe.html",
  },
  {
    name: "Google Pay",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg",
    link: "../html/gpay.html",
  },
  {
    name: "Paytm",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/55/Paytm_logo.png",
    link: "../html/paytm.html",
  },
];

// Create clickable cards for each app
apps.forEach((app) => {
  let div = document.createElement("div");
  div.className = "app-card";

  let img = document.createElement("img");
  img.src = app.img;
  img.alt = app.name + " Logo";

  let h3 = document.createElement("h3");
  h3.innerText = app.name;

  div.append(img, h3);
  appRow.append(div);

  // When clicked, open in new tab
  div.addEventListener("click", function () {
    window.open(app.link, "_blank");
  });
});

// let phonepeBtn = document.getElementById("phonepe-btn");
// let gpayBtn = document.getElementById("gpay-btn");
// let paytmBtn = document.getElementById("paytm-btn");

// Add click events to open respective pages in a new tab
phonepeBtn.addEventListener("click", () => {
  window.open("../html/phonepe.html", "_blank");
});

gpayBtn.addEventListener("click", () => {
  window.open("../html/gpay.html", "_blank");
});

paytmBtn.addEventListener("click", () => {
  window.open("../html/paytm.html", "_blank");
});





