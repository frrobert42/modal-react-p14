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
        marginRight: "-20px",
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
                <svg
                    style={buttonStyle}
                    onClick={onClose}
                    width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" fill="none" width="24" height="24" style={{backgroundColor: "white"}}/>
                    <g>
                        <path d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0 4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8-1.4 1.4z"/>
                    </g>
                </svg>
                <div className="mt-2 text-sm font-medium">
                    <p>{modalMessage}</p>
                </div>
            </div>
        </div>
    );
};
