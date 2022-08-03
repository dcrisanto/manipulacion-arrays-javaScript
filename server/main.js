const letters = [
    'a', 
    ['b', 'c'],
    ['d', 'e', ['f', 'g']],
    {
        vowels: 'a, e, i, o, u'
    }
];

console.log('forEach');
letters.forEach(elment => console.log(elment));

//vs
console.log('for of');
for(let element of letters) {
    console.log(element);
}

console.log('for in');
for(let index in letters){
    console.log(letters[index]);
}

console.log('for')
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log(element);
}