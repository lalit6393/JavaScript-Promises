// how to create & resolve promises
const promise = new Promise((resolve, reject) => {
  // resolve is a function which fulfill the promise
  resolve('Promise 1 resolved.');
});

promise.then(console.log)
.catch(console.log);


// how to create & reject promises
const promise1 = new Promise((resolve, reject) => {
  // reject is a function which reject the promise
  reject('Promise 3 rejected.');
});

promise1.then(console.log)
.catch(console.log);


