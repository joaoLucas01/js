var msg = document.querySelector('div#msg')
var img = document.querySelector('img')
var p = document.querySelector('p#p')
var body = document.querySelector('body')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`

if (hora > 6 && hora < 12) {
    p.innerHTML = 'Bom Dia!'
    img.src = 'imagens/pexels-artur-roman-158558-1167355.jpg'
    body.style.background = 'rgb(54, 164, 78)'
} else if (hora >= 12 && hora < 18 ) {
    p.innerHTML = 'Bom Tarde!'
    img.src = 'imagens/pexels-george-desipris-858241.jpg'
    body.style.background = 'rgb(210, 105, 30)'
} else { 
    p.innerHTML= 'Boa Noite!'
    img.src = 'imagens/pexels-pixabay-414144.jpg'
    body.style.background = 'rgb(82, 74, 68)'
}