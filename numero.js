const MIN_VALUE = 1;
const MAX_VALUE = 100;
// CONTAR QUANTOS ELEMENTOS(NÚMEROS) SERÃO EXIBIDOS NO HISTÓRICO.
const RECENT_NUMBER_COUNT = 5;

// OBTER OS ELEMENTOS
// QUAIS OS LEMENTOS EU PRECISO DO HTML?

const sliderMin = document.getElementById('sliderMin');
const sliderMax = document.getElementById('sliderMax');
const botaoSortear = document.getElementById('botaoSortear');
const numeroSorteado = document.getElementById('numeroSorteado');
const listaNumeros = document.getElementById('listaNumeros');
const btnLimpaHistorico = document.getElementById('botaoLimparHistorico');


// ATUALIZA A INTERFACE COM O VALOR SLIDER.
function atualizarValorSlider(){
    const min = parseInt(sliderMin.value);
    const max = parseInt(sliderMax.value);

// EXIBIR O VALOR DO SLIDER NA INTERFACE.
    document.getElementById('valorMin').textContent = min;
    document.getElementById('valorMax').textContent = max;
}

// EVENTOS PARA ATUALIZAR O VALOR SLIDER AO SER ALTERADO.
sliderMin.addEventListener('input', atualizarValorSlider)
sliderMax.addEventListener('input', atualizarValorSlider)

// FUNÇÃO PARA GERAR UM NÚMERO ALEÁTORIO
function gerarNumeroAleatorio(min,max){
    if(min > max){
        return('O valor mínimo deve ser menor ou igual ao valor máximo')
    }

    /* 
    let numeroAleatorio = Math.random()* (max - min + 1)); 
    numeroAleatorio = Math.floor(numeroAleatorio);
    numeroAleatorio += min;
    */

    // FORMA CONTRAÍDA

    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1));
    numeroAleatorio += min

    return numeroAleatorio;
}

// ATUALIZAR A INTERFACE COM O NÚMERO SORTEADO.
function atualizarInterface(numeroSorteado){
    const numSorteado = document.getElementById('numeroSorteado');
    numSorteado.textContent = numeroSorteado;
}

function adicionarAoHistorico(numeroSorteado){

    // CRIAR UM ELEMENTO "li".
    const li = document.createElement('li')

    // ATRIBUIR O NÚMERO SORTEADO COMO CONTEÚDO DO "li".
    li.textContent = numeroSorteado;

    //  ADICIONAR UM EVENTO DE CLICK AO "li".
    li.addEventListener('click', function(){

        // COPIAR O NÚMERO SORTEADO PARA A ÁREA DE TRANSFÊNCIA.
        navigator.clipboard.writeText(numeroSorteado);

        // EXIBIR UM ALERTA INFORMADANDO QUE O NÚMERO FOI COPIADO
        alert('Número copiado para a área de transferência!')
    });

    // ADICIONAR O "li" NO INÍCIO DA LISTA DE NÚMEROS ("listaNumeros")
    listaNumeros.prepend(li)
    // SE O NÚMERO DE ELEMENTOS NA LISTA FOR MAIOR QUE O LIMITE, REMOVER O ÚLTIMO ELEMENTO.
    if(listaNumeros.children.length > RECENT_NUMBER_COUNT){
        listaNumeros.removeChild(listaNumeros.lastChild);
    }
}

// FUNÇÃO PARA LIMPAR O HISTÓRICO DE SORTEIOS.
function limparHistorico(){
    if(confirm("Realmente deseja limpar o histórico de sorteio?")){
        listaNumeros.innerHTML = '';
        numeroSorteado.innerHTML = '0'
    }
}

// EVENTOS
botaoSortear.addEventListener('click', () => {
    const min = parseInt(sliderMin.value)
    const max = parseInt(sliderMax.value)

    const numeroSorteado = gerarNumeroAleatorio(min,max);
    atualizarInterface(numeroSorteado);
    adicionarAoHistorico(numeroSorteado);

})

btnLimpaHistorico.addEventListener('click', limparHistorico)

