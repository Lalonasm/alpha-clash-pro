// function play() {
//     //  1. hide the home screen to hide the home screen  add the class hidden to the home screen
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList)
// }
function continueGame() {
    //step-1: Generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet:', alphabet);

// set randomly generate alphabet to the screen (show it);
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

//set background color
setBackgroundColorById(alphabet);

}


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}
