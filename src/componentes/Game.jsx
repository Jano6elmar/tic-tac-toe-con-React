import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const styles = {
    width: '200px',
    margin:'20px auto',
};

const Game = () => {
  
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);
    
    const handleClick =(i)=>{
        const boardCopy = [...board]
        //si el usuario clikea un cuadrado ocupado o si el juego lo gana alguien,  regresa lo siguiente
        if (winner || boardCopy[i]) return
        //Pon X o O en el cuadro selecionado
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);

    }
    
     const renderMoves = () =>(
         <button className="limpiarTablero" onClick={()=>setBoard(Array(9).fill(null))}>
                Limpiar Tablero         
            </button>
                )
                const reload = () => {
                    window.location.reload();
                }

    
    return (
        <>
               <p className="mensaje mb-0">{winner ?  winner + ' Gana!'    : 'Es el turno de ' + (xIsNext ? 'X' : 'O')}</p>
           <Board squares={board} onClick={handleClick}/>
           
           <div style={styles} className="div mt-1">
               {renderMoves()}
               <p><button className="restartButton" onClick={reload}>Reiniciar</button></p>
           </div>
               
           



        </>
    );
}
export default Game;