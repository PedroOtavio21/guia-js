// 6. Percorrendo um Array com Loop For:
// Utilize um loop for para percorrer o array frutas criado e imprimir cada fruta individualmente.

// Array de exercício anterior:
const frutas = ['Banana', 'Maçâ', 'Melão', 'Uva', 'Acerola', 'Caju']

console.log('Versão simples de leitura (for tradicional):\n')
for(let i = 0; i < frutas.length; i++){
    console.log(`Posição ${i}: ${frutas[i]}`)
}

console.log('\n\nVersão mais usual (for of):')
for(let fruta of frutas){
    console.log(fruta)
}
