import React, { useState } from 'react';

export const Modal = () => {
    const [color, setColor] = useState('blue');

    const changeColor = () => {
        setColor(color === 'blue' ? 'red' : 'blue');
    };

    const modalStyle = {
        backgroundColor: color,
        position: "absolute",
        top: "50px",
        left: "calc(50% - 150px)",
        width: "300px",
        minHeight: "100px",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
    };

    return (
        <div className="modal-react-p14" style={modalStyle}>
            <h1>Modal</h1>
        </div>
    );
};

export default Button;
