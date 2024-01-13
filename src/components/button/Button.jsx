import React from 'react'
import './Button.css'

export default function Button(props) {
  function onPress() {
    console.log('working');
    alert(`${props.text} pressed`);
  }

  return (
    <div className='buttonParent'>
      <button className='button' onClick={props.onClick} onMouseOver={props.mouseOver} style={props.style}>
        {props.text}
      </button>
    </div>
  );
}

