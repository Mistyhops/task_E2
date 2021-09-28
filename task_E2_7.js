let someArray = [1, true, -5, 4, undefined, 0, 7, NaN, -0];

let evenCount = 0;
let oddCount = 0;
let nullCount = 0;
let notNumberCount = 0;


someArray.forEach(function (item, index, array) {
    if (typeof item === 'number' && !isNaN(item)) {
        if (item === 0) {
            nullCount++
        } else if (item % 2 === 1 || item % 2 === -1) {
            oddCount++
        } else if (item % 2 === 0 || item % 2 === -0) {
            evenCount++
        }
    } else {
            notNumberCount++
    }
});

console.log(`Количество четных чисел: ${evenCount}\nКоличество нечетных чисел: ${oddCount}
Количество нулей: ${nullCount}\nКоличество других объектов: ${notNumberCount}`)

