// let grade = prompt("Enter your Grade");

// let result = grade == "A" ||grade == "B"||grade == "C" ? "Pass" : "Fail";
// document.write(result);


let grade = prompt("Enter your Grade");
let per = parseInt(prompt("Enter your Percentage"));

let result = per===90 && grade == "A" ||per===80 &&grade == "B"? "Pass" : "Fail";
document.write(result);
