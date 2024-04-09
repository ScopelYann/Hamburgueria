const menuOptions = [
    {
        name: 'X-Salada',
        price: 30,
        desc: 'Um clássico hambúrguer com alface, tomate e molho especial.',
        ingre: 'Hambúrguer, alface, tomate, queijo, maionese, ketchup, mostarda, pão de hambúrguer.',
        vegan: false,
        src: './assets/xsalada.jpeg'
    },
    {
        name: 'X-Bacon',
        price: 34,
        desc: 'Um hambúrguer com bacon crocante, queijo e molho especial.',
        ingre: 'Hambúrguer, bacon, queijo, alface, tomate, maionese, pão de hambúrguer.',
        vegan: false,
        src: './assets/xbacon.png'
    },
    {
        name: 'X-Bacon Egg',
        price: 39,
        desc: 'Um hambúrguer com bacon, ovo frito, queijo e molho especial.',
        ingre: 'Hambúrguer, bacon, ovo frito, queijo, alface, tomate, maionese, pão de hambúrguer.',
        vegan: false,
        src: './assets/bacon-egg (1).png'
    },
    {
        name: 'Monstruoso',
        price: 50,
        desc: 'Um hambúrguer gigante com carne suculenta, queijo, bacon, vegetais e molho especial.',
        ingre: 'Hambúrguer, queijo cheddar derretido, bacon, cebola caramelizada, alface, tomate, molho especial, pão de hambúrguer.',
        vegan: false,
        src: './assets/monstruoso.png'
    },
    {
        name: 'Big-Vegano',
        price: 55,
        desc: 'Um hambúrguer vegano com hambúrguer vegano, vegetais e molho especial.',
        ingre: 'Hambúrguer vegano, alface, tomate, cebola, picles, ketchup vegano, maionese vegana, mostarda vegana, pão vegano.',
        vegan: true,
        src: './assets/xvegan.png'
    },
    {
        name: 'X-Vegan',
        price: 45,
        desc: 'Um hambúrguer vegano com hambúrguer vegano, alface, tomate e molho especial.',
        ingre: 'Hambúrguer vegano, alface, tomate, maionese vegana, pão vegano.',
        vegan: true,
        src: './assets/monstruoso-vegan.png'
    },
    {
        name: 'X-Beterraba',
        price: 60,
        desc: 'Um hambúrguer com um toque de beterraba para um sabor único.',
        ingre: 'Hambúrguer, beterraba, alface, tomate, queijo, maionese, ketchup, mostarda, pão de hambúrguer.',
        vegan: true,
        src: './assets/XBeterraba.jpg'
    },
    {
        name: 'X-Vegano Duplo',
        price: 50,
        desc: 'Um hambúrguer vegano com dupla porção de hambúrguer vegano, acompanhado de vegetais frescos.',
        ingre: 'Dupla porção de hambúrguer vegano, alface, tomate, cebola, picles, ketchup vegano, maionese vegana, mostarda vegana, pão vegano.',
        vegan: true,
        src: './assets/XVeganoDuplo.jpg'
    },
]

function RenderDescribe(index) {
    let DescribeContent = document.querySelector('.showDescribe')
    DescribeContent.style.display = 'flex'

    let item = menuOptions[index]

    DescribeContent.innerHTML = `
    <span class="material-symbols-outlined c" onclick="fechar()">close</span>
        <img class="img-describe" src="${item.src}">
        <h1 class="productNome">${item.name}</h1>
        <p class="describe">Descrição: <br>${item.desc}</p>
        <p class="ingredientes">Ingredientes: <br>${item.ingre}</p>
        <p class="vegano"><br>${item.vegan}</p>
    `

}
function fechar(){
    let DescribeContent = document.querySelector(".showDescribe")
    DescribeContent.style.display='none'

}
