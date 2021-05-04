// esta parte del codigo se encargara de utilizar los componentes desarrollados para generar las reglas del juego 
import React, {useState} from "react";
import Board from "./Board"; 

function calculateWinner(board) { //esta sera la funcion para encontrar al ganador 
    const winingPositions = [ //estas son las posiciones que generan un ganador
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winingPositions.length; i++) { //con este for leeremos el array 
        const [a, b, c] = winingPositions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return null;
}
const Game = () => {
    const [board, setBoard] = useState(new Array(9).fill(null)); //estado inicial: arreglo con 9 elementos los cuales estaran llenos con un valor "null"
    const [xIsNext, setXIsNext] = useState(true); //esta variable nos permiti
    const winner = calculateWinner(board);

    const handleSquareChange = (index) => {
        const copiedBoard = [...board]; //esta linea gererara una copia de board
        if (copiedBoard[index] || winner) return; //esta linea permitira que solo se imprima un valor en cada estado y cuando 3 elementos iguales esten las posisicones del ganador, no se vuelva a tirar

        copiedBoard[index] = xIsNext ? "X" : "O ";
        setXIsNext(!xIsNext); //negando la variable de estado podemos alternar entre uno y otro valor
        setBoard(copiedBoard);
    }
    return(
        <Board squares={board} handleClick={handleSquareChange}/>
    )
};

export default Game; 