import React, { Component } from 'react'

const style ={
    background: '#5f5a55',
    border:'2px solid black',
    fontSize:'35px',
    fontWeight:'500',
    cursor:'pointer',
    outline: 'none'
}

const Square = ({value, onClick})=> {
    return (
           <button style={style} onClick={onClick}>
               {value}
           </button>
        )
    }
 
export default Square;
