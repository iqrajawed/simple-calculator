#! /usr/bin/env node 

import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
    {message:"Enter your First number", type:"number", name:"firstnumber"},
   {message:"Enter your second number", type:"number", name:"secondnumber"}, 
   {message:"select one of the operator to perform operator",
   type:"list",
   name:"operator",
   choices:["addition" , "subtraction" , "multiplication" , "division"]
}
]);
//condition statement 
if (answer.operator ==="addition"){
    console.log(answer.firstnumber + answer.secondnumber);
}
else if(answer.operator ==="subtraction"){
    console.log(answer.firstnumber - answer.secondnumber)
}
else if(answer.operator ==="multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
}
else if(answer.operator ==="division"){
    console.log(answer.firstnumber / answer.secondnumber)
}
else{
    console.log("please select valid answer")
}
console.log("THE END");