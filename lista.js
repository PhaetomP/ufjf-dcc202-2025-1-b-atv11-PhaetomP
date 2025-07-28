const lista = ["Um", "Dois", "Três"];

export function getLista(){
    return structuredClone(lista);
}

export function limpaLista(){
    lista.splice(0);
}

export adicionaNaLista(){
    lista.push(item);
}

export removeDaLista(){
    if(pos>=0 && pos < lista.length){
        lista.splice(pos, 1);
    }
}