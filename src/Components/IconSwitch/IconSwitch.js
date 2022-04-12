import React from 'react';
import './IconSwitch.css';
function IconSwitch({icon, onSwitch}) {
    const onSwitchRet=evt=>{
        onSwitch(evt.target.dataset.name)
    }
    return (
        <div data-name={icon} onClick={onSwitchRet} className='material-icons icon-color'>{icon}</div>
    );
}

export default IconSwitch;