import {getLista, limpaLista} from "./lista.js"

const olItens = document.querySelector("#itens")
const qEntradas = document.querySelector("#entrada")
const bAdicionar = document.querySelector("#adicionar")
const bLimpar = document.querySelector("#limpar")

atualizalista();

function atualizalista(){
    olItens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++){
        const li = document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}

bLimpar.addEventListener('click', limparItensDeLista);

function limparItensDeLista(){
    limpaLista();
    atualizalista();
}