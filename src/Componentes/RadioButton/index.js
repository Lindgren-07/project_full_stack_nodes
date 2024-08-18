import React from 'react'
import "./style.css"

function RadioButton(){
  return (
    <>
    <div className='radio'>
      
      <div>
        <input type="radio" name="Todos" value="true"/> 
        <span>Todos</span>
      </div>

      <div>
        <input type="radio" name="Prioridade" value="true"/> 
        <span>Prioridade</span>
      </div>
      
      <div>
        <input type="radio" name="Normal" value=""/> 
        <span>Normal</span>
      </div>

    </div>
    </>
  )

  
}

export default RadioButton