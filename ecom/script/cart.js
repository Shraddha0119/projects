let username=localStorage.getItem("login_data");
let main=document.getElementById("main");




let navbar=document.getElementById("navbar");
let total=document.getElementById("total");
let cart_arr=JSON.parse(localStorage.getItem("cartData"))||[];


// let pay_arr=JSON.parse(localStorage.getItem("payData"))||[];

cart_arr.forEach(function(el){
    if(!el.currentQunatity){
        el.currentQunatity=1;
    }
})
    




display(cart_arr)

if(username != null){
   navbar.innerHTML=null;

   let name=document.createElement("h4")
   name.innerText=username
//    let cart=document.createElement("h4")
//    cart.addEventListener("click",function(){
//      window.location.href="../html/cart.html";
//    });
//    cart.innerText="cart"

// ******

 let paybtn = document.createElement("button");
  paybtn.innerText = "PhonePe 💰";
  paybtn.addEventListener("click", function () {
    window.location.href = "../html/pay.html";
  });

// ******
   let logout=document.createElement("button")
   logout.addEventListener("click",logoutfun)
   logout.innerText="logout"


    navbar.append(name,paybtn,logout)
}






function logoutfun(){
    // console.log("logout");
    localStorage.removeItem("login_data");
    window.location.href="../html/login.html";
    
}




// total.innerText=count

function display(product){

    main.innerHTML = null
   product.map(function(el,index){
    // console.log(el);

    let count = 0;
    let Quantity= el.currentQunatity || 1
    // let Quantity=1
    let name=document.createElement("h2")
    name.innerText=el.title;
    let price=document.createElement("h3")
    price.innerText= Math.floor((el.price )* Quantity);
    // total.innerText = count + Math.floor(el.price)*Quantity
    let img=document.createElement("img")
    img.src=el.images[0]


   


    //    ******

// check.addEventListener("click", function() {
//     localStorage.setItem("payment_item", JSON.stringify(el));
//     window.location.href = "../html/pay.html"; // Go to payment page
// });




 let check= document.createElement("h4")
 check.addEventListener("click",function(){

  
   window.location.href="../html/pay.html";
//    pay.location.href="https://www.phonepe.com/trust-and-safety/";
    
})
check.innerText="check"








    let removebtn=document.createElement("button")
    removebtn.innerText="Remove";
    removebtn.addEventListener("click",function(){
        removefun(el,index)

})




    // Quantity controls
    let QunatityDiv=document.createElement("div")
    QunatityDiv.setAttribute("class","qunatityDiv")


    let minusbtn = document.createElement("button")
    minusbtn.innerText = "-";


    let quantityText = document.createElement("span")
    quantityText.innerText = Quantity;

    let plusbtn = document.createElement("button");
    plusbtn.innerText = "+";


    plusbtn.addEventListener("click",function(){
       Quantity++;
       el.currentQunatity = Quantity
        price.innerText= Math.floor(el.price) * Quantity;
        quantityText.innerText = Quantity;
        updateTotal();

    })

    minusbtn.addEventListener("click",function(){
       Quantity--;
        quantityText.innerText = Quantity;
        price.innerText= Math.floor(el.price )* Quantity;
        updateTotal();

    })

    QunatityDiv.append(minusbtn,quantityText,plusbtn)



    

    let div=document.createElement("div")

    div.append(img,name,price,check,removebtn,QunatityDiv);
    main.append(div);
    
   })
}

updateTotal()

function updateTotal(){
    let newTotal=0;
    cart_arr.forEach(function(el){
        newTotal=newTotal+Math.floor(el.price)*el.currentQunatity
    })

    total.innerText=`Total Amount is ${newTotal}`
}


function removefun(item,i){

    cart_arr.splice(i,1)
    localStorage.setItem("cartData",JSON.stringify(cart_arr));
    display(cart_arr)
    updateTotal();

}
