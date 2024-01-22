//When a visitor intially visited the website and finds a list of avialble freelancers
let freelancers = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "teacher", price: 50},
]
console.log(freelancers);

//The visitor finds a message that displays the average starting price of all the freelancers
function Average(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum +=array[i];
  }
  return sum/array.length;
}
let prices = [30,50];
console.log(`The average starting price for the freelancer is $${Average(prices)}`);

//A few seconds later, a new listing appears for freelancer named Carol
let newfreelancers = [
  {name: "Alice", occupation: "Writer", price: 30},
  {name: "Bob", occupation: "teacher", price: 50},
]
newfreelancers.push({name: "Carol", occupation: "programmer", price: 70})
console.log(newfreelancers);

//Finding the average for the new freelance named Carol
function calculateAverage(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum +=array[i];
  }
  return sum/array.length;
}
let newprices = [30, 50, 70];
console.log(`The average starting price is updated to $${calculateAverage(newprices)}`);