const numArray = new Array();
const fizzBuzz: string = 'fizzbuzz';
const fizz: string = 'fizz';
const buzz: string = 'buzz';

for (let i: number = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    numArray.push(fizzBuzz);
  } else if (i % 3 === 0) {
    numArray.push(fizz);
  } else if (i % 5 === 0) {
    numArray.push(buzz);
  } else {
    numArray.push(i);
  }
}

numArray.map((num: any) => {
  console.log(num);
});
