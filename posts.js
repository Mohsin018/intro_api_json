const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
    .then(res =>res.json())
    .then((json) => {
        // console.log(json)
        displayPost(json);
    
    });
};




                            // array of object 

const displayPost = (posts) => {

    // 1. get the container

    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";



// loop:- 1

// for(i=0; i< posts.length; i++){
//     console.log(posts[i])
// }



    posts.forEach((post) =>{

        console.log(post.title);
        // console.log(post.id);
        // console.log(post.body);

        // 2. create html element
        const postCard = document.createElement("div")
        postCard.innerHTML = `<div class="post-card">
            <h2>${post.title}</h2>
            <p>
                ${post.body}
            </p>

        </div>
        
        `


        // 3. add li into container
        postContainer.appendChild(postCard);


    })


// loop:- 2
    // for(let post of posts){
    //     console.log(post);
    // }
    
}

loadPost();