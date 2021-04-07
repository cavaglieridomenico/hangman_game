/**
 * Associated with each key on the keyboard 
 * checks if the chosen letter is present
 * the score conditions and the status of the keys and "hanged man"
 */
function play() {
    let LettersGuessForAttempt = 0;
    for (let i = 0; i < getLetter().length; i++) {
        if (getLetter()[i].innerHTML === attemptLetter) {
            getLetter()[i].classList.add("visible");
            LettersGuessForAttempt++;
            if (getLetterGuess().length === getLetter().length) {
                setKeyboardDisabled();
                setPlayButtonDisabled();
                hideHangPart();
                getPopMessage("pop-box-small", "You Win!", getPopMessageSmall());
                setPopButtonOnListening("pop-box-small");
                won++;
                printScore(won, lost);
            }
        }
        document.getElementById(attemptLetter).setAttribute("disabled", true);
    }

    if (LettersGuessForAttempt == 0) {
        (strike--)
        switch (strike) {
            case 0:
                setDefeat() 
                break;
            case 1:
                getHangParts("hang-arm-l");
                getHangParts("hang-arm-r");
                break;
            case 2:
                getHangParts("hang-body");
                break;

            case 3:
                getHangParts("hang-head");
                break;
            default:
                getPopMessage("pop-box-large", "Choose the topic", getPopMessageLarge()); 
                setPopButtonOnListening("pop-box-large");
        }

    }
}

function setDefeat() {
    getHangParts("hang-leg-l");
    getHangParts("hang-leg-r");
    setKeyboardDisabled();
    setPlayButtonDisabled();
    setWordVisible();
    getPopMessage("pop-box-small", "You lost...", getPopMessageSmall());
    setPopButtonOnListening("pop-box-small");
    lost++;
    printScore(won, lost);
}