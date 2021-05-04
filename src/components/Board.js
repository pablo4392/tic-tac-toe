//con esta seccion posicionaremos los recuadros

import React from "react"
import Square from "./Square.js";
import "./board.css";
//este elemento devolvera el tablero el cual esta compuesto por nueve botones creados anteriormente
const Board = ({squares, handleClick}) => {
    const handler = (i) => {
        handleClick(i)
    }

    return (
        <div className="Board">
            <Square value={squares[0]} index= {0} handlerClickOnSquare={handler}/>
            <Square value={squares[1]} index= {1} handlerClickOnSquare={handler}/>
            <Square value={squares[2]} index= {2} handlerClickOnSquare={handler}/>

            <Square value={squares[3]} index= {3} handlerClickOnSquare={handler}/>
            <Square value={squares[4]} index= {4} handlerClickOnSquare={handler}/>
            <Square value={squares[5]} index= {5} handlerClickOnSquare={handler}/>

            <Square value={squares[6]} index= {6} handlerClickOnSquare={handler}/>
            <Square value={squares[7]} index= {7} handlerClickOnSquare={handler}/>
            <Square value={squares[8]} index= {8} handlerClickOnSquare={handler}/>
        </div>
    )
}

export default Board