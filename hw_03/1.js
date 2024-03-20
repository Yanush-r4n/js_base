"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

console.log(exponentiationToThirdDegree(4));
console.log(exponentiationToThirdDegree(-4));
console.log(exponentiationToThirdDegree(0));

function exponentiationToThirdDegree(number) {
    return number ** 3;
}