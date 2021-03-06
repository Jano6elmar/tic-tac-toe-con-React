import React from 'react'
import Square from './Square';

const style = {
    border: '10px solid grey ',
    borderRadius:'10px',
    width:'500px',
    height:'500px',
    margin:'0 auto',
    display:'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)' //con esto defino el el numero de filas y columnas del tablero
};



const Board =({squares, onClick})=> {
    return (
        <div style={style}>
        {squares.map((square, i)=> (
          <Square key={i} value={square} onClick={()=> onClick(i)}/>  
        ))}
             
        </div>
    )
}

export default Board;
