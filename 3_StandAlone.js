//stand alone way of using promises
//it will get resolved as soon as script loaded
//and it can be used once.

var price = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(100);
    }, 1000);
});

price.then(console.log);