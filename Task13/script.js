let n1 = 15125;
let n2 = 21221;
let n3 = 3020;
let n4 = 49;

function iseven(num){
    let txt;
    if (num % 2 === 0) {
        return txt="even";
    } else {
        return txt="odd";
    }
}

console.log(`The number ${n1} is ${iseven(n1)}.`);
console.log(`The number ${n2} is ${iseven(n2)}.`);
console.log(`The number ${n3} is ${iseven(n3)}.`);
console.log(`The number ${n4} is ${iseven(n4)}.`);
