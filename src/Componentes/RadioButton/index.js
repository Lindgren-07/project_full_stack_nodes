import React from 'react'
import "./style.css"

function RadioButton(){
  return (
    <div className='radio'>

      <input type="radio" name="Todos" value="true"/> 
      <span>Todos</span>

      <input type="radio" name="Prioridade" value="true"/> 
      <span>Prioridade</span>
      
      <input type="radio" name="Normal" value=""/> 
      <span>Normal</span>

    </div>
  )

  
}

export default RadioButton