// function play(){
//     // console.log('Start play ground');
//     // hide the home screen
//     const homesection=document.getElementById('home-screen');
//     // console.log(homesection.classList);
//     homesection.classList.add('hidden');

//     // set the playground
//     const playsection=document.getElementById('play-ground');
//     playsection.classList.remove('hidden');
// }

// another way
function play(){
    hideelement('home-screen');//hide
    showelement('play-ground');//play-show
    continueGame();
}
//hide element process
function hideelement(elementId){
    const hide=document.getElementById(elementId);
    hide.classList.add('hidden');
}
//show element process
function showelement(elementId){
    const show=document.getElementById(elementId);
    show.classList.remove('hidden');

}
// Step: Generate a random alphabet
function continueGame(){
    const alphabet=getArandom();
    //console.log('Your random Alphabet: ',alphabet);

    //set randomly generate alphabet to the screen(Show it)
    const currentalphabet=document.getElementById('current-alphabet');
    currentalphabet.innerText=alphabet;

    //set background color
    addbackground(alphabet);

}
// step:1 random alphabet
function getArandom(){
    //get or create an alphabets array
    const alphabetstr='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetstr.split('');
    // console.log(alphabets);

    //gat a random index(0-25)
    const randomNum=Math.random()*25;
    const index=Math.round(randomNum);
    // console.log(index);

    const alphabet=alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}

// background color
function addbackground(elementid){
    const element=document.getElementById(elementid);
    element.classList.add('bg-orange-400');
}
function removebackground(elementid){
    const element=document.getElementById(elementid);
    element.classList.remove('bg-orange-400');
}

//Part:2//////////////////////////////////////////////////////////////////////////////////////////////////

// document.addEventListener('keyup', function keyboardhandler (){
//     console.log('keypress')
// }) or
function keyboardhandler(event){
    // console.log(event.key);
    const playerpress=event.key;
    console.log('player press: ',playerpress);
    const currentalpha=document.getElementById('current-alphabet');
    // console.log(currentalpha.innerText)
    const required=currentalpha.innerText;
    // console.log('Required: ',required,' You press: ',playerpress);

    //conditional statement
    if(required===playerpress){
        console.log('You got a point');
        //update score:
        //get the current score
        const currentScElement=document.getElementById('current-score');
        const currentScoret=currentScElement.innerText;
        // console.log( currentScoret); it's string
        const currentscore=parseInt(currentScoret);
        console.log(currentscore);

        //increase the score by 1
        const newscore=currentscore+1;
        //show the final score
        currentScElement.innerText=newscore;

        //start a new round
        removebackground(playerpress);
        continueGame();
        
    }
    else{
        console.log('You lost a life');

        //current life
        const currentlifeEle=document.getElementById('current-life');
        const currentlifetext=currentlifeEle.innerText;
        const currentlifeN=parseInt(currentlifetext);

        //reduce the current life -1
        const currentLife=currentlifeN-1;

        //display the update life count
        currentlifeEle.innerText=currentLife;
    }
}
document.addEventListener('keyup', keyboardhandler);

