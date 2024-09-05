import React from 'react'

const Imput = () => {
  return (
    <label>
    <span>{text}</span>
  </label>
  )
}

Imput.propTypes = {
    text: PropTypes.striing,
    type: PropTypes.striing

}
export default Imput
