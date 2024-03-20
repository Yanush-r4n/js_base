"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

findMaxNum(0, 0, 0);
findMaxNum(1, 2, 3);
findMaxNum(-8, -5, -3);
findMaxNum(10, 200, -5.3);
findMaxNum(3.7, 2, 3.7);

function findMaxNum(firstNum, secondNum, thirdNum) {
    let max = firstNum;
    if (secondNum > max) {
        max = secondNum;
    }
    if (thirdNum > max) {
        max = thirdNum
    }
    return console.log(`
        Максимальное значение среди чисел ${firstNum}, ${secondNum}, ${thirdNum}
        равно ${max}.
    `);
}