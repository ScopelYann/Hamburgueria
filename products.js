const menuOptions = [
    { name: 'X-Salada', price: 30, vegan: false, src: './assets/xsalada.jpeg' },
    { name: 'X-Bacon', price: 34, vegan: false, src: './assets/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: './assets/bacon-egg (1).png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: './assets/monstruoso.png' },
    { name: 'Big-Vegano', price: 55, vegan: true, src: './assets/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: './assets/monstruoso-vegan.png' },
    { name: 'X-Beterraba', price: 60, vegan: true, src: './assets/monstruoso-vegan.png' },
    { name: 'X-Vegano Duplo', price: 50, vegan: true, src: './assets/monstruoso-vegan.png' },
]

//Caso Queira Adicionar mais Variedades ADD +1 Array e coloque o nome, price, vegano ou n, e a imagem no objeto dentro do array
//Depois adicione outro clone na função Show()