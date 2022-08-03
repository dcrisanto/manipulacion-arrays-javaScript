const container = document.querySelector('#container');
const button = document.querySelector('#btn');
//const containerListProducts = document.querySelector('.list-products');

const products = [
    {
        name: 'pizza',
        img: './src/assets/imgs/pizza.jpg',
        size: ['small', 'medium', 'family'],
        price: {
            small: 34,
            medium: 70,
            family: 95
        }
    },
    {
        name: 'burger',
        img: '/client/src/assets/imgs/hamburguesa.jpg',
        size: ['small', 'medium', 'family'],
        price: {
            small: 34,
            medium: 70,
            family: 95
        }
    }
];

const showProducts = (event) => {
    const listProducts = event.target.myParam;
    if(listProducts.length != 0) {
        listProducts.forEach(element => {
            const product = document.createElement('div');
            product.classList.add('product');
            container.appendChild(product);
            const nameProduct = document.createElement('p');
            nameProduct.innerText = element.name;
            product.appendChild(nameProduct);
            const imgProduct = document.createElement('img');
            imgProduct.setAttribute('src', element.img);
            product.appendChild(imgProduct);
            const containerSizesProduct = document.createElement('ul');
            containerSizesProduct.classList.add('position');
            product.appendChild(containerSizesProduct);
            const sizesProduct = element.size;
            sizesProduct.forEach(size => {
                const sizeProduct = document.createElement('li');
                sizeProduct.innerText = size;
                containerSizesProduct.appendChild(sizeProduct);
            });
            const containerPricesProduct = document.createElement('ul');
            containerPricesProduct.classList.add('position-price');
            product.appendChild(containerPricesProduct);
            const pricesProduct = element.price;
            for(const price in pricesProduct) {
                const priceProduct = document.createElement('li');
                priceProduct.innerText = pricesProduct[price];
                containerPricesProduct.appendChild(priceProduct);
            }
        });
    }
};

button.addEventListener('click', showProducts);
//pasando argumento a la función que dispara el addEventListener
button.myParam = products;




   
