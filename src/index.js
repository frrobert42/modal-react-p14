import React from 'react';
import PropTypes from "prop-types";

Modal.propTypes = {
    onClose: PropTypes.func,
    errorMessage: PropTypes.string,
    modalMessage: PropTypes.string,
    color: PropTypes.string,
};

export default function Modal({ onClose, modalMessage, color = 'blue' }) {

    const modalStyle = {
        position: "absolute",
        top: "50px",
        left: "calc(50% - min(50%, 150px))",
        width: "50%",
        maxWidth: "300px",
        minWidth: "min(100%, 300px)",
        minHeight: "100px",
        borderRadius: "5px",
        padding: "10px",
    };

    const buttonStyle = {
        marginLeft: "auto",
        marginTop: "-20px",
        marginRight: "-20px"
    };

    let overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        height: "100%",
        width: "100%",
    };
    return (
        <div style={overlayStyle}>
            <div className="modal-react-p14 rounded-md p-4" style={modalStyle}>
                <image href="/img/cross.svg" onClick={onClose} style={buttonStyle}/>
                <div className="mt-2 text-sm font-medium">
                    <p>{modalMessage}</p>
                </div>
            </div>
        </div>
    );
};
