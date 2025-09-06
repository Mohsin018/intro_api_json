console.log('Explore API');
const person = {
    name: 'salim',
    fruit: 'Dalim',
    dish: 'Halim',
    friends: ['alim', 'kolim', 'jamim'],
    isRich: false,
    money: 320,

};


console.log(person, typeof person);
//JSON -> JS Object with Notation
//to convert the upper object into json we will use the method call json stringify

//JSON.stringify:- convert object to stringify
//JSON.parse:- converts json to object
const personJSON = JSON.stringify(person);
console.log(personJSON);

console.log(personJSON, typeof personJSON);


//convert stringify json to object 
const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);