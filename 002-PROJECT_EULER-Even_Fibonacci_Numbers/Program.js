// Even Fibonacci Numbers

/*
>>>> Question Link:
        https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-2-even-fibonacci-numbers
>>>> Reference Link:
        https://medium.com/@TheZaki/project-euler-2-even-fibonacci-numbers-2219e9438970
>>>>
>>>>
>>>>
>>>>
*/

function fiboEvenSum(n) {
    let sum = 0;
    let first = 2;
    let second = 8;
    while (n >= first) {
        sum += first;
        [first, second] = [second, 4 * second + first];
    }
    return sum;
}
console.log(fiboEvenSum(100000));