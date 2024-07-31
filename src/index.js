import React, { useState } from 'react';
import './index.css';

const Modal = () => {
    const [color, setColor] = useState('blue');

    const changeColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
    };

    return (
        <div className="modal-react-p14">
            <h1>Modal</h1>
        </div>
    );
};

export default Button;
