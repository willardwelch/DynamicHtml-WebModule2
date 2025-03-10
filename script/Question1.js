let empString = `{

"employees": [

{ "firstName": "John", "lastName": "Doe", "age": 30, "department": "HR", "salary": 50000 },

{ "firstName": "Anna", "lastName": "Smith", "age": 27, "department": "Finance", "salary": 60000 },

{ "firstName": "Peter", "lastName": "Jones", "age": 40, "department": "IT", "salary": 75000 },

{ "firstName": "Mary", "lastName": "Johnson", "age": 35, "department": "Marketing", "salary": 55000 }

]

}`;

let empObj = JSON.parse(empString.toString());


//******Question 1A1 Button Click****** */
//****Parsing the JSON data using JSON.parse()
var stQues1A1= document.getElementById("Ques1A1");
stQues1A1.addEventListener("click", () =>
{
    let empObj = JSON.parse(empString.toString());
    alert("parse successfully");
});



//******Question 1A2 Button Click **************
// Formating employee JSON object and displaying it
// ****** in a div called demo*****/
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



//*****Clear demo div on click of a button*/
var cleardemodiv= document.getElementById("ClrDemoDiv");
cleardemodiv.addEventListener("click", ()=>
{
    document.getElementById("demo").innerHTML="";
});



//**************Question 1B1***** 
// *****Using the map function to map firstname and lastname and write
// **** it to the console***************/
var mapMethod= document.getElementById("Ques1B1");
mapMethod.addEventListener("click", ()=>
{
    let fullNames;
    let empObj = JSON.parse(empString.toString());
    fullNames = empObj.employees.map(employees => `${employees.firstName} ${employees.lastName}`);
    console.log("Mapping firstname and lastname:");
    console.log(fullNames);
    
});

//**************Question 1B2*******************
//****Calculating overall salary using the reduce method
// ****** writing it to the console and giving an alert message
// *******with the figure************** */
var calSal=document.getElementById("Ques1B2");
calSal.addEventListener("click", ()=>
{
    let empObj = JSON.parse(empString.toString());
   
    const totalPriceReduce = empObj.employees.reduce((sum, product) => sum + product.salary, 0); // using the reduce method to find the toal salary
    console.log("Total Salary: $"+totalPriceReduce);                                               //and alerting the value
    alert("Total Salary: $"+totalPriceReduce);
    
});

              //**************Question 1B3*******************
/*****************************************************************************************
*     Using the filter method to find a specific value and logging it to the console      *
*******************************************************************************************/
var filempSal=document.getElementById("Ques1B3");
filempSal.addEventListener("click", ()=>
{
   
let empObj = JSON.parse(empString.toString());
const result = empObj.employees.filter((x)=>x.salary > 55000);
console.log("Employee salary > $55,000 are :");
console.log(result);

});


             //**************Question 1B4*******************
/***************************************************************************************
*    Using the sort method to sort age ascending and writing it to a div Demo *
****************************************************************************************/
var empAgeSort=document.getElementById("Ques1B4");
empAgeSort.addEventListener("click", ()=>
{
    let empObj = JSON.parse(empString.toString());
    empObj.employees.sort((a, b) => (a.age > b.age ? 1 : -1));// sorting by age
  //  console.log("Sorting by age ascending are as follows:");
  //  console.log(empObj.employees);
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




      //**************Question 1C1*******************
/********Convert the sorted employee list back to JSON format using JSON.stringify()*/
var jsonnewLis=document.getElementById("Ques1C1");
jsonnewLis.addEventListener("click", ()=>
{
    let empObj = JSON.parse(empString.toString());
    empObj.employees.sort((a, b) => (a.age > b.age ? 1 : -1));// sorting by age
    
    JSON.stringify( empObj.employees.toString());
    alert("Done");
   // console.log( empObj.employees);

});




     //**************Question 1C2*******************
//*Storing the JSON data in localStorage using localStorage.setItem()
var strJsonData=document.getElementById("1C2");
strJsonData.addEventListener("click", ()=>
{
    var getdata=document.getElementById("storeJson").value;
    if(getdata==="")
    {
    alert("Please enter the data name to retreive and log");
    document.getElementById("storeJson").focus();
    }
    else
    {
      
     empObj.employees.sort((a, b) => (a.age > b.age ? 1 : -1));// sorting by age
     localStorage.setItem(getdata, JSON.stringify(empObj.employees));

    }
});



//*******************Question 1C3*******************
//******Retrieving and logging the stored data using localStorage.getItem().

var retrveLog=document.getElementById("1C3");
retrveLog.addEventListener("click", ()=>
{ 
    var getdata=document.getElementById("retrieveJson").value;
    if(getdata==="")
    {
    alert("Please enter the data name to be retrieve and written to the console");
    document.getElementById("retrieveJson").focus();
    }
    else
    {
       var retrveLog = localStorage.getItem(getdata);
       var parsedObject = JSON.parse(retrveLog); // CONVERT STRING TO REGULAR JS OBJECT
       console.log(parsedObject); //write it to console
    }

});



//*******************Question 1C4*******************
// Remove a specific employee record from localStorage
// ****** using localStorage.removeItem()
var RemoveEmployeeBtn=document.getElementById("1C4");
RemoveEmployeeBtn.addEventListener("click", ()=>  
    {
       var getdata=document.getElementById("removeEmp").value;
        if(getdata==="")
        {
        alert("Please enter the data name you want to remove");
        document.getElementById("removeEmp").focus();
        }
        else
        {
        
           let storageTitle = JSON.parse(localStorage.getItem(getdata));             
           localStorage.removeItem(getdata);
           console.log("Removing Item");
           console.log("Item "+removeEmp+ " Removed");
        
        }
      
    });


//*******************Question 1C5*******************
//****Clear all stored employee data from localStorage 
// **********using localStorage.clear( */
var RemoveAllStorage=document.getElementById("1C5");
RemoveAllStorage.addEventListener("click", ()=>  
{
           localStorage.clear();
});
 

//*****Clear demo div*******/
var clearStoragediv= document.getElementById("ClrDemoDiv1"); //Clearing the Demo div on a button click
clearStoragediv.addEventListener("click", ()=>
{
    document.getElementById("Demo").innerHTML="";
});
        


 