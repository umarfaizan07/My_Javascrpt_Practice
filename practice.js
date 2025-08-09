//Declaring Variable
var myname;
// string Example
let fathername="Asif";
// number example
const age=14;
// string Example
myname="umer";
// boolean example
let isactive=true;

// Data Types;
// number: 1,2,3,..
// string "Hello" -a sentence or word 
// Boolean = True or False
// Null = Empty or Nothing

/*Operators;  4 Types Of Operators
Earthmatic: +,-,*,/.
Assignment: =,+=,-=,*=.
Comparison: ==,===,!=,!==,<,>,<=,=>.
logical: &&(end),||(or),!(not).
*/


let x =3;
let y=4;
console.log(x+y); //7
let xy=9;
console.log(x-y) //5
console.log(x==y) //False
console.log(x!=y) //true
let yz=9;
console.log(xy==yz) // True

let father_name="Asif";
let my_name="Umar";
let fullname=(my_name+ " "+father_name);
console.log(fullname);//Umar Asif


/*conditional statement
  se murad koi action repeat karana hai or us ki bunyaad pe decision lena hai to 
  is ko istemal es tarah karen if,else,elseif.
*/

let english=39;
if(english<=39){
    console.log("Pass");
}

else{
    console.log("fail");
}
//result=pass

let _english=29;
if(english<=39){
    console.log("Pass");
}

else{
    console.log("fail");
}

let percentage= 56;
if(percentage>=80){
    console.log("Grade A+");
}
else if(percentage>=70){
    console.log("Grade A");
}

else if(percentage>=60){
    console.log("Grade B");
}

else if(percentage>=50){
    console.log("Grade C");
}

else if(percentage>=40){
    console.log("Grade D");
}

else {
    console.log("Fail");
}

//loop meaning is repeating action; (inc operator i++ = i+1)
// For,
// while,
// Dowhile

for (let i=1; i<=5; i++) {
    console.log("Umar" +i);
}

let num=3;
let res,i;

for (i=1; i<=10; i++){
    res=num*i;
    console.log(`${num} * ${i} = ${res}`);
}

let j=1;
while (j<=5) {
        console.log("Umar" +j);
    j++; 
}
   
let k=1;
do {
        console.log("Umar" +k);
        k++;
    } while (k<1);
    

    let row = 4;
    for (let u=1; u<=row; u++) {
        let line=" ";
        for (let v=1; v<=u; v++){
            line+="* ";
        }
     console.log(line);
    }

    /*result
  * 
  * * 
  * * * 
  * * * * 
    
    */
    let row1 = 4;
    for (let z=1; z<=row; z++) {
        let line1=" ";
        for (let y=1; y<=z; y++){
            line1+=y + " ";
        }
     console.log(line1);
    }
     /*result
 1
 1 2
 1 2 3
 1 2 3 4
 */

let secretnum=Math.floor(Math.random()*10)+1;
let attempt=3;
while (attempt>0) {
    let guess=prompt(`Guess the number 1-10 you have ${attempt} attempts left`);
    if (guess==secretnum) {
        alert("Congragulations you guess the correct number");
        break;
    }
    else if (guess<secretnum){
        alert("to low try higher number"); 
    }
    else if (guess>secretnum){
        alert("to high try lowest number"); 
    }
    attempt--;
    if (attempt===0){
        alert(`You are out of attempt the number was ${secretnum};`);
    }

}

let secretnum1=4;
let attempt1=3;
while (attempt>0) {
    let guess=prompt(`Guess the number 1-10 you have ${attempt1} attempts left`);
    if (guess==secretnum) {
        alert("Congragulations you guess the correct number");
        break;
    }
    else if (guess<secretnum){
        alert("to low try higher number"); 
    }
    else if (guess>secretnum){
        alert("to high try lowest number"); 
    }
    attempt1--;
    if (attempt1===0){
        alert(`You are out of attempt the number was ${secretnum1};`);
    }

}

    /*Function:Reuseable block of code is ka kaam hai specific task perform karna. */

function greet() {
    console.log("Hi I am Umar");
}

greet(); //call function

function greetuser(name) {
    console.log("hello,"+name);
}
greetuser("umar");


function add(x,y) {
    return x+y;
}

let result=add(1,8);
console.log(result);
//result=9


/*how to store and organize data using two stucture "Array And Objects"
    .push(); /add value to end. , fruits.push("Strawberry");
    .pop(); / remove from the end.
    .shift();/remove from the beginning.
    .unshift();/add to beginning.
    .forEach();/loop through Array.
    .Includes();/check if value exist.
*/

let fruits = ["Apple","Mango","Banana"];
    console.log(fruits[0]); //result is apple.
    console.log(fruits.length);// ye is sab ki tadaad maloom kar raha hai variable ki.


    //object: collection of key:value
    let person={
        name:"Umar",
        fathername:"Asif",
        Age:14,
        Brothername:"Faizan"
    }
    console.log(person.name);
    person.city="karachi";
    console.log(person.city);

    //Array or object ka combination:
    let students=[
        {name:"Umar", grade:85},
        {name:"faizan", grade:75},
        {name:"hasnain", grade:65},
        {name:"hassan", grade:90},
        {name:"laiba", grade:59}
    ];
   // console.log(students[0].name);//result=Umar
   for (let m=0; m<students.length; m++){
    let student= students[m];
    console.log(student.name+" score "+student.grade);

    if (student.grade>=80) {
        console.log("result:excellent");
    }
    else if (student.grade>=60) {
        console.log("result:pass");
    }
     else {console.log("result:fail");
        
    }
    console.log("--------------------------");
   }  
        /*result
     Umar score 85
     result:excellent
     --------------------------
     faizan score 75
     result:pass
     --------------------------
     hasnain score 65
     result:pass
     --------------------------
     hassan score 90
     result:excellent
     --------------------------
     laiba score 59
     result:fail
     --------------------------

*/

    /*Handling Event and User input   onclick,onchange,oninput,e.t.c
    add event listener
    reading user input .value
    validating input
    */
    
    // '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'  mail check 
   //'/^(?=.*[0-9]).{6,}$/' Password check 6 digits 0-9


    /*<h2>Login Form</h2>
    <form id="signupform">
        <input type="text" id="name" placeholder="Enter Your name">
        <br><br>
        <input type="email" id="email" placeholder="Enter Your Email">
        <br><br>
        <input type="password" id="password" placeholder="Enter Your Password">
        <br><br>
        <button type="submit">Submit</button>
    </form>

    <p id="message" style="color: darkred;"></p>
    
    <script>
        document.getElementById("signupform").addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission

            let nameInput = document.getElementById("name");
            let emailInput = document.getElementById("email");
            let passwordInput = document.getElementById("password");
            let message = document.getElementById("message");

            // Get trimmed values from inputs
            let nameValue = nameInput.value.trim();
            let emailValue = emailInput.value.trim();
            let passwordValue = passwordInput.value.trim();

            // Reset message color
            message.style.color = "red";
            message.textContent = ""; // Clear previous messages

            // --- Corrected Validation for Empty Fields ---
            if (!nameValue || !emailValue || !passwordValue) {
                message.textContent = "All fields are required.";
                return;
            }

            // Strong email pattern
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Removed 'g' flag, not needed for test()
            if (!emailPattern.test(emailValue)) {
                message.textContent = "Invalid email format.";
                return;
            }

            // Strong password pattern (at least 6 characters, contains at least one number)
            // For stronger password, consider adding uppercase, lowercase, special characters
            let passwordPattern = /^(?=.*[0-9]).{6,}$/; // Removed 'g' flag, not needed for test()
            if (!passwordPattern.test(passwordValue)) {
                message.textContent = "Password must be at least 6 characters and contain numbers.";
                return;
            }

            // Success
            message.style.color = "green";
            message.textContent = "Form submitted successfully!";

            // Optionally, clear the form after successful submission
            // nameInput.value = '';
            // emailInput.value = '';
            // passwordInput.value = '';
        });
        
    </script>

</body>
</html>*/



/*JSON: full form = javascript object notation.
JSON.stringify();  convert javascript into a json string useful for saving in local storage.
JSON.parse(); used to convert a json string back into javascript object.
 */


let user={name1:"Umar", age1:14};
let jsondata= JSON.stringify(user);
console.log(jsondata);


let jasondata1='{"name":"Umar", "Age":14, "Class":8}';
let user1= JSON.parse(jasondata1);
console.log(user1.name);


/*
Local Storage And Setion Storage: lifitime is jab tak ap clear na karo while setion storage jesi hi hamne tab close kardiya.

*/

//save data
let usera={name:"Umar", class:8, section:"E"}
localStorage.setItem("usera", JSON.stringify(usera));

//retreive data
let saveuser=JSON.parse(localStorage.getItem("usera"));
console.log(saveuser.name);


//API stands for Application Programming Interface.  Its a way for two application to talk with each other
// ye hame jo data request karte hain woh laake deti hai.


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(post =>{ 
    console.log(post.title);
    console.log(post.body);
  } );

 











