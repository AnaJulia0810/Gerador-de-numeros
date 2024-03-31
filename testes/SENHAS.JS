// CONJUNTO DE CARACTERES ALFANÚMERICOS, MAIÚSCULOS E MINÚSCULOS, NÚMEROS E CARACTERES ESPECIAIS.
const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

// FUNÇÃO PARA GERAR UM NÚMERO ALEÁTORIO ENTRE UM INTERVALO.
function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

// FUNÇÃO PARA GERAR UM CARACTERE ALEÁTORIO FR UM CONJUNTO DE CARACTERES.
function gerarCaracteresAleatorio(caracteres){
    return caracteres[gerarNumeroAleatorio(0, caracteres.length - 1)]
}

// FUNÇÃO PARA GERAR UMA SENHA ALEÁTORIA.
function gerarSenha(tamanho){
    let senha = '';
    for(let i = 0; i < tamanho; i++){
        senha += gerarCaracteresAleatorio(caracteres)
    }
    return senha
}

// GERANDO SENHA DE 16 CARACTERES.
const senha = gerarSenha(16)

// EXIBINDO A SENHA.
console.log(senha)