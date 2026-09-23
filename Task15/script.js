let arrInput = [4, 8, 2, 11, 6, 7, 10]
function arrMethods (arr, method)
{
  return method(arr)
}

const maxNumber = function (arr){
  let max = 0;
  for (let i=0; i < arr.length; i++){
    if(arr[i] > max ){
      max = arr[i]
    }
 }
 return max;
}
console.log(`${maxNumber(arrInput)}`)

const sumOfAllElements = function (arr){
  let sum = 0
    for (let i=0; i < arr.length; i++){
      sum += arr[i]
    }
    return sum;
}
console.log(`${sumOfAllElements(arrInput)}`)

const countOdds = function (arr){
  let count = 0
    for (let i=0; i < arr.length; i++){
      if (arr[i] % 2 != 0){
        count++
      }
    }
    return count;
}

console.log(`${countOdds(arrInput)}`)

// prining using callback function
console.log(arrMethods(arrInput, maxNumber)); 
console.log(arrMethods(arrInput, sumOfAllElements)); 
console.log(arrMethods(arrInput, countOdds)); 
