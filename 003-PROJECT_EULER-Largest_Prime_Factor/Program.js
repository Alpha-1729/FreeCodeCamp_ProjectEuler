// Largest Prime Factor

/*
>>>> Question Link:
        https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-3-largest-prime-factor
>>>> Reference Link:
        https://stackoverflow.com/questions/23287/algorithm-to-find-largest-prime-factor-of-a-number
        https://iq.opengenus.org/largest-prime-factor-of-a-number/
        https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-problem-3-largest-prime-factor/301952
>>>>
>>>>
>>>>
>>>>
*/

function largestPrimeFactor(number) {
    const upperLimit = Math.sqrt(number);

    let i = 2;
    while (number > 1) {
        if (number % i == 0) {
            number /= i;
        }
        else {
            if (i > upperLimit) {
                return number;
            }
            i += 1;
        }
    }
    return i;
}

console.log(largestPrimeFactor(524287));
