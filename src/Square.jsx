import React, {useState} from 'react'
import './index.css'
const Square = (props) => {
    const [value, setValue] =useState("")
    const placeValue = (e) =>{
      setValue(props.status.status)
      props.dispatch({type: props.status.status})

    }
  return (
    <div className='square' onClick={(e)=>placeValue(e)}>
        {value}
    </div>
  )
}

export default Square