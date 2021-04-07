//Game won counter
let won = 0;

//Game lost counter
let lost = 0;

//Attempts failed counter
let strike = 4;

//Attempt letter from keyboeard
let attemptLetter = "";

//Button text in the small Popup
let popMessageSmall = ["OK"];

//Button text in the large Popup
let popMessagesLarge = ["Animals", "Fruits & Vegetables", "School Tools", "Part of the House", "In the kitchen"];


//Initial Popup
getPopMessage("pop-box-large", "Choose the topic", popMessagesLarge);
setPopButtonOnListening("pop-box-large");

//The keyboard appears
getKeyboard();

//Preparation the buttons in the play section
getChangeWordButton();
getChangeTopicButton()
getResetScoredButton()

//Disabled all buttons
setKeyboardDisabled();
setPlayButtonDisabled();


function setupGame(word) {

    printHiddenWord(word);

    setKeyboardEnabled();
    setPlayButtonEnebled();

    strike = 4;

    hideHangPart();

    printScore(won, lost);
}
