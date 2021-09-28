let someArray = [1, 1, 1];

let bool = true

while (bool === true) {
    for (let i = 0; i < someArray.length - 1; i++) {
        if (someArray[i] !== someArray[i + 1]) {
            bool = false;
        }
    }
}

if (bool === true) {
  console.log('Все элементы в массиве одинаковые')
} else if (bool === false) {
  console.log('Не все элементы в массиве одинаковые')
}
