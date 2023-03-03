

let playGame = confirm('Shall we play rock, paper or scissors?');
if (playGame) {
    //play
    let playerChoice = prompt("Please enter rock/ paper / scissors");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === 'rock' || playerOne === 'paper' || playerOne === 'scissors') {
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? 'rock'
                : computerChoice === 2 ? 'paper'
                    : 'scissors';
            let result = playerOne === computer ? 'tie game!'
                : playerOne === 'rock' && computer === 'paper' ? `computer:   ${computer} wins!`
                    : playerOne === 'paper' && computer === 'scissors' ? `computer:   ${computer} wins!`
                        : playerOne === 'scissors' && computer === 'rock' ? `computer    ${computer} wins!`
                            : ` ${playerOne} wins!`;
            alert(result);
            let playAgain = confirm('again???');
            playAgain ? location.reload() : alert(`Thank you for palying. See you later!`);

        } else {
            alert(`you did not enter rock, paper or scissors.`);
        }

    } else {
        alert('I guess you changed your mind.Maybe next time.');
    }
} else {
    alert('Ok ,maybe next time.');
}