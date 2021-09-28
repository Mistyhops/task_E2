let myMap = new Map([
    ['qwerty', 'zaqwsx'],
    [1234, 4321],
    [true, 'bool'],
])

myMap.set('undefined', null)


for (let key of myMap) {
    console.log(`Ключ - ${key[0]}, значение - ${key[1]}`)
}
