const btnJoke = document.getElementById("fetchJoke");
const ulJoke = document.getElementById("jokeList");

//get joke with fetch
const getJokeNorris = () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => {
            saveJokes(data.value);
    });

};
getJokeNorris();

//create botton

btnJoke.addEventListener("click", () => {
  getJokeNorris();
});

//Render the list of jokes in the DOM, lo insertamos en llamada de api

const jokesDOM = (jokes) => {
  
  jokes.forEach((joke,indice) => {
    
    const li = document.createElement("li");
    li.textContent = joke;
  
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', () => {
        li.remove();
        deleteJokes(indice);
    });


    li.appendChild(deleteBtn);

    ulJoke.appendChild(li);
    });
};
  


//function to save jokes in localSTorage
const saveJokes = (joke) =>{

    let jokesAr = [];
    
    let jokesLocal = localStorage.getItem('jokes');

    if(jokesLocal){
        jokesAr = JSON.parse(jokesLocal);
    }
    jokesAr.push(joke);

    jokesDOM(jokesAr);

    localStorage.setItem('jokes',JSON.stringify(jokesAr));

    
}


//fuction delete jokes from local storage


const deleteJokes = (index) =>{
    
    let jokesLocal = JSON.parse(localStorage.getItem('jokes'));

    jokesLocal.splice(index,1)
    
    localStorage.setItem('jokes',JSON.stringify(jokesLocal));

    
}


//create botton erase

/*const btnErase = document.createElement("button");
(btnErase.textContent = "Delete"), 
document.body.appendChild(btnErase);

btnErase.addEventListener('click', ()=>{
    uljokes.appenchild()/---li.remove();
})*/