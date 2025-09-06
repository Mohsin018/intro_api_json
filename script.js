const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1') //it gives a promise of response
      .then(response => response.json()) //to catch the response we used response(it will give a json data), we can use anything else now convert the response in json 
      .then((data) => console.log(data)) //now console the retrieved data
};

const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
    .then(res =>res.json())
    .then((json) => {
        console.log(json)
        displayPost(json);
    
    });
};


const displayPost = (posts) => {
    posts.forEach((post) =>{

        console.log(post);


    })
    
}








// console.log('Explore API');
// const person = {
//     name: 'salim',
//     fruit: 'Dalim',
//     dish: 'Halim',
//     friends: ['alim', 'kolim', 'jamim'],
//     isRich: false,
//     money: 320,

// };


// console.log(person, typeof person);
// //JSON -> JS Object with Notation
// //to convert the upper object into json we will use the method call json stringify

// //JSON.stringify:- convert object to stringify
// //JSON.parse:- converts json to object
// const personJSON = JSON.stringify(person);
// console.log(personJSON);

// console.log(personJSON, typeof personJSON);


// //convert stringify json to object 
// const parseJSON = JSON.parse(personJSON);
// console.log(parseJSON);