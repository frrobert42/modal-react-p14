import React, { useState } from 'react';
import PropTypes from "prop-types";

Modal.propTypes = {
    onClose: PropTypes.func,
    errorMessage: PropTypes.string,
    modalMessage: PropTypes.string,
    color: PropTypes.string,
};

export const Modal = ({ onClose, errorMessage, modalMessage, color = 'blue' }) => {

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
