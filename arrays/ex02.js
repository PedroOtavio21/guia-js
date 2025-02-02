// 2. Removendo o Primeiro Elemento do Array:
// A partir do array animais criado anteriormente, remova o primeiro elemento usando shift e imprima o array modificado.

// Array criado em exercício anterior
let animais = ['cachorro', 'gato', 'cavalo']

const animalRetirado = animais.shift()

console.log(`Animal retirado do array: ${animalRetirado}`)
console.log(`Array alterado: [ ${animais.join(' ')} ]`)