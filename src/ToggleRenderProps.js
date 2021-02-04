import React, { useState } from 'react'

const Toggle = ({ render }) => {

  const [ on, setOn ] = useState(false)

  const toggle = () => {
    setOn(!on)
  }

  console.log('ENTRAAA')

  return (
    // <div>
    //   { on && (<h1>Toggle me</h1>) }
    //   <button onClick={toggle}>Show/Hide</button>
    // </div>
    <div>
      {render({
        on: on,
        toggle: toggle
      })}
    </div>
  )

}

export default Toggle
