let x = [1, 2];


if (typeof x === 'boolean') {
    console.log('X это boolean')
} else if (typeof x === 'string') {
    console.log('X это строка')
} else if (typeof x === 'number' && !isNaN(x)) {
    console.log('X это число')
} else {
    console.log('Тип X не определен')
}
