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


  
  