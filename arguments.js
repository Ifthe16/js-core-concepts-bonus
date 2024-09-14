function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3]);
    console.log(arguments[4]);
}
// available
add(12, 13, 45, 89, 70);