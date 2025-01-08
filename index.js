// Test Data 1
let mark_mass1 = 78;
let mark_height1 = 1.69;
let john_mass1 = 92; 
let john_height1 = 1.95; 

let mark_bmi1 = mark_mass1 / (mark_height1 ** 2);
let john_bmi1 = john_mass1 / (john_height1 ** 2);
let mark_higher_bmi1 = mark_bmi1 > john_bmi1;

console.log("Test Data 1:");
console.log("Mark's BMI: "+ mark_bmi1);
console.log("John's BMI: "+john_bmi1);
console.log("Does Mark have a higher BMI than John?"+mark_higher_bmi1);

// Test Data 2
let mark_mass2 = 95;
let mark_height2 = 1.88;
let john_mass2 = 85; 
let john_height2 = 1.76; 

let mark_bmi2 = mark_mass2 / (mark_height2 ** 2);
let john_bmi2 = john_mass2 / (john_height2 ** 2);
let mark_higher_bmi2 = mark_bmi2 > john_bmi2;

console.log("\nTest Data 2:");
console.log("Mark's BMI: "+mark_bmi2);
console.log("John's BMI: "+john_bmi2);
console.log("Does Mark have a higher BMI than John?"+mark_higher_bmi2);
