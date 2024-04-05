// function play() {
//     //  1. hide the home screen to hide the home screen  add the class hidden to the home screen
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList)
// }
function handleKeyboardKeyupEvent(event) {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // stop the if press 'Esc';
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check right or wrong key pressed
    if (playerPressed === expectedAlphabet) {
        console.log('You got a point!');


        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore)


        // console.log('you have pressed correctly .', expectedAlphabet);
        // update score:
        //1. get the current score;
        // const currentScoreElement = document.getElementById('current-score');
        // // console.log(currentScoreElement);
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseFloat(currentScoreText);
        // console.log(currentScore);
        // //2. increase the score by 1;
        // const newScore = currentScore + 1;
        // //3. show the updated score
        // currentScoreElement.innerText = newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('Dhuur vaiya or apu  , Please press right key');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }

        //1. get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const currentScore = getTextElementValueById('current-score');

        // //2. reduce the life count
        // const newLife = currentLife - 1;


        // //display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyupEvent)

function continueGame() {
    //step-1: Generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet:', alphabet);

    // set randomly generate alphabet to the screen (show it);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);

}


function play() {
    //hide everything show only the  playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0)
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score')
    // update final score
    // 1. get the final score 
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('lastScore', lastScore);

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}
