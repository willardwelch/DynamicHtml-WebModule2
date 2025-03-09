
var chckClick= document.getElementById("chkBilling"); //**cale if the same as billing checkbox is clicked */
chckClick.addEventListener("click", ShowhideDiv);

 
var submitbutton=document.getElementById("submit");
submitbutton.addEventListener("click", Validateform); //*Called when the user click the submit button


var chkrdbutton= document.getElementById("paypal1");
chkrdbutton.addEventListener("click", PaypalCardselected); //**if the user select PayPal */

 var visacard= document.getElementById("Visa");
 visacard.addEventListener("click", CreditCardSelected);

 var crdMasterard= document.getElementById("mastercard");
 crdMasterard.addEventListener("click", CreditCardSelected);

function ShowhideDiv() //** Purpose of this function is to hide or show the shipping information when the checkbox is selected */
{
 var x = document.getElementById("tblshipping");
var x2=document.getElementById("tblshippingwidth");
  if (x.style.display === "none")
  {
    x.style.display = "block";
    x2.style.width = "30%";

  } 
  else {
    x.style.display = "none";
    x2.style.width = "30%";
  }
}






function PaypalCardselected(){ //if the user select paypal then the credit card information is disabled
  document.getElementById("CardNumber").disabled = true;
  document.getElementById("ExpDate").disabled = true
  document.getElementById("CCV").disabled = true

}

function CreditCardSelected(){//if the user select credit card then the credit card information is enabled
  document.getElementById("CardNumber").disabled = false
  document.getElementById("ExpDate").disabled = false
  document.getElementById("CCV").disabled = false
}

function validateCardDetail(){ //checking to ensure credit card detail is not empty
  var returnvalue=true;
  var cardNumber=document.getElementById("CardNumber").value;
  var ExpDate=document.getElementById("ExpDate").value;   
  var CCV=document.getElementById("CCV").value;
  if(cardNumber.trim()==="")
  {
    document.getElementById("cardnum").innerHTML=" * Card number is required";
    returnvalue=false;
    return returnvalue;
  }
   document.getElementById("cardnum").innerHTML="";
  if(ExpDate.trim()==="")
    {
      document.getElementById("expDate").innerHTML=" * Expiry date is required";
      returnvalue=false;
      return returnvalue;
    }
    document.getElementById("expDate").innerHTML="";

    if(CCV.trim()==="")
      {
        document.getElementById("ccvinfo").innerHTML=" * CCV number is required";
        returnvalue=false;
        return returnvalue;
      }
      document.getElementById("ccvinfo").innerHTML="";
      var cardisnum=ValidateCardNumber();//calling function to validate that card number only contains number
      if(!cardisnum)
      {
        returnvalue=false;
        return returnvalue;
      }
  
      var g=checkCardExpirationFormat();   //calling function to validate expiration date format
      if(!g)
      {
        returnvalue=false;
        return returnvalue;
      }

      var myCCV= ValidateCCV(); //calling function to validate CCV
      if(!myCCV)
      {
        returnvalue=false;
        return returnvalue;
      }

      return returnvalue;
    
}

function checkRadioButton() //This function checks to ensure a button was selected
{

  var radioButtons = document.getElementsByName("PaymentDetail");
  var formValid = false;

  var paypalselected=false;

  var i = 0;
  while (!formValid && i < radioButtons.length) 
  {
      if (radioButtons[i].checked) 
      {
      //  radioButtons[i].value==="Paypal"?paypalselected=true:paypalselected=false;
          formValid = true;
      }
      i++;        
  }
    
  return formValid;
}

function Validateform() //Validating the form to ensure all the relevant fields are 
// completed and displaying the appropriate messages
{
 
  //******************Shipping Details****** */
  if(document.getElementById('fname').value==="")//check if first name is empty
  {
    document.getElementById("firstname").innerHTML=" * First name is required";
    chkerrors=true;
    return ;
  }
   document.getElementById("firstname").innerHTML="";//resetting the error message
  if(document.getElementById('lname').value==="")//check if last name is empty
    {
      document.getElementById("lastname").innerHTML=" * Last name is required";
      return ;
    }
    document.getElementById("lastname").innerHTML="";//resetting the error message
    

    if(document.getElementById('email').value==="") //check if email is empty
      {
        document.getElementById("EmailMessage").innerHTML=" * Email is required";
        return ;
      }
      document.getElementById("EmailMessage").innerHTML="";//resetting the error message

    if(validateEmail(document.getElementById('email')))//check if email is valid
     {
       
     }
     else{
      document.getElementById('EmailMessage').innerHTML=" * Email address entered is invalid ";
      return ;
     }    
     document.getElementById("EmailMessage").innerHTML="";//resetting the error message
   
     var addressvalue=document.getElementById('address').value;
    if(addressvalue.trim()==="") //check if address is empty
       {
        document.getElementById("add1").innerHTML=" * Address is required";
        return ;
      }
      document.getElementById("add1").innerHTML="";//resetting the error message

     var addresscountry=document.getElementById('country').value;
    if(addresscountry==="") //check if address is empty
       {
        document.getElementById("shipcountry").innerHTML=" * Country is required";
        return ;
      }
      document.getElementById("shipcountry").innerHTML="";//resetting the error message

    //*********************Payment Details********************* */
      var pymtSelected=checkRadioButton(); //Checking if a payment method was selected
      if (!pymtSelected) {
        document.getElementById("paymenttype").innerHTML=" * Payment method is required";       
        return;
      }
      document.getElementById("paymenttype").innerHTML="";//resetting the error message

      var valcreditInfo = document.getElementsByName("PaymentDetail");
      if(valcreditInfo[1].checked  || valcreditInfo[2].checked)//checking if credit card was selected before validating the card info
        {
            var creditcardDetails= validateCardDetail();
            if(!creditcardDetails){
              return;
            }
        }

      //*************************Shipping details************ */
     var details=checkShipping(); 
      if(details) //Checking to ensure all the shipping information is completed if the same as billing was not selected
      {
          return
      }
      else
      {
        EmptyComponent(); //Clearing all the components on the form
        alert("Form submitted successfully");
      }

}

function checkShipping()
{

  var returnshipping=false;
  
  var x = document.getElementById("chkBilling").checked;
  if (x)// checking if the checkox is selected
  {
         return returnshipping;
  }
  else
  {
      returnshipping=false;
      var addressvalue=document.getElementById('address1').value;
      if(addressvalue.trim()==="") //check if address is empty
        {
          document.getElementById("billaddress").innerHTML=" * Address is required";
          returnshipping=true;
          return returnshipping;
        }
        document.getElementById("billaddress").innerHTML="";//resetting the error message

        var BilCity=document.getElementById('city1').value;
        if(BilCity.trim()==="") //check if city is empty
          {
            document.getElementById("billcity").innerHTML=" * city is required";
            returnshipping=true;
            return returnshipping;
          }
          document.getElementById("billcity").innerHTML=""; //resetting the error message
      

      var BillCountry=document.getElementById('country1').value;
      if(BillCountry==="") //check if address is empty
        {
          document.getElementById("billcountry").innerHTML=" * Country is required";
          returnshipping=true;
          return returnshipping;
        }
        document.getElementById("billcountry").innerHTML=""; //resetting the error message
       
 
        return returnshipping;
        
  }
 
}

function validateEmail(Email)//Validating an email address
{
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(Email.value);     
}

function LoadCountries(elementName) //loading countries by passing the component to load the values to as parameter
{
     const countries = ["Jamaica", "United States", "Canada", "United Kingdom", "Australia", "India", "Germany", "France", "Brazil", "South Africa"];

          // Get the select element
           const countrySelect = elementName
       
          // Populate the select element with countries
            countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });
}

function EmptyComponent() //Emptying all components after form submission
{
  document.getElementById("fname").value="";
  document.getElementById("lname").value="";
  document.getElementById("email").value="";
  document.getElementById("address").value="";
  document.getElementById("city").value="";
  document.getElementById("state").value="";
  document.getElementById("postalcode").value="";
  document.getElementById("country").value="";
  document.getElementById("CardNumber").value=""
  document.getElementById("ExpDate").value="" ;
  document.getElementById("CCV").value="";
  
  var radioButtons = document.getElementsByName("PaymentDetail"); //Resetting the payment detail option
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked=false;
  }
  document.getElementById("address1").value="";
  document.getElementById("city1").value="";
  document.getElementById("state1").value="";
  document.getElementById("postalcode1").value="";
  document.getElementById("country1").value="";
}


function checkCardExpirationFormat(){ //check that the expiry date is in the correct format
  var returnvalue=true;
  var ExpDate=document.getElementById("ExpDate").value;   
  var datePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if(!datePattern.test(ExpDate))
  {
    document.getElementById("expDate").innerHTML=" * Expiry date format is invalid";
    returnvalue=false;
    return returnvalue;
  }
  document.getElementById("expDate").innerHTML=""; //resetting the error message
  return returnvalue;
}

function ValidateCCV(){ //check that the CCV is in the correct format
  var returnvalue=true;
  var CCV=document.getElementById("CCV").value;
  var CCVPattern = /^[0-9]{3,4}$/;
  if(!CCVPattern.test(CCV))
  {
    document.getElementById("ccvinfo").innerHTML=" * CCV format is invalid";
    returnvalue=false;
    return returnvalue;
  }
  document.getElementById("ccvinfo").innerHTML=""; //resetting the error message
  return returnvalue;
}

function ValidateCardNumber(){ //check that the card number is in the correct format
  var returnvalue=true;
  var cardNumber=document.getElementById("CardNumber").value;
  var cardPattern = /^[0-9]{16}$/;
  if(!cardPattern.test(cardNumber))
  {
    document.getElementById("cardnum").innerHTML=" * Card number only takes 16 digits numeric value";
    returnvalue=false;
    return returnvalue;
  }
  document.getElementById("cardnum").innerHTML="";  //resetting the error message
  return returnvalue;
}