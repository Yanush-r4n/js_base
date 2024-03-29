"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const num = prompt("Введите число для вычета 13%");

if (typeof +num !== "number" || Number.isNaN(+num) || isBoolean(num)) {
    console.log("Значение задано неверно.");
} else {
    console.log(`
        Размер заработной платы за вычетом налогов равен ${thirdPower(num)}.
    `);
}

function thirdPower(num) {
    return Math.round(num * 0.87 * 100) / 100;
}

function isBoolean(str) {
    return str === "true" || str === "false";
}