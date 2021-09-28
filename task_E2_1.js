let someVar = prompt('Enter number: ');
someVar++; someVar--


if (isNaN(someVar)) {
    console.log('Упс, кажется, вы ошиблись')
} else if (typeof someVar === 'number') {
    if (!someVar) {
        console.log('Число является нулем')
    } else if (someVar % 2) {
        console.log('Число нечетное')
    } else if (!(someVar % 2)) {
        console.log('Число четное')
    }
}
