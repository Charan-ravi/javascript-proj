// document.getElementById("btn").addEventListener("click", submit);
// console.log(document.getElementById("btn"));
// var o = localStorage.getItem("data");document.getElementById("btn").addEventListener("click",submit);
    function submit(){
        // var data1=document.getElementById("d1").value;
        var obj={};
                var name=document.getElementById("name").value;
                var email=document.getElementById("email").value;
                var contact=document.getElementById("contact").value;
                var nationality=document.getElementById("nationality").value;   
                var radio_elem=document.getElementsByName("info");
                for(let i=0;i<radio_elem.length;i++){
                    if(radio_elem[i].checked){
                        var gender=radio_elem[i].value;
                    }
                }
                console.log(gender);
                // var gender = document.querySelector('input[name="info"]:checked').value;
                // document.querySelector('input[name="rate"]:checked').value;
                obj.name=name;
                obj.email=email;
                obj.contact=contact;
                obj.nationality=nationality;
                obj.gender=gender;
                localStorage.setItem("data", JSON.stringify(obj));   
                var o=localStorage.getItem("data");
                console.log(o);
                alert("Form Submitted");
        document.getElementById("res_name").innerHTML = "Name-";
        document.getElementById("res_email").innerHTML = "Email-";
        document.getElementById("res_contact").innerHTML = "Contact-";
        document.getElementById("res_nationality").innerHTML = "Nationality-";
        document.getElementById("res_gender").innerHTML = "Gender-";
        document.getElementById("d11").innerHTML = name;
        document.getElementById("d21").innerHTML = email;
        document.getElementById("d31").innerHTML = contact;
        document.getElementById("d41").innerHTML = nationality;
        document.getElementById("d51").innerHTML = gender;
    }
    
    
