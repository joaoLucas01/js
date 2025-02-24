function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('verifique os dados novamente')
    }else {
        fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade <= 11){
                //criança 
                img.setAttribute('src', 'homem-criança.jpg')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade <= 11){
                //criança
                img.setAttribute('src', 'mulher-criança.jpg')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'mulher-jovem.jpg')
            } else if(idade < 60){
                //adulto
                img.setAttribute('src', 'mulher-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `dectamos ${genero} com ${idade} anos`
    }
}

