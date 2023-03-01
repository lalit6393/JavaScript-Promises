// create promise
// how to resolve promises
const promise2 = new Promise((resolve, reject) => {
  // resolve is a function which fulfill the promise
  resolve('Promise 1 resolved.');
});
// how to resolve promises
const promise3 = new Promise((resolve, reject) => {
  // reject is a function which reject the promise
  reject('Promise 3 rejected.');
});

promise2.then(console.log)
.catch(console.log);

promise3.then(console.log)
.catch(console.log);


