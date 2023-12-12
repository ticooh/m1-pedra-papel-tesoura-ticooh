function playRockPaperScissor(player1, player2) {
    if ((player1 === "rock" && player2 === "scissor") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissor" && player2 === "paper")) {
        return "Jogador 1 venceu!";
    } else if ((player2 === "rock" && player1 === "scissor") ||
               (player2 === "paper" && player1 === "rock") ||
               (player2 === "scissor" && player1 === "paper")) {
        return "Jogador 2 venceu!";
    }
    return "Empate!";
}

console.log(playRockPaperScissor("paper", "rock"));