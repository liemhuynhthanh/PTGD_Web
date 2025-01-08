// JF part 1
// Test Data 1
var mark_mass1 = 78;
var mark_height1 = 1.69;
var john_mass1 = 92; 
var john_height1 = 1.95; 

var mark_bmi1 = mark_mass1 / (mark_height1 ** 2);
var john_bmi1 = john_mass1 / (john_height1 ** 2);
var mark_higher_bmi1 = mark_bmi1 > john_bmi1;

console.log("Test Data 1:");
console.log("Mark's BMI: "+ mark_bmi1);
console.log("John's BMI: "+john_bmi1);
console.log("Does Mark have a higher BMI than John?"+mark_higher_bmi1);

// Test Data 2
var mark_mass2 = 95;
var mark_height2 = 1.88;
var john_mass2 = 85; 
var john_height2 = 1.76; 

var mark_bmi2 = mark_mass2 / (mark_height2 ** 2);
var john_bmi2 = john_mass2 / (john_height2 ** 2);
var mark_higher_bmi2 = mark_bmi2 > john_bmi2;

console.log("\nTest Data 2:");
console.log("Mark's BMI: "+mark_bmi2);
console.log("John's BMI: "+john_bmi2);
console.log("Does Mark have a higher BMI than John?"+mark_higher_bmi2);

// JF part 2


mark_bmi1 = parseFloat(mark_bmi1);
john_bmi1 = parseFloat(john_bmi1);

mark_bmi2 = parseFloat(mark_bmi2);
john_bmi2 = parseFloat(john_bmi2);

// Test Data 1 
if (mark_bmi1 > john_bmi1) {
    console.log("Mark's BMI "+ mark_bmi1+" is higher than John's" +john_bmi1+"!");
} else {
    console.log("John's BMI "+john_bmi1+" is higher than Mark's "+mark_bmi1+"!");
}

// Test Data 2 
if (mark_bmi2 > john_bmi2) {
    console.log("Mark's BMI "+mark_bmi2+" is higher than John's "+john_bmi2+"!");
} else {
    console.log("John's BMI "+john_bmi2+" is higher than Mark's "+mark_bmi2+"!");
}
