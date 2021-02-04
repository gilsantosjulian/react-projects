import React, { useState } from 'react'

const MouseTracker = () => {

  const [ cor, setCor ] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    setCor({
      x: event.clientX,
      y: event.clientY,
    })
  }

  return(
    <div style={{ height: '20vh', border: '1px solid white' }} onMouseMove={handleMouseMove}>
      <h1>Move the mouse around!</h1>
      <p>The current mouse position is ({cor.x}, {cor.y})</p>
    </div>
  )
}

export default MouseTracker