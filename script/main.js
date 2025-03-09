let empString = `{

"employees": [

{ "firstName": "John", "lastName": "Doe", "age": 30, "department": "HR", "salary": 50000 },

{ "firstName": "Anna", "lastName": "Smith", "age": 27, "department": "Finance", "salary": 60000 },

{ "firstName": "Peter", "lastName": "Jones", "age": 40, "department": "IT", "salary": 75000 },

{ "firstName": "Mary", "lastName": "Johnson", "age": 35, "department": "Marketing", "salary": 55000 }

]

}`;

let empObj = JSON.parse(empString.toString());



function MapFullName(empObect){ //***Mapping firstname and lastname and writing it to the console****/







}//end of MapFullName function




function formName(Questions) //Parameter questions determines which form is displayed
{
   
    dontDisplayforms(); 
   
    switch (Questions){
       case 'Question1A':
          document.getElementById("Question1A").style.display = 'block';
          break;

          case 'Question1B':
            document.getElementById("Question1B").style.display = 'block';
            MapFullName(empObj);
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





function DemoDivClear()
{
    document.getElementById("demo").innerHTML="";
}



//******Question 1A1 Button Click */
var stQues1A1= document.getElementById("Ques1A1");
stQues1A1.addEventListener("click", () =>{
    let empObj = JSON.parse(empString.toString());
    alert("parse successfully");
});

//******Question 1A2 Button Click */
var stQues1A2= document.getElementById("Ques1A2");
stQues1A2.addEventListener("click", ()=>
{
    let start=0;
    let formatstring="";
    let empObj = JSON.parse(empString.toString());
    
    for (start=0; start<empObj.employees.length; start++){
        formatstring=formatstring+"<li>"+empObj.employees[start].firstName+" "+empObj.employees[start].lastName+" "+ empObj.employees[start].age +" "+empObj.employees[start].department+" $"+empObj.employees[start].salary+ " </li>";
    }  
      formatstring="<ul>"+formatstring+"</ul>";
      document.getElementById("demo").innerHTML=formatstring;
});


//*****Clear demo div */
var cleardemodiv= document.getElementById("ClrDemoDiv");
cleardemodiv.addEventListener("click", ()=>
{
    document.getElementById("demo").innerHTML="";
});

//**************Question 1B1***** */


var mapMethod= document.getElementById("Ques1B1");
mapMethod.addEventListener("click", ()=>{
    let fullNames;
    let empObj = JSON.parse(empString.toString());
    fullNames = empObj.employees.map(employees => `${employees.firstName} ${employees.lastName}`);
    console.log("Mapping firstname and lastname:");
    console.log(fullNames);
    
});

//**************Question 1B2*****
var calSal=document.getElementById("Ques1B2");
calSal.addEventListener("click", ()=>{
    let empObj = JSON.parse(empString.toString());
   
    const totalPriceReduce = empObj.employees.reduce((sum, product) => sum + product.salary, 0); // using the reduce method to find the toal salary
    console.log("Total Salary: $"+totalPriceReduce);                                               //and alerting the value
    alert("Total Salary: $"+totalPriceReduce);
    
});

var filempSal=document.getElementById("Ques1B3");
filempSal.addEventListener("click", ()=>{
   
/*****************************************************************************************
*     Using the filter method to find a specific value and logging it to the console      *
*******************************************************************************************/
let empObj = JSON.parse(empString.toString());
const result = empObj.employees.filter((x)=>x.salary > 55000);
console.log("Employee salary > $55,000 are :");
console.log(result);

});

var empAgeSort=document.getElementById("Ques1B4");
empAgeSort.addEventListener("click", ()=>{
/***************************************************************************************
*    Using the sort method to sort age ascending and logging the result to the console *
****************************************************************************************/
let empObj = JSON.parse(empString.toString());
empObj.employees.sort((a, b) => (a.age > b.age ? 1 : -1));// sorting by age
console.log("Sorting by age ascending are as follows:");
console.log(empObj.employees);

/****************************************************************
*     Writing the sorted age value to a div name "Demo"         *
*****************************************************************/
formatstring=""
for (start=0; start<empObj.employees.length; start++){
    formatstring=formatstring+"<li>"+empObj.employees[start].firstName+" "+empObj.employees[start].lastName+" "+ empObj.employees[start].age +" "+empObj.employees[start].department+" $"+empObj.employees[start].salary+ " </li>";
    
}  
 formatstring="<ul>"+formatstring+"</ul>";
 document.getElementById("Demo").innerHTML=formatstring;


});

//*****writing the sorted data to the console */
var jsonnewLis=document.getElementById("Ques1C1");
jsonnewLis.addEventListener("click", ()=>{
    let empObj = JSON.parse(empString.toString());
    empObj.employees.sort((a, b) => (a.age > b.age ? 1 : -1));// sorting by age
    
    JSON.stringify( empObj.employees.toString());
    console.log( empObj.employees);

});

//*************Saving the Json data to Localstorage */
var strJsonData=document.getElementById("1C2");
strJsonData.addEventListener("click", ()=>{
    var getdata=document.getElementById("storeJson").value;
    if(getdata==="")
    {
    alert("Please enter the name to save the data as");
    document.getElementById("storeJson").focus();
    }
    else
    {
    localStorage.setItem(getdata, JSON.stringify(empObj.employees));

    }

});

var retrveLog=document.getElementById("1C3");
retrveLog.addEventListener("click", ()=>{ //Retrieving data from local storage and writing it to the console

    var getdata=document.getElementById("retrieveJson").value;
    if(getdata==="")
    {
    alert("Please enter the data name to be written to the console");
    document.getElementById("retrieveJson").focus();
    }
    else
    {
         var retrveLog = localStorage.getItem(getdata);
        // CONVERT STRING TO REGULAR JS OBJECT
        var parsedObject = JSON.parse(retrveLog);
        // ACCESS DATA
        console.log(parsedObject); //write it to console

    }

});

// event handler to remove a list from local storage
var RemoveEmployeeBtn=document.getElementById("1C4");
RemoveEmployeeBtn.addEventListener("click", ()=>  
    {
        var getdata=document.getElementById("removeEmp").value;
        if(getdata==="")
        {
        alert("Please enter the data name you wabt to remove");
        document.getElementById("removeEmp").focus();
        }
        else
        {
        
           localStorage.removeItem(removeEmp);
           console.log("Removing Item");
           let storageTitle = JSON.parse(localStorage.getItem("Store-Employee"));   
         
           console.log("Item "+removeEmp+ " Removed");
        
        }
      
    });

    var RemoveAllStorage=document.getElementById("1C5");
    RemoveAllStorage.addEventListener("click", ()=>  
        {
           localStorage.clear();
        });
 





 