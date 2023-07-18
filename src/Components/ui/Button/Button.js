import React from 'react';

import './Button.css';


//destructed so i can pass it down easily.

const Button = ({label, onClick}) =>{
    return (
        <div className='button-body'>
            <button onClick={onClick}>{label}</button>
        </div>
    );
};
export default Button;