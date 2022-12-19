function validateForm(){
    var alumni1=document.myForm;
     if(alumni1.fname.value==""){
    alert("Please Enter a fast name !");
     alumni1.fname.focus();
     return false;
     }
    var reg=/^[A-Za-z\ ]{3,15}$/;
     if(!(alumni1.fname.value).match(reg))
     {
      alert("Spaces & special characters are not allowed");
    alumni1.fname.focus();
     return false;
     }

        //last name validation

     var lastName=document.myForm;
     if(lastName.lname.value==""){
    alert("Please Enter a last name!");
    lastName.lname.focus();
     return false;
     }
    var rega=/^[A-Za-z]{3,15}$/;
     if(!(lastName.lname.value).match(rega))
     {
      alert("Spaces & special characters are not allowed");
    alumni1.lname.focus();
     return false;
     }

                //  date of birth

    var dateOfbirth=document.myForm;
     if(dateOfbirth.date_of_birth.value==""){
    alert("Please Enter your date_of_birth !");
    dateOfbirth.date_of_birth.focus();
     return false;
     }

                   //email      

        var eMAil=document.myForm;
        if(eMAil.email.value==""){
        alert("You have entered an invalid email address!");
        eMAil.email.focus();
        return false;

        }
        var emmailVal=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!(eMAil.email.value).match(emmailVal))
        {
        alert("You have entered an invalid email address !");
        alumni1.email.focus();
        return false;
        }
              

             //fathers fast name

             var allVALidation=document.myForm;
             var reg=/^[A-Za-z\ ]{3,15}$/;
             if(allVALidation.ffname.value=="")
             {
             alert("Invalid fathers Fast name !");
             allVALidation.ffname.focus();
             return false;
             }
            
             if(!(allVALidation.ffname.value).match(reg))
             {
            alert("Invalid fathers Fast name !");
            allVALidation.ffname.focus();
             return false;
             }
        
                // fathers last name validation
        
                if(allVALidation.flname.value=="")
                {
                alert("Invalid fathers Last name !");
                allVALidation.flname.focus();
                return false;
                }
               
                if(!(allVALidation.flname.value).match(rega))
                {
               alert("Invalid fathers Last name !");
               allVALidation.flname.focus();
                return false;
                }


                //mothers input validation

                if(allVALidation.mfname.value=="")
                {
                alert("Invalid mother's Fast name !");
                allVALidation.mfname.focus();
                return false;
                }
               
                if(!(allVALidation.mfname.value).match(reg))
                {
               alert("Invalid mothers Fast name !");
               allVALidation.mfname.focus();
                return false;
                }
          
                   //last name

                 if(allVALidation.mlname.value=="")
                {
                 alert("Invalid mothers Last name !");
                 allVALidation.mlname.focus();
                 return false;
                 }
                
                if(!(allVALidation.mlname.value).match(rega))
                {
                alert("Invalid fathers Last name !");
                allVALidation.mlname.focus();
                return false;

                }

                //gender validation
                
                if(allVALidation.gender.value=="")
             {
             alert("select your gender !");
             allVALidation.nationality.focus(); 
             return false;
             }
                
            //Nationality

             if(allVALidation.nationality.value=="")
             {
             alert("Invalid nationality name !");
             allVALidation.nationality.focus();
             return false;
             }
            
             if(!(allVALidation.nationality.value).match(rega))
             {
            alert("Invalid nationality name !");
            allVALidation.nationality.focus();
             return false;
             }

             //      Home address

             if(allVALidation.homeaddress.value=="")
             {
             alert("Invalid Home address name !");
             allVALidation.homeaddress.focus();
             return false;
             }
            
             if(!(allVALidation.homeaddress.value).match(reg))
             {
            alert("Invalid Home address name !");
            allVALidation.homeaddress.focus();
             return false;
             }

             //city

             if(allVALidation.city.value=="")
             {
             alert("Invalid City address name !");
             allVALidation.city.focus();
             return false;
             }
            
             if(!(allVALidation.city.value).match(rega))
             {
            alert("Invalid City address name !");
            allVALidation.city.focus();
             return false;
             }

             //country

             if(allVALidation.country.value=="")
             {
             alert("Invalid Country address name !");
             allVALidation.country.focus();
             return false;
             }
            
             if(!(allVALidation.country.value).match(rega))
             {
            alert("Invalid Country address name !");
            allVALidation.country.focus();
             return false;
             }



             //    Telephone-Home   
        if(allVALidation.telephone.value==""){
        alert("You have entered an invalid Telephone number !");
        allVALidation.telephone.focus();
        return false;

        }
        var telVal=/^(0|[+91]{3})?[7-9][0-9]{9}$/
        if(!(allVALidation.telephone.value).match(telVal))
        {
        alert("You have entered an invalid Telephone No !");
        allVALidation.telephone.focus();
        return false;
        }

        //Telephone mobile 

        if(allVALidation.mobile.value==""){
          alert("You have entered an invalid Mobile number !");
          allVALidation.mobile.focus();
          return false;
  
          }
          var mobVal=/^(0|[+91]{3})?[7-9][0-9]{9}$/
          if(!(allVALidation.mobile.value).match(mobVal))
          {
          alert("You have entered an invalid Mobile No !");
          allVALidation.mobile.focus();
          return false;
          }


               // validation compelete
          
   var newData=document.getElementById('fname').value;

   if(localStorage.getItem('fastName')==null){

    localStorage.setItem('fastName','[]');
   }

   var oldData =JSON.parse(localStorage.getItem('fastName'));
   oldData.push(newData);
   
   localStorage.setItem('fastName', JSON.stringify(oldData) );


   // user last name

   var lastData=document.getElementById('lname').value;

   if(localStorage.getItem('LastName')==null){

    localStorage.setItem('LastName','[]');
   }

   var oldData =JSON.parse(localStorage.getItem('LastName'));
   oldData.push(lastData);

   localStorage.setItem('LastName', JSON.stringify(oldData) );

   //  DATE OF BIRTH

   var dataOfbirth=document.getElementById('date_of_birth').value;

   if(localStorage.getItem('Date_of_birth')==null){

    localStorage.setItem('Date_of_birth','[]');
   }

   var oldData =JSON.parse(localStorage.getItem('Date_of_birth'));
   oldData.push(dataOfbirth);
   
   localStorage.setItem('Date_of_birth', JSON.stringify(oldData) );

   //  email

   var eMAil=document.getElementById('email').value;

   if(localStorage.getItem('Email')==null){

    localStorage.setItem('Email','[]');
   }

   var oldData =JSON.parse(localStorage.getItem('Email'));
   oldData.push(eMAil);
   
   localStorage.setItem('Email', JSON.stringify(oldData) );

   //fathers fast name

   var fathers_First_name=document.getElementById('fathers_first_name').value;

   if(localStorage.getItem('Fathers_first_name')==null){

    localStorage.setItem('Fathers_first_name','[]');
   }

   var oldData =JSON.parse(localStorage.getItem('Fathers_first_name'));
   oldData.push(fathers_First_name);
   
   localStorage.setItem('Fathers_first_name', JSON.stringify(oldData) );

   //fathers last name

   var Fathers_last_name=document.getElementById('fathers_last_name').value;

   if(localStorage.getItem('Fathers_last_name')==null){

    localStorage.setItem('Fathers_last_name','[]');
   }

   var oldData =JSON.parse(localStorage.getItem('Fathers_last_name'));
   oldData.push(Fathers_last_name);
   
   localStorage.setItem('Fathers_last_name', JSON.stringify(oldData) );

   //mothers fast name 

   var Mothers_fast_name=document.getElementById('mothers_first_name').value;

   if(localStorage.getItem('Mothers_first_name')==null){

    localStorage.setItem('Mothers_first_name','[]');
   }

   var oldData =JSON.parse(localStorage.getItem('Mothers_first_name'));
   oldData.push(Mothers_fast_name);
   
   localStorage.setItem('Mothers_first_name', JSON.stringify(oldData) );

   //mothers last name

   var Mothers_last_name=document.getElementById('mothers_last_name').value;

   if(localStorage.getItem('Mothers_last_name')==null){

    localStorage.setItem('Mothers_last_name','[]');
   }

   var oldData =JSON.parse(localStorage.getItem('Mothers_last_name'));
   oldData.push(Mothers_last_name);
   
   localStorage.setItem('Mothers_last_name', JSON.stringify(oldData) );

    //      GENDER                         

    var gender=document.getElementById('gender').value;

     if(localStorage.getItem('Gender')==null){
  
      localStorage.setItem('Gender','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem('Gender'));
     oldData.push(gender);
     
     localStorage.setItem('Gender', JSON.stringify(oldData) );


     //Nationality

     var nationality=document.getElementById('nationality').value;

     if(localStorage.getItem('Nationality')==null){
  
      localStorage.setItem('Nationality','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem('Nationality'));
     oldData.push(nationality);
     
     localStorage.setItem('Nationality', JSON.stringify(oldData) );

     //home adresss

     var home_adresss=document.getElementById('homeaddress').value;

     if(localStorage.getItem('Home_Address')==null){
  
      localStorage.setItem('Home_Address','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem('Home_Address'));
     oldData.push(home_adresss);
     
     localStorage.setItem('Home_Address', JSON.stringify(oldData) );

     //city

     var ciTy=document.getElementById('city').value;

     if(localStorage.getItem('City')==null){
  
      localStorage.setItem('City','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem('City'));
     oldData.push(ciTy);
     
     localStorage.setItem('City', JSON.stringify(oldData) );

     // country

     var counTry=document.getElementById('country').value;

     if(localStorage.getItem('Country')==null){
  
      localStorage.setItem('Country','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem('Country'));
     oldData.push(counTry);
     
     localStorage.setItem('Country', JSON.stringify(oldData) );

     //telephone home

     var telePHonehome=document.getElementById('telephone').value;

     if(localStorage.getItem('Telephone')==null){
  
      localStorage.setItem('Telephone','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem('Telephone'));
     oldData.push(telePHonehome);
     
     localStorage.setItem('Telephone', JSON.stringify(oldData) );

     //telephonemobile

     var telePHonemob=document.getElementById('mobile').value;

     if(localStorage.getItem('Telephone-mobile')==null){
  
      localStorage.setItem('Telephone-mobile','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem('Telephone-mobile'));
     oldData.push(telePHonemob);
     
     localStorage.setItem('Telephone-mobile', JSON.stringify(oldData) );
}