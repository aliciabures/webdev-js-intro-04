"use strict";
/*  - [ ] Create an immutable variable that will store a reference to the paragraph tag with the id of `response`.
    - [ ] Create a mutable variable called `age`, but do not assign it a value.
    - [ ] Write your conditional logic inside the `checkAgeAndRespond` function.
    - [ ] Read and try to understand the code that exists already. Write notes/questions and bring them to class.*/

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");
const response = document.getElementById("response");

// create a mutable variable called age and do not assign it a value.

let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
}
if (age >= 21) {
    console.log("You can vote and purchase alcohol.")
} 
    else if (age >= 18 && age < 21) {
    console.log ("You can vote, but you cannot purchase alcohol.")
} else { console.log("You cannot vote and you cannot purchase alcohol.");
}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();

});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);

    



