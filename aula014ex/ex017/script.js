function calcular(){
    var num = document.getElementById('inum')
    var sel = document.getElementById('isel')

    if (num.value.length == 0){
        alert('faltam dados')
    } else{
        let n = Number(num.value)
        let m = 1
        sel.innerHTML = ''
        while(m <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${m} = ${n*m}`
            sel.appendChild(item)
            m++
        }
    }
}