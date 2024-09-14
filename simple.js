// example 01
let sum3 = 0;
for (let i = 1; i <= 5; i++) {
    sum3 = sum3 + i;
}
console.log(sum3);

// example 02
let sum2 = 0;
for (let i = 5; i >= 1; i--) {
    sum2 = sum2 + i;
}
console.log(sum2);

// example 03
function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);

/* 
    5 + sum(4)
    5 + 4 + sum (3)
    5 + 4 + 3 + sum (2)
    5 + 4 + 3 + 2 + sum(1)
    5 + 4 + 3 + 2 + 1
*/