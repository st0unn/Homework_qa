console.log('number' + 3 + 3) //результат "number33" - додавання символів (конкатенація) 

console.log (null + 3) //результат 3 - порожнє значення додаємо до числа 3 

console.log (5 && "qwerty") // результат "qwerty" - здійснюємо операцію "and", де виводиться останнє істине значення 

console.log (+'40' + +'2' + "hillel") //результат "42hillel" - число рядки '40' і '2' перетворюємо в тип number і додадаємо, потім здійснюється конкатинація числа 42 та рядка "hillel" 

console.log ('10' - 5 === 6) //результат false - 10-5=5, 5 не дорівнює 6

console.log (true + false) //результат 1 - додаємо 1 і 0

console.log ('4px' - 3) //результат NaN - не число

console.log ('4' - 3) //результат 1 - 4-3=1 числовий тип

console.log ('6' + 3 ** 0) // результат "61", здійснюється конкатинація "6" та "З в степені 0 = 1"

console.log (12 / '6')// результат 2 - 12/6 (тип даних "6" змінюється на числовий)

console.log ('10' + (5 === 6)) // результат "10false" - конкатинація "10" та "false"

console.log (null == '') // результат "false" - null не дорівнює значенням інших типів. Cпеціальне правило мови.

console.log (3 ** (9 / 3)) // результат 27 - 3 в степені 3 = 27 

console.log (!!'false' == !!'true') // результат true - строкові значення 'false' та 'true' при приведенні в булевий тип отримують значення true, 
// 2 інверсії для true дають значення true, при порівнянні двох значень true - отримуємо значення true 

console.log (0 || '0' && 1) //результат 1 - '0' при здійсненні операції логічне "i" між true та 1 отримуємо 1
// та при логічному АБО між 0 та 1 отримуємо 1

console.log ((+null == false) < 1) //результат false - +null стає 0, 0 == false дає true, результат порівняння false<1 дає false

console.log (false && true || true) //результат true, логічне "i" між false та true дає false, а логічне або між false та true дає true

console.log (false && (false || true)) //результат false, логічне "або" між false та true дає true, логічне "і" false та true дає false

console.log((+null == false) < 1 ** 5) //результат false, +null стає 0, 0 == false дає true, 1 в степені 5 дає 1, true не менше ніж 1, тому відповідь false

console.log(''== 0)