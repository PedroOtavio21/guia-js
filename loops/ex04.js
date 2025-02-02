// Interrompendo um loop: Crie um loop for que imprima números de 0 a 100, mas interrompa a execução 
// quando chegar ao número 50.

for (let i = 0; i <= 100; i++){
    console.log(i)
    if(i == 50){
        console.log('Número necessário atingido! Interrompendo solução')
        break
    }
    i++
}