const letters = [
    'a', 
    ['b', 'c'],
    ['d', 'e', ['f', 'g']],
    {
        vowels: 'a, e, i, o, u'
    }
];

const newLettersForEach = [];
const newLettersForOf = [];
const newLettersForIn = [];
const newLettersFor = [];

letters.forEach(elment => newLettersForEach.push(elment));

//vs
for(let element of letters) {
    newLettersForOf.push(element);
}

for(let index in letters){
    newLettersForIn.push(letters[index]);
}

for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    newLettersFor.push(element);
}

//map
const newLettersMap = letters.map(element => element);

const numbers = [1, 3, 4, 6, 98, 26];
let elementsMultiplication = [];

const multiplication = (array) => {
    elementsMultiplication = array.map(number => number*2);
    console.log(elementsMultiplication);
    return elementsMultiplication;
};

multiplication(numbers);

const students = [
    {
        name: 'Dorelly',
        age: 33,
    },
    {
        name: 'Roxana',
        age: 34
    },
    {
        name: 'Mary',
        age: 20
    },
    {
        name: 'Fiore',
        age: 20
    }
]

const addProperties = (array) => {
    const result = array.map(element => {
        //se copia la referencia en memoria del objeto por lo que el valor también se agrega en el array students
        //element.nationality = 'Peruano';
        //return element
        return {
            ...element,
            nationality: 'Peruano'
        }
    });
    console.log(result);
    return result;
};

addProperties(students);

const productsStock = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    },
];

const addPropertiesProduct = (array) => {
    const output = array.map(product => {
        const taxes = product.price*0.19;
        return {
            ...product,
            taxes
        }
    });
    console.log(output);
    return output;
};

addPropertiesProduct(productsStock);

//Filter
const words = ['spray', 'limit', 'elite', 'exuberant'];
const newArrayWords = [];

for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length > 5) {
        newArrayWords.push(element);
    }
}

const wordsLength = words.filter(element => element.length > 5);

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: false
    },
    {
        customerName: 'Fabiola',
        total: 160,
        delivered: true
    },
    {
        customerName: 'Natacha',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Nataniel',
        total: 60,
        delivered: true
    }
];

const ordersDelivered = orders.filter(element => element.delivered && element.total > 120);

const input = 'Nata';

const search = (query) => {
    const resultSearch = orders.filter(element => element.customerName.includes(query));
    console.log(resultSearch);
    return resultSearch;
};

search(input);

const newWords = ['amor', 'sol', 'piedra', 'día'];

const wordsLengthGreater4 = (array) => {
    const filterWords = array.filter(element => element.length >= 4);
    console.log(filterWords);
    return filterWords;
};

wordsLengthGreater4(newWords);
