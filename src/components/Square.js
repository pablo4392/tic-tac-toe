import React from "react";
import "./square.css";

const Square = ({value, handlerClickOnSquare, index}) => { //"handleClickOnSquare" sera el prop que permitira ejecutar una funcion al darle click
    //queremoas ejecurtar una funcion fuera de 
    // const handle = () => {
    //     handlerClickOnSquare(value)
    // }
    return (
        //cada recuadro del tablero sera un boton 
    <button className="Square" onClick={() => handlerClickOnSquare(index)}> 
         {value} 
    </button>) 
};

export default Square;