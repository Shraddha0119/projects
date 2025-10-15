let form=document.querySelector("form")
let tbody=document.querySelector("tbody")

form.addEventListener("submit",getdata)


 let Emp_arr=[];
function getdata(){
    event.preventDefault()


    console.log(name)


        let Emp_data = {
        name : form.Empname.value,
        id : form.Empid.value,
        dep:form.dep.value,
        exp:form.exp.value,
        mbl:form.mbl.value,
        email:form.email.value
    }
    Emp_arr.push(Emp_data)
    // console.log(doc_arr)
    // console.log(doc_data)  
    
    display(Emp_arr)

    }


   function display(data){
    tbody.innerHTML="";
    

    data.map(function(el){
        let row=document.createElement("tr");

        let Empname=document.createElement("td")
        Empname.innerText=el.name;

        let Empid=document.createElement("td")
        Empid.innerText=el.id;

        let depart=document.createElement("td")
        depart.innerText=el.spe;

        let expirence=document.createElement("td")
        expirence.innerText=el.exp;

        let email=document.createElement("td")
        email.innerText=el.email;

        let mobile=document.createElement("td")
        mobile.innerText=el.mbl;


        let role=document.createElement("td")
        if(el.exp>=5){
            role.innerText="senior"
        }else if(el.exp>=2 && el.exp<=5){
            role. innerText="junior"
        }else if(el.exp<=1){
            role.innerText="trainee"
        }else{
            role.innerText="unexpirenced"
        }

        let del=document.createElement("td")
        del.innerText="delete";
        del.style.backgroundColor="red";
        del.style.color="white"

        row.append(Empname,Empid,depart,expirence,email,mobile,role,del)
        tbody.append(row)

    })
}