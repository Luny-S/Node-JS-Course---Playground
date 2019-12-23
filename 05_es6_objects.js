// Object property shorthand
const name = 'Aleksander';
const userAge = 24;

const user = {
    name, // Sets the same object property as variable name (ES6 syntax)
    age: userAge,
    location: 'Wroclaw'
};
console.log(user);

// Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
};

// const label = product.label; // 'meh' way :)
// const {label: productLabel, stock, rating = 5 } = product;
// propertyName: newVariableName = defaultWhenNonExisting
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => { // Destructurizing in argument list
    // const ( label  ) = myProduct;
    console.log(type, label, stock);
};

transaction('order', product)