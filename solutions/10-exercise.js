/*
For this exercise you can look up to https://www.learnrxjs.io/

Exercise:
- make an array with 20 integers 
- create an Observable from the array                   -1-2-3-4-5-6-7-8-...-20
- filter all even numbers                               -2-4-6-8-10-12-14-...20
- filter again and take 5 event                         -2-4-6-8-10
- transform with map multiplying by 10                  -20-40-60-80-100
- subscribe to it
*/

const { from } = require("rxjs");
const { filter, take, map } = require("rxjs/operators")

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

from(array)
    .pipe(
        filter(e => e % 2 === 0),
        take(5),
        map(e => e * 10)
    )
    .subscribe({
        next: a => {
            console.log(a);
        }
    })

