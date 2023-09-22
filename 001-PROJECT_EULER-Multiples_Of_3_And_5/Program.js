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

function findSum(number, multiple) {
        const totalNum = Math.floor((number - 1) / multiple);
        return multiple * (totalNum * (totalNum + 1) / 2);
}

function multiplesOf3and5(number) {

        return findSum(number, 3) + findSum(number, 5) - findSum(number, 15);
}

multiplesOf3and5(1000);
