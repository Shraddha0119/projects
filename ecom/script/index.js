


let username=localStorage.getItem("login_data");
let main=document.getElementById("main")






let navbar=document.getElementById("navbar")

let products=JSON.parse(localStorage.getItem("products"));
// console.log("products");
let cart_arr=JSON.parse(localStorage.getItem("cartData"))||[];



display(products)

// console.log(navbar);
// console.log(username);
if(username != null){
   navbar.innerHTML=null;

   let name=document.createElement("h4")
   name.innerText=username

   let cart=document.createElement("h4")
   cart.addEventListener("click",function(){
     window.location.href="../html/cart.html";
   })
   cart.innerText="cart"





   let logout=document.createElement("button")
   logout.addEventListener("click",logoutfun)
   logout.innerText="logout"


    navbar.append(name,cart,logout)    //phonepay
}



function logoutfun(){
    // console.log("logout");
    localStorage.removeItem("login_data");
    window.location.href="../html/login.html";
    
}


function display(product){
   product.map(function(el){
    // console.log(el);
    let name=document.createElement("h2")
    name.innerText=el.title;
    let price=document.createElement("h3")
    price.innerText=el.price
    let img=document.createElement("img")
    img.src=el.images[0]

    let cartbtn=document.createElement("button")
    cartbtn.innerText="Add to cart"
    cartbtn.addEventListener("click",function(){
     

       let alreadyIncart=false;
       for(let i=0;i<cart_arr.length;i++){
        if(cart_arr[i].id==el.id){
            alreadyIncart=true;
            break;
        }
       }
       if(alreadyIncart){
        window.location.href="../html/cart.html";
       }else{
        cart_arr.push(el);
        localStorage.setItem("cartData",JSON.stringify(cart_arr));
        alert("Product is Added to cart")
        cartbtn.innerText="Go to cart"
       }


      
        
      })

      
   
   

    let div=document.createElement("div")

    div.append(img,name,price,cartbtn)
    main.append(div)
    
   })
}

// *************








