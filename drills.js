'use strict'

function max(numbers) {
    let i = 0;
    let currrentMax = numbers[0];
    while (i < numbers.length) {
        if (currrentMax < numbers[i]) {
            currrentMax = numbers[i];           
        }
        i++;
    }
    return currrentMax;
  }
  
  function min(numbers) {
    let i = 0;
    let currrentMin = numbers[0];
    while (i < numbers.length) {
        if (currrentMin > numbers[i]) {
            currrentMin = numbers[i];           
        }
        i++;
    }
    return currrentMin;
  }
  function average(numbers) {
    let sum = 0; 
    let divisor = numbers.length; 
    numbers.forEach(number => sum += number); 
    return sum / divisor; 
  }
// function that multiplies a strin n number of times 
// Has to be an annon function 
function Hello(){
    return 'Hello World ';  
}
function Goodbye(){ 
    return 'Goodbye World '; 
}
const repeat = function newRepeat (string, n){
    return string.repeat(n); 
} 
     
console.log(repeat(Hello(), 5)); 



function filter(arr,fn) {

// console.log(arr.filter(fn));

    let newArray = [];
    for ( let i = 0; i < arr.length; i++) {
        if (fn(arr[i][0]) === true) {
            newArray.push(arr[i]);
        }
    } 
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
 //   console.log(Boolean (name[0] === 'R'));
    return name[0] === 'R';
    
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning){
    let warningCounter = 0; 
    return function(location){
        warningCounter++; 
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`); 
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const stoneWarning = hazardWarningCreator('Stones on the Road');
const brickWarning = hazardWarningCreator('Bricks on the Road');

// console.log(rocksWarning('Boom')); 
// console.log(rocksWarning('Bam')); 
// console.log(rocksWarning('BANG!'));  
// console.log(stoneWarning('bathroom'));
// console.log(stoneWarning('your house'));
// console.log(stoneWarning('your mommas house'));
// console.log(brickWarning('at church')); 
// console.log(brickWarning('at breakfast'));
// console.log(brickWarning('EVERYWHERE!'));

// let newTurtleArray = []; 
// function newFunction(array){
//     let newOption = [];  
//     let i = 0;  
//         // console.log(turtleArray[i]);
//         if( array[i][0] >= 0){
//             i++;
//           newOption.push(array[i][0]); 
//         //    console.log(newOption);
//         }
//         // if( turtleArray[i] >= 0){
//         //     newOption.push(turtleArray[i]);  
//         //   }
//         console.log(newOption);
     
//     return newOption; 
//     }
let turtleArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
const forward = 0; 
const right = 0;  
const noNegatives = turtleArray.filter(num => num[0] >= 0 && num[1] >= 0).map(num => num[0] + num[1]).forEach((num, index) => console.log( `in the ${index +1} case, the turtle took ${num} steps.`) );   
    console.log(noNegatives); 

    



// turtleArray.filter(arr => {
//         let negativeArr = arr.filter(num => {
//              return num < 0
//         })
//     return negativeArr.length === 0;
//      })
//   console.log(noNegatives);
//     let shit = n + 1;
//     console.log(key[shit]); 
//    if(key[n] > 0){
//        newTurtleArray += key[n]; 
//    } 
//    if (key[n] > 0){
//        newTurtleArray += key[n]; 
//    } })
//    );