// ---------------------------------------------
// Part 1: Variable Declarations & Conditionals
// ---------------------------------------------

let username = "KIRUI DOMINIC";
let age = 21;
let isMember = true;

if (age >= 18) {
  console.log(username + " is an adult.");
} else {
  console.log(username + " is a minor.");
}

if (isMember) {
  console.log("Welcome, valued member!");
} else {
  console.log("Please sign up to become a member.");
}

// ---------------------------------------------
// Part 2: Custom Functions
// ---------------------------------------------

// Function 1: Display a greeting in the DOM
function greetUser() {
  let greeting = `Hello, ${username}!`;
  document.getElementById("message").textContent = greeting;
}

// Function 2: Add items to fruit list in the DOM
function listFruits() {
  let fruits = ["Apple", "Banana", "Cherry", "Mango"];
  let fruitList = document.getElementById("fruit-list");
  fruitList.innerHTML = ""; // Clear existing list

  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
  }
}

// ---------------------------------------------
// Part 3: Loops
// ---------------------------------------------

// Loop Example 1: For loop to show even numbers
function showEvenNumbers() {
  let message = "Even numbers between 1 and 10: ";
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      message += i + " ";
    }
  }
  document.getElementById("message").textContent = message;
}

// Loop Example 2: While loop to count down
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// ---------------------------------------------
// Part 4: DOM Interactions
// ---------------------------------------------

// DOM Interaction 1: Update innerText
// (Done in greetUser and showEvenNumbers)

// DOM Interaction 2: Create and append elements
// (Done in listFruits)

// DOM Interaction 3: Clear and rewrite content
// (fruitList.innerHTML = "")
