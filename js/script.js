function randomNum(){
    while (numList.length < 5){
        let num = Math.floor(Math.random() * ((100 + 1) - 1)) + 1;
        num.innerText+=numList;
        if(!numList.includes(num)){
            numList.push(num);
        }
    }
    return numList;
}


const numList = [];
const containerHTML = document.querySelector('.container');

containerHTML.innerText = `Simon says: ${randomNum()}`;

setTimeout(function(){
    containerHTML.innerText='';
}, 30000)

let checkedList=[];

setTimeout( function(){
    let counter=0;
    for (i=0; i<=numList.length-1; i++){
        let yourNum = parseInt(prompt('Inserisci qui un numero'));
        if (numList[i] === yourNum){
            counter++;
            checkedList.push(yourNum);
        } 
    }   
    if (counter !== 0){
        containerHTML.innerText = `Il tuo punteggio è ${counter}! I numeri che hai indovinato sono: ${checkedList}.`;
    } else {
        containerHTML.innerText = 'Oh no, li hai sbagliati tutti.';
    }
}, 30500)

