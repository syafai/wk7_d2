// //==========Exercise #1 ===========//
// /*
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:
// */

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let [key, value] of Object.entries(person3)){
    if (Array.isArray(value)){
        console.log(`${key}:`)
        value.forEach(value => console.log(value))
    } else {
        console.log(`${key}: ${value}`)
    }
}

// //=======Exercise #2=========//
// /*
// Write an object prototype for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the persons age by 1 each time the method is called.
// Create two people using the 'new' keyword, and print 
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods
// */

// // Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
    
    this.addAge = (years) => {
      this.age += years;
    };
  }
  
  // Create two people using the 'new' keyword
  let person1 = new Person("Saraa", 27);
  let person2 = new Person("Abdulla", 30);
  
  // Print both persons' info
  person1.printInfo();
  person2.printInfo();
  
  // Add 3 years to the first person's age
  person1.addAge(3);
  
  // Print the updated info of the first person
  person1.printInfo();
  


// // =============Exercise #3 ============//
// /*

// Create a Promised based function that will check a string to determine if it's length is greater than 10.
// If the length is greater than ten console log "Big word". 
// If the length of the string is less than 10 console log "Small Number"

const checkString = (string) => {
    return new Promise((resolve, reject) => {
      if (string.length > 10) {
        resolve("Big word");
      } else {
        reject("Small number");
      }
    });
  };
  
  checkString("statue of liberty")
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

//codewars
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task
// Given a year, return the century it is in.

function century(year) {
    // Finish this :)
    let getCentury = Math.ceil(year / 100);
    
    return getCentury;
  }
  

//codewars
//https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    return s.replace(/!/g,'');
  }