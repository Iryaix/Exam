//  task1 
function strCount(str, letter){  
    return str.split('').filter(c => c == letter).length;
  }
//   task2
function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += Math.pow(numbers[i], 2);
    }
    return sum;
  }
//   task3
function nearestSq(n) {
    let root = Math.round(Math.sqrt(n));
    return root * root;
  }
//   task4
const solution = str => str.split('').reverse().join('');
//  task5
function addLength(str){
    return str.split(' ').map(function(v){return v+' '+v.length})
  }
//   task6
function mango(quantity, price){
    return Math.floor(quantity / 3) * 2 * price + quantity % 3 * price;
  }
//   task7
function litres(time) {
    return Math.floor(time/2);
  }
//   task8
const invert = array => array.map(num => -num);
// task9
function powersOfTwo(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
      result.push(2 ** i);
    }
    return result;
  }
//   task10
const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };







