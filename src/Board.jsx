import React, { useState, useReducer } from 'react'
import Square from './Square'
import './index.css'

const Board = () => {
    const initialState = { status: "X" }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'X':
                return { status: "O" }
            case 'O':
                return { status: "X" }
            default:
                throw new Error()
        }
    }
    const [status, dispatch] = useReducer(reducer, initialState)
    
    return (
        <div className="board">
            <div className='status'>{status.status}</div>

            <div className='board-row'>
                {[0, 1, 2].map(col => <Square status={status} dispatch={dispatch}   key={col} />)}
            </div>
            <div className='board-row'>
                {[3, 4, 5].map(col => <Square status={status} dispatch={dispatch}  key={col}/>)}
            </div>
            <div className='board-row'>
                {[6, 7, 8].map(col => <Square status={status} dispatch={dispatch} key={col}/>)}
            </div>
        </div>
    )
}

export default Board

// {[0, 3, 6].map(row => {
//     <div className='board-row'>
//         <div>{row}</div>
//         {[row, row+1, row+2].map(col => <Square value={col} />)}
//     </div>
// })

// }
// </div>