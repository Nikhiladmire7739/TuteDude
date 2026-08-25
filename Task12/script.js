function calculateCompoundInterest(P, r, n, t) {
    r = r / 100;
    const A = P * Math.pow(1 + (r / n), n * t);
    const CI = A - P;
    return  CI;
}
const result = calculateCompoundInterest(100000, 14.47, 1, 3);
console.log("The compound intrest after 3 years is ", result.toFixed(2));
