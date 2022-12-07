function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('gerar')

    if(num.value == 0){
        window.alert('Por favor informe um numero')
    }else{
        let n = Number(num.value)
        let i = 1
        tab.innerHTML = ''
        while(i <= 10){
            let item = document.createElement('option') 
            item.text = `${n} x ${i} = ${num*i}`
            tab.appendChild(item)
            i++
        }
    }
}