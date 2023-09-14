/* ДЗ: ⁃ сделайте счетчик. Будет инпут и две кнопки (+/-).
При клике на + значение инпута увеличивается на 1, а при клике на - наоборот уменьшается.*/
const input = document.querySelector('.input')
const button = document.querySelectorAll('.btn')
let count = 0
button[0].onclick = () => {count++; input.placeholder = count}
button[1].onclick = () => {count--; input.placeholder = count}
/* ⁃ Напишите функцию, которая принимает в качестве параметра массив и математическое  действие. 
Функция должна проходиться по массиву и делать с элементами то, что указано во втором параметре. 
В качестве аргумента второго параметра должна быть функция  */
const arrayMath = (array, mathFunction) => {
    let result = 0
    for(var i = 0; i < array.length; i++){
        result = mathFunction(result, array[i])
    }
    console.log(result);
}
const mathFunction = (a,b) => a + b
arrayMath([1,2,3,4,5], mathFunction);

// up date version
const operationMath = (arr, oper) => {
    const result = oper(arr)
    return result
}
function opers (arr){
    return arr.reduce((a,b,index) => a + b)
    // return arr.reduce((a,b,index) => {
    //     console.log('index: ' + index + ` | ${a} + ${b}`);
    //     return a + b
    // })
}
console.log(operationMath([1,2,3,4,5], opers));