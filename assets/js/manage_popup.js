//Button text in the small window
let popMessageSmall = ["OK"];

//Button text in the large window
let popMessagesLarge = ["Animals", "Fruits and vegetables", "School Tools"];


//This function generates pop-up messages with title and n button
//Input:
//1: Popup message size (CSS id)
//2: Popup message title (string)
//3: Popup messege name of each button (array of strings)
function getPopMessage(idPopMessageSize, title, messages) {
    let popMessageNode = document.createElement("div");
    let popMessageTitleTextNode = document.createTextNode(title);
    
    popMessageNode.appendChild(popMessageTitleTextNode);

    popMessageNode.classList.add("pop-box", "flex", "column", "items-center");

    for (let i = 0; i < messages.length; i++) {
        let popBtnNode = document.createElement("button");
        let popBtnTextNode = document.createTextNode(messages[i]);
        
        popBtnNode.appendChild(popBtnTextNode);
        
        //This block assigns a progressive id to each button
        let popBtnId = "pop-btn"
        popBtnNode.classList.add(("pop-btn"))
        popBtnId += i + 1;
        popBtnNode.setAttribute("id", popBtnId);

        popMessageNode.appendChild(popBtnNode);
    }

    popMessageNode.setAttribute("id", idPopMessageSize);
    document.body.appendChild(popMessageNode);
}

//This function listens to the button of the popup message
//and assigns each a specific function
//Input: Popup message size (CSS id)
function setPopButtonOnListening(idPopMessageSize) {
    let popMessageNode = document.getElementById(idPopMessageSize);    
    let onlyTitleAndOneButton = 2;
    
    if (popMessageNode.childNodes.length === onlyTitleAndOneButton) {
        popMessageNode.childNodes[1].addEventListener("click", function () {
            gamePreparation();
            document.body.removeChild(popMessageNode)
        });
    } else {
        for (let i = 1; i < popMessageNode.childNodes.length; i++) {
            popMessageNode.childNodes[i].addEventListener("click", function () {
                topic = i;
                gamePreparation();
                document.body.removeChild(popMessageNode)
            });
        }
    }
}