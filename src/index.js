import React from 'react';
import PropTypes from "prop-types";

Modal.propTypes = {
    backgroundColor: PropTypes.string,
    buttonBackgroundColor: PropTypes.string,
    buttonColor: PropTypes.string,
    buttonMessage: PropTypes.string,
    color: PropTypes.string,
    modalMessage: PropTypes.string,
    onClickButton: PropTypes.func,
    onClose: PropTypes.func,
    positionX: PropTypes.string,
    positionY: PropTypes.string,
    textColor: PropTypes.string,
};

export default function Modal({
                                  backgroundColor = 'rgba(0,0,0,0.7)',
                                  buttonBackgroundColor = 'rgba(0,0,0,0.7)',
                                  buttonColor = 'lightgrey',
                                  buttonMessage = '',
                                  color = 'lightgrey',
                                  modalMessage,
                                  onClickButton = () => {},
                                  onClose = () => {},
                                  positionX = 'center',
                                  positionY = 'center',
                                  textColor = 'black',
                              }) {

    // Styles
    const modalStyle = {
        backgroundColor: color,
        border: "1px solid black",
        borderRadius: "5px",
        color: textColor,
        maxWidth: "300px",
        minHeight: "100px",
        minWidth: "min(100%, 300px)",
        padding: "10px",
        position: "absolute",
        width: "50%",
    };

    // Overlay style
    let overlayStyle = {
        backgroundColor,
        bottom: 0,
        height: "100%",
        left: 0,
        position: "fixed",
        right: 0,
        top: 0,
        width: "100%",
    };

    // Position X : left, right, center
    if (positionX === "left") modalStyle.left = "50px";
    else if (positionX === "right") modalStyle.right = "50px";
    else if (positionX === "center") modalStyle.left = "calc(50% - min(50%, 150px))";

    // Position Y : top, bottom, center
    if (positionY === "top") modalStyle.top = "50px";
    else if (positionY === "bottom") modalStyle.bottom = "50px";
    else if (positionY === "center") modalStyle.top = "50%";

    // Cross button style
    const crossButtonStyle = {
        marginLeft: "auto",
        cursor: "pointer",
    };

    // Button style
    const buttonStyle = {
        cursor: "pointer",
        margin: "auto",
        borderRadius: "5px",
        padding: "5px",
        backgroundColor: buttonBackgroundColor,
        color: buttonColor,
        shadow: "0 0 10px rgba(0,0,0,0.5)",
    };

    return (
        <div style={overlayStyle}>
            <div className="modal-react-p14 rounded-md p-4" style={modalStyle}>
                {/* Cross */}
                <svg
                    style={crossButtonStyle}
                    onClick={onClose}
                    width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" fill="none" width="24" height="24"/>
                    <g>
                        <path d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0 4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8-1.4 1.4z"/>
                    </g>
                </svg>
                <div className="mt-2 text-sm font-medium">
                    {/* Modal text */}
                    <p>{modalMessage}</p>
                    {/* Optional Button */}
                    {buttonMessage &&
                        <button onClick={onClickButton} style={buttonStyle} className="button-modal">
                                {buttonMessage}
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};
