import React, { useState, useEffect } from 'react';
import SettingsIcon from "@mui/icons-material/Settings";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import LinkIcon from "@mui/icons-material/Link";
import AssistantIcon from "@mui/icons-material/Assistant";
import { HiddenCardSection } from './hiddenCardSection';
const items = [
    {
        icon:<SettingsIcon color="primary" sx={{ fontSize: 50 }} />,
        copy:'Manufacturing'
    },{
        icon:<RoomPreferencesIcon color="primary" sx={{ fontSize: 50 }} />,
        copy:'Services'
    },{
        icon:<OnlinePredictionIcon color="primary" sx={{ fontSize: 50 }} />,
        copy:'Technology'
    },{
        icon:<LinkIcon color="primary" sx={{ fontSize: 50 }} />,
        copy:'Supply Chain'
    },{
        icon:<AssistantIcon color="primary" sx={{ fontSize: 50 }} />,
        copy:'Consulting & Audit'
    },
];

const Card = (props) => {
  return (
                   <a href="#hidden-services" onClick={() => props.setCardName(props.copy)}>

      <li className="card card-carousal" onClick={() => props.setCardName(props.copy)}>
              <div>
                  <div className="logo-div logo-div-carousal">
                      {props.icon}
                </div>
                  <h2>{props.copy}</h2>

              </div>
         
      </li>
         </a>
  )
}

export const Cards = () => {
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(items);
const [cardName, setCardName] = useState('');

  useEffect(() => {
    document.documentElement.style.setProperty('--num', carouselItems.length);
  }, [carouselItems])
  
  const handleAnimationEnd = () => {
    if(moveClass === 'prev'){
      shiftNext([...carouselItems]);
    }else if(moveClass === 'next'){
      shiftPrev([...carouselItems]);
    }
    setMoveClass('')
  }
  
  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.splice(0, 0, lastcard);
    setCarouselItems(copy);
  }
  
  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.splice(copy.length, 0, firstcard);
    setCarouselItems(copy);
  }
  
    return (
      <>
        <div className="container2-contents">
            <div className="container">

                <h2>Services</h2>

         <div className="carouselwrapper module-wrapper">
   
      <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
        {carouselItems.map((t, index) => 
            <Card key={t.copy + index} icon={t.icon} copy={t.copy} setCardName={ setCardName } />
        )}
              </ul>
                 <div className="ui">
        <button onClick={() => setMoveClass('next')} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={() => setMoveClass('prev')} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
            </div>
            </div>  </div> 
              <HiddenCardSection cardName={cardName} />
</>
  )
}
