"use strict"
import { dictionary} from "./dictionary.js"
import {shuffle} from "./shuffle.js"


const tempDictionary = [
    "nat",
    "tan",
    "ant"
]

class CollectionofWords{
    constructor(){
        this.bag2 = dictionary.filter(word => word.length === 2);
        this.bag3 = dictionary.filter(word => word.length === 3);
        this.bag4 = dictionary.filter(word => word.length === 4);
        this.bag5 = dictionary.filter(word => word.length === 5);
        this.bag6 = dictionary.filter(word => word.length === 6);
        this.bag7 = dictionary.filter(word => word.length === 7);
        this.bag8 = dictionary.filter(word => word.length === 8);
        this.temp = tempDictionary;

        this.generatedWord = '';
    }
    





getRandWordfromBag(element) { 

const shuffled = shuffle(element);
const firstElement = shuffled.shift();
    return firstElement;
}
//------------------------------------------------
 randomizeWord(word){
    let splitWord = word.split("");
    let shuffledWord = shuffle(splitWord);
    shuffledWord = shuffledWord.join("");
    return shuffledWord;
}
generateWordfromBag(n){
   

    switch(n){
        case 1: //if there are no words in the bag go to the next state
            if(this.temp.length === 0){
                this.generateWordfromBag(2);
            }
            else{
        this.generatedWord = this.randomizeWord(this.getRandWordfromBag(this.temp))
            return this.generatedWord;
            }
        case 2:
            if(this.bag2.length === 0){
                this.generateWordfromBag(3);
            }
            else{
        this.generatedWord = this.randomizeWord(this.getRandWordfromBag(this.bag2))
            return this.generatedWord;
            
    }
        case 3:
            if(this.bag3.length === 0){
                this.generateWordfromBag(4);
            }
            else{
        this.generatedWord = this.randomizeWord(this.getRandWordfromBag(this.bag3))
            return this.generatedWord;
            }
        case 4:
            if(this.bag4.length === 0){
                this.generateWordfromBag(5);
            }
            else{
        this.generatedWord = this.randomizeWord(this.getRandWordfromBag(this.bag4))
            return this.generatedWord;
            }
        case 5:
            if(this.bag5.length === 0){
                this.generateWordfromBag(6);
            }
            else{
        this.generatedWord = this.randomizeWord(this.getRandWordfromBag(this.bag5))
            return this.generatedWord;
            }
        case 6:
            if(this.bag6.length === 0){
                this.generateWordfromBag(7);
            }
            else{
        this.generatedWord = this.randomizeWord(this.getRandWordfromBag(this.bag6))
            return this.generatedWord;
            }
        case 7:
            if(this.bag7.length === 0){
                this.generateWordfromBag(8);
            }
            else{
        this.generatedWord = this.randomizeWord(this.getRandWordfromBag(this.bag7))
            return this.generatedWord;
            }
        case 8:
            if(this.bag8.length === 0){
                return "Game Over";
            }
            else{
        this.generatedWord = this.randomizeWord(this.getRandWordfromBag(this.bag8))
            return this.generatedWord;
            }
        default :
            return "Game Over";
        }


}
getWord(){
    return this.generatedWord;

}
nextState(n){
    return this.generateWordfromBag(n+1);

}
render(){
    for(let i = 0; i < this.generatedWord.length; i++){
        console.log(this.generatedWord[i]);
        const letter = document.createElement('div');
        letter.classList.add('letterBubble');
        document.getElementById('container').appendChild(letter);
        //put the letter in the bubble
        letter.innerHTML = this.generatedWord[i];
}

}}

export { CollectionofWords };

