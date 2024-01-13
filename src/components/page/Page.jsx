import React, { useState } from 'react';
import Button from '../button/Button';
import './Page.css'; // Import your CSS file
import Initial from './Initial';
import FinalPage from './FinalPage';
import {style} from '../../utils/styles'

export default function Page() {
  const [yesClick,setYesClick] = useState(false);
  const [styleIndex,setStyleIndex] = useState(0);
  function yesClicked() {
    setYesClick(true); 
    console.log(yesClick);
  }
  function handleMouseOver(){
    // console.log((styleIndex+1)/style.length);
    setStyleIndex(styleIndex+1);
  }
  return (
    <div className='parent'>
      <div className='image'>
      {
        (!yesClick)?(
          <>
        <Initial />
        <Button text="Yes!!" onClick={yesClicked} />
        <Button text="No!!" mouseOver={handleMouseOver} style={style[styleIndex%style.length]}/>
         </>
        ):(<FinalPage/>)
      }
      </div>
      
    </div>
  );
}





//   const [buttonPosition, setButtonPosition] = useState({
//     top: Math.random() * 500, // Set initial random top position
//     left: Math.random() * 500, // Set initial random left position
//   });

//   const handleNoButtonHover = () => {
//     setButtonPosition({
//       top: Math.random() * 500, // Set new random top position
//       left: Math.random() * 500, // Set new random left position
//     });
//     alert('No');
//   };
