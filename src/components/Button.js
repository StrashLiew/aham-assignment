import React from 'react'
import './Button.css'

import PropTypes from 'prop-types'
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];



const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
  )
}

Button.propTypes = {
    children: PropTypes.string,
    type: PropTypes.any,
    onClick: PropTypes.any,
    buttonStyle: PropTypes.string,
    buttonSize: PropTypes.string
}

export default Button