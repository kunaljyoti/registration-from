function validateForm(){
    var alumni1=document.myForm;
     if(alumni1.fname.value==""){
    alert("Please Enter your fast name !");
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
    alert("Please Enter your Last name!");
    lastName.lname.focus();
     return false;
     }
    var reg=/^[A-Za-z\ ]{3,15}$/;
     if(!(lastName.lname.value).match(reg))
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
        alert("You have entered an invalid Email address !");
        eMAil.email.focus();
        return false;

        }
        var emmailVal=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

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
             alert("Invalid fathers fast name !");
             allVALidation.ffname.focus();
             return false;
             }
            
             if(!(allVALidation.ffname.value).match(reg))
             {
            alert("Invalid fathers fast name !");
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
               
                if(!(allVALidation.flname.value).match(reg))
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
                
                if(!(allVALidation.mlname.value).match(reg))
                {
                alert("Invalid fathers Last name !");
                allVALidation.mlname.focus();
                return false;

                }

                //gender validation
                
                if(allVALidation.gender.value=="")
             {
             alert("select your gender !"); 
             return false;
             }
                
            //Nationality

             if(allVALidation.nationality.value=="")
             {
             alert("Invalid nationality name !");
             allVALidation.nationality.focus();
             return false;
             }
            
             if(!(allVALidation.nationality.value).match(reg))
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
            
             if(!(allVALidation.city.value).match(reg))
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
            
             if(!(allVALidation.country.value).match(reg))
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

          //HSC Institution name

          if(allVALidation.hscname.value=="")
             {
             alert("Invalid HSC Institution name name !");
             allVALidation.hscname.focus();
             return false;
             }
            
             if(!(allVALidation.hscname.value).match(reg))
             {
            alert("Invalid HSC Institution name name !");
            allVALidation.hscname.focus();
             return false;
             }


             //        HSC Board                                           

             if(allVALidation.hscboard.value=="")
             {
             alert("Invalid HSC Board name name !");
             allVALidation.hscboard.focus();
             return false;
             }


             //       Score in HSC in percentage         

             if(allVALidation.score_in_hsc.value=="")
             {
             alert("Plz put valid mark in HSC  !");
             allVALidation.score_in_hsc.focus();
             return false;
             }
             var regPer=/^([0-9]{1,2}){1}(\.[0-9]{1,2})?%$/;                                                  
             if(!(allVALidation.score_in_hsc.value).match(regPer))
             {
            alert("Plz put valid mark in HSC  !");
            allVALidation.score_in_hsc.focus();
             return false;
             }

             //    SSC Institution name

             if(allVALidation.ssc_institution.value=="")
             {
             alert("Plz put valid Instituation name  !");
             allVALidation.ssc_institution.focus();
             return false;
             }

             if(!(allVALidation.ssc_institution.value).match(reg))
             {
            alert("Plz put valid Instituation name  !");
            allVALidation.ssc_institution.focus();
             return false;
             }
 
             //      SSC Board                                                  

             if(allVALidation.sscboard.value=="")
             {
             alert("Invalid SSC board name name !");
             return false;
             }


             //Score in SSC in percentage                                 


             if(allVALidation.score_in_ssc.value=="")
             {
             alert("Plz put valid SSC Percentage Mark  !");
             allVALidation.score_in_ssc.focus();
             return false;
             }
                                                                         
             if(!(allVALidation.score_in_ssc.value).match(regPer))
             {
            alert("Plz put valid SSC Percentage Mark  !");
            allVALidation.score_in_ssc.focus();
             return false;
             }

             //      Currently pursuing

             if(allVALidation.currently_pursuing.value=="")
             {
             alert("Plz put valid Details  !");
             allVALidation.currently_pursuing.focus();
             return false;
             }

             if(!(allVALidation.currently_pursuing.value).match(reg))
             {
            alert("Plz put valid Details  !");
            allVALidation.currently_pursuing.focus();
             return false;
             }

             //     Current educational institution name


             if(allVALidation.current_educational.value=="")
             {
             alert("Plz put valid EDUCATIONAL Instituation name  !");
             allVALidation.current_educational.focus();
             return false;
             }

             if(!(allVALidation.current_educational.value).match(reg))
             {
            alert("Plz put valid EDUCATIONAL Instituation name  !");
            allVALidation.current_educational.focus();
             return false;
             }

             //      Overall percentage                                      


             if(allVALidation.overall_percentage.value=="")
             {
             alert("Plz put valid Overall Percentage Mark  !");
             allVALidation.overall_percentage.focus();
             return false;
             }
                                                                      
             if(!(allVALidation.overall_percentage.value).match(regPer))
             {
            alert("Plz put valid Overall Percentage Mark  !");
            allVALidation.overall_percentage.focus();
             return false;
             }

             //    Current backlogs

             if(allVALidation.current_backlogs.value=="")
             {
             alert("Plz put valid Current backlogs  !");
             allVALidation.current_backlogs.focus();
             return false;
             }

             if(!(allVALidation.current_backlogs.value).match(reg))
             {
            alert("Plz put valid Current backlogs  !");
            allVALidation.current_backlogs.focus();
             return false;
             }



 //                     //  complete validation






         // user fast name

 
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


     //    HSC Institution name

     
     var HSC_Institution_name=document.getElementById('hscname').value;

     if(localStorage.getItem('HSC-Institution-name')==null){
  
      localStorage.setItem('HSC-Institution-name','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem('HSC-Institution-name'));
     oldData.push(HSC_Institution_name);
     
     localStorage.setItem('HSC-Institution-name', JSON.stringify(oldData) );

     //      HSC Board                                                           

     var HSC__board=document.getElementById('hscboard').value;

     if(localStorage.getItem(' HSC-Board-name')==null){
  
      localStorage.setItem(' HSC-Board-name','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem(' HSC-Board-name'));
     oldData.push(HSC__board);
     
     localStorage.setItem(' HSC-Board-name', JSON.stringify(oldData) );


     //Score in HSC in percentage

       
     var Score_in_HSC=document.getElementById('scorehsc').value;

     if(localStorage.getItem(' HSC-percentage')==null){
  
      localStorage.setItem(' HSC-percentage','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem(' HSC-percentage'));
     oldData.push(Score_in_HSC);
     
     localStorage.setItem(' HSC-percentage', JSON.stringify(oldData) );

     //SSC Institution name

     var sscInstitution=document.getElementById('sscinstitution').value;

     if(localStorage.getItem('SSC-Institution')==null){
  
      localStorage.setItem('SSC-Institution','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem('SSC-Institution'));
     oldData.push(sscInstitution);
     
     localStorage.setItem('SSC-Institution', JSON.stringify(oldData) );

     // SSC Board


     var ssc_board=document.getElementById('sscboard').value;

     if(localStorage.getItem(' SSC-Board-name')==null){
  
      localStorage.setItem(' SSC-Board-name','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem(' SSC-Board-name'));
     oldData.push(ssc_board);
     
     localStorage.setItem(' SSC-Board-name', JSON.stringify(oldData) );


     //Score in SSC in percentage

     var sscPercentage=document.getElementById('sscinpercentage').value;

     if(localStorage.getItem(' SSC-percentage-mark')==null){
  
      localStorage.setItem(' SSC-percentage-mark','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem(' SSC-percentage-mark'));
     oldData.push(sscPercentage);
     
     localStorage.setItem(' SSC-percentage-mark', JSON.stringify(oldData) );

     //      Currently pursuing 


     var currently_pursuing=document.getElementById('currentlypursuing').value;

     if(localStorage.getItem(' Currently-pursuing')==null){
  
      localStorage.setItem(' Currently-pursuing','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem(' Currently-pursuing'));
     oldData.push(currently_pursuing);
     
     localStorage.setItem(' Currently-pursuing', JSON.stringify(oldData) );

     //Current educational institution name

     var currently_education=document.getElementById('currentEducational').value;

     if(localStorage.getItem(' Currently-education')==null){
  
      localStorage.setItem(' Currently-education','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem(' Currently-education'));
     oldData.push(currently_education);
     
     localStorage.setItem(' Currently-education', JSON.stringify(oldData) );

     //   Overall percentage


     var overall_percentage=document.getElementById('overallpercentage').value;

     if(localStorage.getItem(' overall_percentage')==null){
  
      localStorage.setItem(' overall_percentage','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem(' overall_percentage'));
     oldData.push(overall_percentage);
     
     localStorage.setItem(' overall_percentage', JSON.stringify(oldData) );

     //Current backlogs

     var current_backlogs=document.getElementById('currentbacklogs').value;

     if(localStorage.getItem(' Curent-backlog')==null){
  
      localStorage.setItem(' Curent-backlog','[]');
     }
  
     var oldData =JSON.parse(localStorage.getItem(' Curent-backlog'));
     oldData.push(current_backlogs);
     
     localStorage.setItem(' Curent-backlog', JSON.stringify(oldData) );


    }
