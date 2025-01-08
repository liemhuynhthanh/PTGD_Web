// JF part 1-1
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

// JF part1- 2


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


// JF part 1-3

var dolphinsScores1 = [96, 108, 89];
var koalasScores1 = [88, 91, 110];

var dolphinsScoresBonus1 = [97, 112, 101];
var koalasScoresBonus1 = [109, 95, 123];

var dolphinsScoresBonus2 = [97, 112, 101];
var koalasScoresBonus2 = [109, 95, 106];

function avg(scores) {
    return scores.reduce(function (a, b) { return a + b; }, 0) / scores.length;
}

// Hàm xác định đội chiến thắng dựa trên điểm trung bình và các điều kiện
function determineWinner(dolphinsScores, koalasScores) {
    // Tính điểm trung bình cho mỗi đội
    const dolphinsAverage = avg(dolphinsScores);
    const koalasAverage = avg(koalasScores);

    // In điểm trung bình của từng đội
    console.log("Dolphins Average: " + dolphinsAverage.toFixed(2));
    console.log("Koalas Average: " + koalasAverage.toFixed(2));

    // Kiểm tra xem có đội nào đủ điều kiện nhận cúp không
    if (dolphinsAverage >= 100 || koalasAverage >= 100) {
        // So sánh điểm trung bình để xác định đội thắng
        if (dolphinsAverage > koalasAverage) {
            console.log("Dolphins win the trophy! 🏆");
        } else if (koalasAverage > dolphinsAverage) {
            console.log("Koalas win the trophy! 🏆");
        } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100) {
            console.log("All win");
        } else {
            console.log("No team win.");
        }
    } else {
        // Không đội nào đủ điều kiện nhận cúp
        console.log("No team qualifies.");
    }
}
// Dữ liệu kiểm tra
console.log("Test Data 1:");
determineWinner(dolphinsScores1, koalasScores1);

console.log("\nBonus Data 1:");
determineWinner(dolphinsScoresBonus1, koalasScoresBonus1);

console.log("\nBonus Data 2:");
determineWinner(dolphinsScoresBonus2, koalasScoresBonus2);

// JF part 1 -4

// Test Data
let bills = [275, 40, 430];

bills.forEach(function (bill) {
    
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

    
    let total = bill + tip;

   
    console.log(
        "The bill was " + bill +
        ", the tip was " + tip.toFixed(2) +
        ", and the total value " + total.toFixed(2)
    );
});


// Part 2-1
// Arrow function để tính điểm trung bình của 3 lượt
var calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Hàm kiểm tra đội chiến thắng theo luật
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins win (" + avgDolphins + " vs. " + avgKoalas + ")");
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas win (" + avgKoalas + " vs. " + avgDolphins + ")");
    } else {
        console.log("No team wins!");
    }
}

// Test Data 1
var dolphinsAvg1 = calcAverage(44, 23, 71); // Tính điểm trung bình của Dolphins
var koalasAvg1 = calcAverage(65, 54, 49);   // Tính điểm trung bình của Koalas
console.log("Test Data 1:");
checkWinner(dolphinsAvg1, koalasAvg1);      // Kiểm tra đội chiến thắng

// Test Data 2
var dolphinsAvg2 = calcAverage(85, 54, 41); // Tính điểm trung bình của Dolphins
var koalasAvg2 = calcAverage(23, 34, 27);   // Tính điểm trung bình của Koalas
console.log("\nTest Data 2:");
checkWinner(dolphinsAvg2, koalasAvg2);      // Kiểm tra đội chiến thắng


