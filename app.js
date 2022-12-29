const playTo = document.querySelector('#playto');
const card = document.querySelector('.card');

const score1 = document.querySelector("#p1Display")
const score2 = document.querySelector("#p2Display")

const buttonP1 = document.querySelector("#p1Button")
const buttonP2 = document.querySelector("#p2Button")
const reset = document.querySelector("#reset")
let isWon = false



const win_function = () => {
    setTimeout(() => {
        if (playTo.value === score1.innerText) {
            isWon = true;
            alert("Player 1 Won!!!");
            // reset_score();

        }
        else if (playTo.value === score2.innerText) {
            alert("Player 2 Won!!!");
            isWon = true;
            // reset_score();
        }
    }, 20)
}

card.addEventListener("click", win_function)
// }
// card.addEventListener("click", () => {
//     if (playTo.value === score1.innerText) {
//         alert("Player 1 Won!!!")
//         // reset_score();

//     }
//     else if (playTo.value === score2.innerText) {
//         alert("Player 2 Won!!!")
//         // reset_score();
//     }

// })

const update_score = (e) => {
    console.log("1")
    if (!isWon) {
        let score
        if (e.target.id === "p1Button") {
            score = score1;
        }
        else {
            score = score2;
        }
        scoreValue = Number(score.innerText) + 1;
        score.innerText = scoreValue.toString();
    }
    // current_score = e.target.innerText
    // console.log(e.target.id === "p1Button")
}

const reset_score = (e) => {
    score1.innerText = '0';
    score2.innerText = '0';
    isWon = false;

}

buttonP1.addEventListener("click", update_score)
buttonP2.addEventListener("click", update_score)
reset.addEventListener("click", reset_score)






