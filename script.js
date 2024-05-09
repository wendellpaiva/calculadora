function calculando() {
    
    let n1 = Number(prompt("Digite a nota do primeiro bimestre:"));
    let n2 =  Number(prompt("Digite a nota do segundo bimestre:"));
    let n3 = Number(prompt("Digite a nota do terceiro bimestre:"));
    let n4 = Number(prompt("Digite a nota do quarto bimestre:"));
    let media = (n1+n2+n3+n4)/4;
    let resultado = document.querySelector("section#resultado");
    resultado.innerHTML = `<p>Sua média é: ${media}</p>`;
    if (media>=7) {
        resultado.innerHTML +=`<p>Você foi APROVADO !</p>`;
    } else {
        resultado.innerHTML +=`<p>Você foi REPROVADO !</p>`;
    }
}