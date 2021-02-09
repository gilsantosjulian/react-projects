import { useState } from 'react'

const ToggleRPC = ({ children }) => {

  const [on, setOn] = useState(false)
  
  const toggle = () => {
    setOn(!on)
  }

  return (
    children({
      on: on,
      toggle: toggle,
    })
  )
}

export default ToggleRPC