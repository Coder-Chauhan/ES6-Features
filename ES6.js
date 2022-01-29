// change everything below to the newer Javascript!

// let + const
var a = 'test';
var b = true;
var c = 789;
a = 'test2';

// ES6
let aNew = 'test';
const bNew = true;
const cNew = 789;
aNew = 'test2'; 


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// ES6 
let {firstNameNew,lastNameNew,ageNew,eyeColorNew} = obj


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

// ES6
let okObjNew = {
    a,
    b,
    c
}


// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// ES6
let messageNew = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(yes) {
    return yes
}

// ES6
function isValidAgeNew(ageNew=30) {
    return ageNew
}

// Symbol
// Create a symbol: "This is my first Symbol"
let sym = Symbol("This is my first symbol");


// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

// ES6
const whereAmINew = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
