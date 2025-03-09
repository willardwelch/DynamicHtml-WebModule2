






function formName(Questions) //Parameter questions determines which form is displayed
{
   
    dontDisplayforms(); 
   
    switch (Questions){
       case 'Question1A':
          document.getElementById("Question1A").style.display = 'block';
          break;

          case 'Question1B':
            document.getElementById("Question1B").style.display = 'block';
           // MapFullName(empObj);
            break;

            case 'Question1C':
                document.getElementById("Question1C").style.display = 'block';         
                break;

            case 'Question2':
                document.getElementById("Question2").style.display = 'block';         
                    break;

            case 'Question3':
                document.getElementById("Question3").style.display = 'block';         
                        break;


    }//end of switch
}//end of formName function


function dontDisplayforms()   //hides all form
{    
   document.getElementById("Question1A").style.display = 'none';
   document.getElementById("Question1B").style.display = 'none';
   document.getElementById("Question1C").style.display = 'none'; 
   document.getElementById("Question2").style.display = 'none';
   document.getElementById("Question3").style.display = 'none';
   LoadCountries(document.getElementById('country'));
   LoadCountries(document.getElementById('country1'));
}//end of dontDisplayforms function



//*****************Qusesti */
function removeEffect()
{
       
     
}



