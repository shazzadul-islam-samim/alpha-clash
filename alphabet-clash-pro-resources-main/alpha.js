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
    console.log('Your random Alphabet: ',alphabet);

    //set randomly generate alphabet to the screen(Show it)
    const currentalphabet=document.getElementById('current-alphabet');
    currentalphabet.innerText=alphabet;

    //set background color
    backgroundcolor(alphabet);

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
function backgroundcolor(elementid){
    const element=document.getElementById(elementid);
    element.classList.add('bg-orange-400');
}
