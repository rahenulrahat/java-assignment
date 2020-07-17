
//feetToMile Function


 function feetToMile(mile){
     var feet = mile / 20000;
     return feet;
 }
 var result = feetToMile(2);
 console.log(result);


// Woodcalculator Function


function woodCalculator(chair, table, bed){
    var chairCount = chair * 4;
    var tableCount = table * 6;
    var bedCount = bed * 10;
    var totalwood = chairCount + tableCount + bedCount;
    return totalwood;
}
var woodresult = woodCalculator(10, 4, 6);
console.log(woodresult);


//brickcalculator function


function brickCalculator(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial
}   
var result = brickCalculator(10);
console.log(result);


// tinyfriend function

function tinyFriend (person){
    var smallest = person[0];
    for(var i = 0; i < person.length; i++){
        var currentName = person[i];
        if (smallest < currentName){
            smallest = currentName;
        }
    }
    return smallest;
}
var smallestName = tinyFriend(['rohan', 'peter', 'rafat', 'suba', 'jibon','mehedhi',]);
console.log(smallestName);