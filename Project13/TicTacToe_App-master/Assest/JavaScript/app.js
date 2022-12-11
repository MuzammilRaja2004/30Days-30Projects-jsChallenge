let WrapperContainer = document.querySelector(".inner-extra");
let GameDivs = WrapperContainer.getElementsByTagName("div");
let arrayempty = [];
const checkingClass = (divClass) => {
    return divClass.className;
};
const CheckingWinner = (loopNumber, gap1, gap2) => {
if (
    checkingClass(GameDivs[loopNumber]) == checkingClass(GameDivs[loopNumber + gap1]) &&
    checkingClass(GameDivs[loopNumber]) == checkingClass(GameDivs[loopNumber + gap2])
)
     {
        if (checkingClass(GameDivs[loopNumber]) == "active1") {
            playToy = "X";
        }
        else {
            playToy = "0"
        }
        alert(`Player ${playToy} Is Win`)
        location.reload()
    }
}
function main(id) {
    let getid = document.getElementById(id);
    if (arrayempty.length == 0) {
        getid.classList.add("active1");
        arrayempty.push("a");
    } else if (arrayempty[0] === "a") {
        getid.classList.add("circel1");
        arrayempty.pop();
    }
for (let i = 0; i <= 6; i += 3) {
    if (GameDivs[i].hasAttribute("class") && GameDivs[i + 1].hasAttribute("class") && GameDivs[i + 2].hasAttribute("class")) {
        CheckingWinner(i, 1, 2)
        break;
    }
}
for (let j = 0; j < 3; j++) {
    if (GameDivs[j].hasAttribute("class") && GameDivs[j + 3].hasAttribute("class") && GameDivs[j + 6].hasAttribute("class")) {
        CheckingWinner(j, 3, 6)
        break;
    }
}
    if (GameDivs[0].hasAttribute("class") && GameDivs[0 + 4].hasAttribute("class") &&
        GameDivs[0 + 8].hasAttribute("class")) {
        CheckingWinner(0, 4, 4)
    }
    if (GameDivs[2].hasAttribute("class") && GameDivs[4].hasAttribute("class") &&
        GameDivs[6].hasAttribute("class")) {
        CheckingWinner(2, 2, 2)
    }
}
