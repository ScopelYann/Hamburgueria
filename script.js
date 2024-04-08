/* FAZ MUDAR O TEMA ENTRE TODO PRETO E BACKGROUND*/
const selectTexture = document.querySelector('.material-symbols-outlined')
const head = document.querySelector('.box-header')
const main = document.querySelector('.box-main')
let ligado = false // Variável de controle para acompanhar o estado

function mudar() {
    // Alternar o estado quando a função é chamada
    ligado = !ligado

    // Verificar o estado atual e fazer as mudanças correspondentes
    if (ligado) {
        selectTexture.textContent = 'toggle_on'
        head.style.backgroundColor = 'rgba(31, 28, 28, 0.473)'
        main.style.border = '4px solid black'
    } else {
        selectTexture.textContent = 'toggle_off'
        head.style.backgroundColor = 'black'
        main.style.border = '4px solid #3f3f3f'
    }
}
function Show() {
    ocultarSoma()
    let list = document.querySelector('ul')
    list.style.display = 'grid'
    list.innerHTML = ''
    let mostrar = menuOptions.forEach((item,index) => {
        list.innerHTML += `
        <li>
            <img loading="lazy" src="${item.src}" style="width: 130px;">
            <p class="productName text-left">${item.name}</p>
            <p class="ProductValue text-left">${item.price.toFixed(2)}</p>
        </li>
        `
        let name = document.querySelectorAll('.productName')[index]
        if (name.textContent.length > 13 && name.textContent.length < 20) {
            name.style.fontSize = '20px'
            name.style.height = '40px'
        }
        return list
    })
    return list

}

function Desconto() {
    let list = Show()
    menuOptions.map((item, index) => {
        list.querySelectorAll('.ProductValue')[index].textContent = Math.abs((((item.price / 100) * 10) - item.price)).toFixed(2)
    })
}

function Soma() {
    let list = document.querySelector('ul')
    let sum = document.querySelector(`.total`)
    list.style.display = 'none'
    sum.style.visibility = 'visible'
    sum.innerHTML = `A Soma total dos produtos é de R$${menuOptions.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price
    }, 0).toFixed(2)}`
}
function ocultarSoma() {
    let sum = document.querySelector('.total');
    return sum.style.visibility = 'hidden';
}

function filtrar(){
    ocultarSoma()
    let list = document.querySelector('ul')
    list.style.display = 'grid'
    list.innerHTML = ''
    const result = menuOptions.filter((item) => item.vegan == true)
    .forEach((element, index) => {
        list.innerHTML += `
        <li>
            <img loading="lazy" src="${element.src}" style="width: 130px;">
            <p class="productName text-left">${element.name}</p>
            <p class="ProductValue text-left">${element.price.toFixed(2)}</p>
        </li>
        `
        let name = document.querySelectorAll('.productName')[index]
        if (name.textContent.length > 13 && name.textContent.length < 20) {
            name.style.fontSize = '20px'
            name.style.height = '40px'
        }
        console.log(element)
    });
    
    return result
}