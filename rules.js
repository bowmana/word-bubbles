import {CollectionofWords} from './wordBag.js';
import {dictionary} from './dictionary.js';
import {shuffle} from './shuffle.js';



let curr = 1;
let score = 0;
const c = new CollectionofWords();

const scores = {
    'a': 1,
    'b': 3,
    'c': 3,
    'd': 2,
    'e': 1,
    'f': 4,
    'g': 2,
    'h': 4,
    'i': 1,
    'j': 8,
    'k': 5,
    'l': 1,
    'm': 3,
    'n': 1,
    'o': 1,
    'p': 3,
    'q': 10,
    'r': 1,
    's': 1,
    't': 1,
    'u': 1,
    'v': 4,
    'w': 4,
    'x': 8,
    'y': 4,
    'z': 10
};



function getScore(word){
    

    for (let letter of word) {
        score += scores[letter];
    }

    return score;

}


function userInput(word){
    if(dictionary.includes(word)){     
    word = word.split("");
    let word2 = c.getWord();
    console.log(word2);
    word2 = word2.split("");
    if(word.length === word2.length){
        return word2.every(element => {
            if(word.includes(element)){
                return true;
            }
            return false;
        })
    }}
    return false;
}


function nextPhase(){
    
    if(curr < 7){
    c.generateWordfromBag(curr+1);
    curr++;
    }
    
}

//generate a random word from the bag
document.getElementById("nextWord").addEventListener("click", function(){
    document.getElementById("word").value = "";
    document.getElementById("container").textContent = "";
    c.generateWordfromBag(curr);

    c.render();
    curr = c.getWord().length
    console.log(curr +" : " + "current");
    document.getElementById("generatedWord").value = c.getWord();

})

//nextPhase on event listener
document.getElementById("nextPhase").addEventListener("click", function(){
    document.getElementById("word").value = "";
    nextPhase();
    document.getElementById("container").textContent = "";
    c.render();
    document.getElementById("generatedWord").value = c.getWord();
   
}
)


//event listener for submit button
document.addEventListener("mouseover", function(){
    console.log(curr)
    let word = document.getElementById("word").value;
     if(word.length === curr){
    if(userInput(word)){
        c.generateWordfromBag(curr);
       
        wait(300).then(() => {

        document.getElementById("container").textContent = "";
        c.render();
        curr = c.getWord().length
        document.getElementById("generatedWord").value = c.getWord();
        document.getElementById("score").value = getScore(word);
        document.getElementById("word").value = "";
        document.getElementById("alertBox").value = "Correct!";
        });
    }
    else{
        
        //alert("Wrong Word");
        //make alert box appear
        document.getElementById("alertBox").value = "Wrong Word";

    

        wait(100).then(() => {
        document.getElementById("word").value = "";
        document.getElementById("container").textContent = "";
        c.render();
        });
        
    }
}
})




document.getElementById("container").addEventListener("mouseover", function(e){
    if(e.target.classList.contains("letterBubble")){
        if(!e.target.classList.contains("hovered")){
            
            document.getElementById("word").value += e.target.textContent;
            e.target.classList.add("hovered");
        }

    }
})


function wait(n){
    return new Promise(resolve => {
        setTimeout(resolve, n);
    });
}


//if mouse not held down 



//event listener for mouseout of letterBubble get th
// document.getElementById("container").addEventListener("mouseout", function(e){
//     if(e.target.classList.contains("letterBubble")){
//         document.getElementById("word").value = "";
//     }
// })



// let drag = false;

// document.addEventListener('mousedown', () => drag = false);
// document.addEventListener('mousemove', () => drag = true);
// document.addEventListener('mouseup', () => console.log(drag ? 'drag' : 'click'));


//on domload generate a random word
document.addEventListener("DOMContentLoaded", function(){
    c.generateWordfromBag(curr);
    c.render();
    curr = c.getWord().length
    document.getElementById("generatedWord").value = c.getWord();
})


document.addEventListener("mouseover", function(){
   
    if(document.getElementById("word").value.length > document.getElementById("generatedWord").value.length){
       
        document.getElementById("word").value = "";
    }})



export {c};