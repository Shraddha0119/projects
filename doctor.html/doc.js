let form=document.querySelector("form")
let tbody=document.querySelector("tbody")

form.addEventListener("submit",getdata)


 let doc_arr=[];
function getdata(){
    event.preventDefault()


    console.log(name)


        let doc_data = {
        name : form.docname.value,
        id : form.docid.value,
        spe:form.spe.value,
        exp:form.exp.value,
        mbl:form.mbl.value,
        email:form.email.value
    }
    doc_arr.push(doc_data)
    // console.log(doc_arr)
    // console.log(doc_data)  
    
    display(doc_arr)

    }


   function display(data){
    tbody.innerHTML="";
    

    data.map(function(el){
        let row=document.createElement("tr");

        let docname=document.createElement("td")
        docname.innerText=el.name;

        let docid=document.createElement("td")
        docid.innerText=el.id;

        let specail=document.createElement("td")
        specail.innerText=el.spe;

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
        }else{
            role.innerText="trainee"
        }

        let del=document.createElement("td")
        del.innerText="delete";
        del.style.backgroundColor="red";
        del.style.color="white"

        row.append(docname,docid,specail,expirence,email,mobile,role,del)
        tbody.append(row)

    })
}