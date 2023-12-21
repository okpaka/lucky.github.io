

 // declaring vairable to hold the registration details

    function reg(){
        var Fname = document.formRegister.Fname.value;
        var Lname = document.formRegister.Lname.value;
        var Phone = document.formRegister.phone.value;
        var email = document.formRegister.email.value;
        var password1 =document.formRegister.password1.value;
        var password2 = document.formRegister.password2.value;
        
      
        

            if (Fname==null || Fname==""){
                document.getElementById("firstName").innerHTML="*";
                document.getElementById("firstName").style.color="Red";
                
                
                // if(Fname !==null || Fname!==""){
                //   document.getElementById("firstName").style.display="none"
                 
                // }
                return false
            }else
            {
              document.getElementById("firstName").style.display="none"
            }


            if(Lname ==null || Lname==""){
                document.getElementById("lastName").innerHTML="*";
                document.getElementById("lastName").style.color="Red";
                return false

             }
            else{
              document.getElementById("lastName").style.display="none";

            } 
            
            // vallidating the phone input
            if(Phone ==null || Phone==""){
              document.getElementById("phone").innerHTML="*";
                document.getElementById("phone").style.color="Red";
                return false

            }
            else{
              document.getElementById("phone").style.display="none";

            } 
            
            if(email ==null || email==""){
              document.getElementById("email").innerHTML="*";
              document.getElementById("email").style.color="Red";
              return false

             }
             else{

              document.getElementById("email").style.display="none"
             } 
             
             
             if(password1 ==null || password1==""){
                document.getElementById("P1").innerHTML="*";
                document.getElementById("P1").style.color="Red";
                return false

            }
            else{
              document.getElementById("P1").style.display="none"

            }
            
            if(password2 ==null || password2==""){
              document.getElementById("P2").innerHTML="*";
              document.getElementById("P2").style.color="Red";
              return false
            }else{
              document.getElementById("P2").style.display="none";
            }

           if(password2 != password1){

              document.getElementById("P2").innerHTML="Password does not match";
              document.getElementById("P2").style.color="green";

              return false
              
            } 

      }

