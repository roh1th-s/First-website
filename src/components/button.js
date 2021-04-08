import React from 'react'
import {Link} from 'react-router-dom'

import './button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

function button({children, type, onClick, buttonStyle, buttonSize, to}) {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to={to} classname='btn-mobile'>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>{children}</button>
    </Link>
  )
}

export default button
