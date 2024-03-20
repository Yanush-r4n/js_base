"use strict";

/* 
Реализовать функцию round5, которой передается целое число, функция должна
возвращать ближайшее целое число к тому что было передано, без остатка
делящееся на 5. 
*/
 
console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5

// for (let i = -10; i <= 20; i++) {
//     console.log(`${i} % 5 = ${i % 5}`);
// }

function round5(num) {
    if (Math.abs(num) % 5 === 1 || Math.abs(num) % 5 === 2) {
        return Math.round(num / 10) * 10;
    } else if (Math.abs(num) % 5 === 3 || Math.abs(num) % 5 === 4) {
        if (num > 0) {
            return (Math.round(num / 10) * 10) + 5;
        }
        return (Math.round(num / 10) * 10) - 5;
    }
    return num;
}

/*
-0 в выводе считается ошибкой? Кстати, почему в js вообще есть -0? Он какими-то
другими свойствами обладает, по сравнению с обычным нулем?
*/