function verificar(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('faltam dados')
        res.innerHTML = 'impossível contar'
    } else {
        res.innerHTML = 'contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    if (i > f){
        // contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }else{
        // contagem decrescente
        for(let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
    }    
}