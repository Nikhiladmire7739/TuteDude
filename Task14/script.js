let n1 = 20;

// First requirement Sum till N numbers
function sumTillN(num){
    sum = 0;
    for (let i = 1; i <=num; i++){
      sum += i
    }  
  return sum;
}
console.log(`Sum of the numbers till ${n1} is ${sumTillN(n1)}.`);

let n2 = 10;
// Second requirement is to print table.
function printTable(num){
  for (let i = 1; i <=10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
printTable(n2);

let n3 = 143;
// Third requirement is to check if the number is prime or not.
function checkPrime(num){
  let isPrime = true;
  for (let i = 2; i <num; i++){
    if (num % i == 0){
      isPrime = false
      break;
    }
  }
  return isPrime;
}

console.log(`The number entered ${n3} is prime? Answer : ${checkPrime(n3)}.`);

let n4 = 100;
// Fourth requirement is to print all the factors of the number.
function checkFactors(num){
  for (let i = 2; i <num; i++){
    if (num % i == 0){
      console.log(`${i} is a factor of ${n4}.`);
    }
  }
}
checkFactors(n4);

let n5 = 379;
// Fifth requirement of the Task to print sum of digits.
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(`The sum of the digits of the provided number ${n5} is ${sumOfDigits(n5)}.`);

let n6 = 153;
// Sixth requirement of the Task to check if the number is an Armstrong number.

function checkArmstrong(num) {
  let originalNum = num;
  let digits = num.toString().length;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit ** digits;
    num = Math.floor(num / 10);
  }

  return sum === originalNum;
}

console.log(`Is ${n6} an Armstrong number? ${checkArmstrong(n6)}`);
