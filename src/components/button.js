import React from 'react';

const Button = (props) => {
return <input type="button" onClick={props.handleClick} className="button" value={props.val} />
}
export default Button;