
// For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

// Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

function judgeVegetable(list, characteristic) {

  let currentChar = 0;
  let submitter;

  for (let i = 0; i < list.length; i++) {
    // console.log(list[i][characteristic])
    if (list[i][characteristic] > currentChar) { // iterates through list of objects looking for the highest characteristic value and then sets the submitter accordingly
      currentChar = list[i][characteristic];
      submitter = list[i].submitter;
    }  
  } return submitter;
}

let vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
let metric = 'redness';

vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
metric = 'd';

console.log(judgeVegetable(vegetables, metric));