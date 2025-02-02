// Pulando uma iteração: Crie um loop for que imprima números de 0 a 20, mas pule a impressão do número 13.

for(let i = 0; i <= 20; i++){
    if(i === 13){
        continue
    }
    console.log(i)
}