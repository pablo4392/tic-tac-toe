import React from "react";
import "./Styles.css";

const Square = ({handlerClickOnSquare, index, value}) => { //"handleClickOnSquare" sera el prop que permitira ejecutar una funcion al darle click
    return (
        //cada recuadro del tablero sera un boton 
    <button className="square" onClick={() => handlerClickOnSquare(index)}> 
         {value} 
    </button>) 
};

export default Square;