// prompt user to enter a string of froyo options

// use string of flavors to create an array



let userArray = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"];

function objectOfFlavors(userArray){
    let object = {};
for(let indexCounter = 0; indexCounter < userArray.length; indexCounter++) {
    if(object[userArray[indexCounter]]){ 
        object[userArray[indexCounter]]++
} else { 
    object[userArray[indexCounter]]= 1
}}
console.log(object);
return object;
};
console.log(objectOfFlavors(userArray));

//display a table listing all the flavors ordered and how many of each 

