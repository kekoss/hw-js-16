n = +prompt("random number"); 
const fibonacci = function(n){
    if (n <= 1 && n >= -1) {
        return n 
    } else if(n > 1) {
        return (fibonacci(n - 1) + (fibonacci(n - 2)))
    } else if(n < -1) {
        return (fibonacci(n + 1) + (fibonacci(n + 2)))
    }
}
alert(fibonacci(n))