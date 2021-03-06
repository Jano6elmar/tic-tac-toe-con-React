import React, { useState } from 'react';
import Game from './Game';

const Start = () => {
    let [display,setDisplay] = useState(true);

       
    return (
        <>
            <div className="container0 d-block text-center d-none">
                <h1 className="tituloPrincipal">Tic Tac Toe en React.js</h1>
            </div>
           {/* seleción de arma y nombre de jugador */ }
            <div className={"container1 text-center mt-1" + (display === true ? "" : " d-none")} >
                <h2 className="elegirArmas pt-4">Elegir Armas</h2>
                <div className="row">
                    <div className="col ml-3">
                        <input type="text" placeholder="Jugador 1" />
                    </div>
                    <div className="col mr-3">
                        <input type="text" placeholder="Jugador 2" />
                    </div>
                </div>

                <div className=" d-flex justify-content-center mt-2">
                    <div className="col-3 mr- d-flex justify-content-center align-content-center" onClick={() => { setDisplay(display = false) }} >
                        <button className="buttons1" type="button">X</button>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-content-center" onClick={() => { setDisplay(display = false) }}>
                        <button className="buttons2" type="button">O</button>
                    </div>
                </div>                
            </div>
            <div className={"" + (display === true ? "d-none" : "")}>
                <Game/>             
            </div>
            
        </>

    )
}

export default Start