//Notes:
// This is a comment which can help me understand my code later

/*This is a comment block
it can span multiple lines
and then it can be closed like this
*/
// How to create variables:
var x;
let y;
// How to use variables:
x = 5;
y = 6;
let z = x + y;
//let z = x + x;
// a const variable cannot be reassigned
const PI = 3.141592653589793;
//PI = 10; // this code will not work

console.log("PI: " + PI);
// const variables must be assigned a value
// this code will not work
//const PI2;
//PI2 = 3.14159265359;
// always use const when you know the value should not be changed

// using camelCase is the most common way of naming variables

var firstName = "AWISPO";
var lastName = "Digital Marketing";

let fullName = firstName + " " + lastName;

console.log("First Name: " + firstName + " Last Name: " + lastName);
console.log("Full Name " + fullName);

console.log("X: " + x + "\n" + "Y: " + y + "\n" + "Z: " + z);

console.log("this is" + " a " + "combined string with an integer: " +z);
let incrementNum = 0;
console.log("the number: " + incrementNum);
incrementNum++;
console.log("the incremented number: " + incrementNum);
function myClickFunction() {
    alert("Welcome to AWISPO");
}
// Sample JSON data as a string

var jsonData = '{"name": "John Doe", "age": 30, "city": "New York"}';



// Parsing JSON data to a JavaScript object

var parsedData = JSON.parse(jsonData);



// Printing the JavaScript object to the console log

console.log(parsedData);



// Accessing properties of the JavaScript object

console.log("Name: " + parsedData.name);

console.log("Age: " + parsedData.age);

console.log("City: " + parsedData.city);

function fun() {
    
   
    $(document).ready(function () {
  
        console.log("HELLO");
        // FETCHING DATA FROM JSON FILE
       
    $.getJSON( "launch.json", function( data ) {
       
       console.log(data)
      });
    });
}

fun()
document.getElementById('name').textContent = data.name;
      console.log("Name is: "+data.name)
      document.getElementById('profession').textContent = data.profession;
      console.log("Profession is: "+data.profession)
      document.getElementById('experience').textContent = `Experience: ${data.experience}`;
      console.log("Experience is: "+data.experience)