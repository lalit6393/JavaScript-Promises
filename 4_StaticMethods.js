// Promise.all(array) method
// here array can have promises, function calls or any value
// it return an array of values
// it one promise will get rejected this method will reject all promises
// it is required when we need to resolve more than one promises but we don't know the order in which they will get resolved
// and we want all respose together

var fastPrice = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(99);
    }, 100);
});

var slowPrice = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve(100);
    }, 500);
});

const sum = () => {
    return 2+3;
}

var promises = [fastPrice, slowPrice, sum(), 100];

Promise.all(promises)
.then(console.log)
.catch(console.log);



//Promise.race(array)
// same as above except it return the promise which get resolve first

var promiseToRace = [slowPrice, fastPrice]

Promise.race(promiseToRace)
.then(console.log)
.catch(console.log);
