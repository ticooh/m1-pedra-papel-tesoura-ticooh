function playRockPaperScissor(player1, player2){
    let firstChose= "Pedra"
    let secondChose= "Papel"
    let thirdChose= "Tesoura"
    
    if (player1== firstChose && player2 == thirdChose){
        return "Jogador 1 venceu!"
    }
    else if (player1== firstChose && player2 == secondChose){
        return "Jogador 2 venceu!"
    }
    else if (player1== secondChose && player2 == firstChose){
        return "Jogador 1 venceu!"
    }
    else if (player1== secondChose && player2 == thirdChose){
        return "Jogador 2 venceu!"
    }
    else if (player1== thirdChose && player2 == firstChose){
        return "Jogador 2 venceu!"
    }
    else if (player1== thirdChose && player2== secondChose){
        return "Jogador 1 venceu!"
    }
    return "Empate!"
    }
        