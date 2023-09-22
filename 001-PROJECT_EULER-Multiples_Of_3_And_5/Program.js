// Multiples Of 3 And 5

/*
>>>> Question Link:
        https://www.freecodecamp.org/learn/project-euler/project-euler-problems-1-to-100/problem-1-multiples-of-3-and-5
>>>> Reference Link:
        https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-problem-1-multiples-of-3-and-5/301722
>>>>
>>>>
>>>>
>>>>
*/

function multiplesOf3and5(number) {

    const numOf3 = Math.floor((number - 1) / 3);
    const numOf5 = Math.floor((number - 1) / 5);
    const numOf15 = Math.floor((number - 1) / 15);

    const sumOf3 = 3 * (numOf3 * (numOf3 + 1) / 2);
    const sumOf5 = 5 * (numOf5 * (numOf5 + 1) / 2);
    const sumOf15 = 15 * (numOf15 * (numOf15 + 1) / 2);

    return sumOf3 + sumOf5 - sumOf15;
}

multiplesOf3and5(1000);
