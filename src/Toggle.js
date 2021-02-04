import React, { useState } from 'react'

const Toggle = () => {

  const [ on, setOn ] = useState(false)

  const toggle = () => {
    setOn(!on)
  }

  return(
    <div>
      { on && (<h1>Toggle me</h1>) }
      <button onClick={toggle}>Show/Hide</button>
    </div>
  )

}

export default Toggle
