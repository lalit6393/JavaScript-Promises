const addextra = (price) => {
     return new Promise((resolve, reject) => {
        if(price > 3) reject('Price is not good.');

        setTimeout(() => {
            resolve(price + 1);
        }, 1000);
     });
}

// calling the function

addextra(1)
.then(console.log)
.catch(console.log);

//can call same function more than once passing the return value

addextra(1)
.then(addextra) //ans = 2  // this is same as .then((newPrice) => {addPromise(newPrice + 1)})
.then(addextra) //ans = 3
.then(addextra) //ans = 4 is inserted it will return error as it is greater than 3.
.then(console.log)
.catch(console.log);