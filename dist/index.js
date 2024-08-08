"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
Modal.propTypes = {
  backgroundColor: _propTypes["default"].string,
  buttonBackgroundColor: _propTypes["default"].string,
  buttonColor: _propTypes["default"].string,
  buttonMessage: _propTypes["default"].string,
  color: _propTypes["default"].string,
  modalMessage: _propTypes["default"].string,
  onClickButton: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  positionX: _propTypes["default"].string,
  positionY: _propTypes["default"].string,
  textColor: _propTypes["default"].string
};
function Modal(_ref) {
  var _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? 'rgba(0,0,0,0.7)' : _ref$backgroundColor,
    _ref$buttonBackground = _ref.buttonBackgroundColor,
    buttonBackgroundColor = _ref$buttonBackground === void 0 ? 'rgba(0,0,0,0.7)' : _ref$buttonBackground,
    _ref$buttonColor = _ref.buttonColor,
    buttonColor = _ref$buttonColor === void 0 ? 'lightgrey' : _ref$buttonColor,
    _ref$buttonMessage = _ref.buttonMessage,
    buttonMessage = _ref$buttonMessage === void 0 ? '' : _ref$buttonMessage,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'lightgrey' : _ref$color,
    modalMessage = _ref.modalMessage,
    _ref$onClickButton = _ref.onClickButton,
    onClickButton = _ref$onClickButton === void 0 ? function () {} : _ref$onClickButton,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
    _ref$positionX = _ref.positionX,
    positionX = _ref$positionX === void 0 ? 'center' : _ref$positionX,
    _ref$positionY = _ref.positionY,
    positionY = _ref$positionY === void 0 ? 'center' : _ref$positionY,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? 'black' : _ref$textColor;
  // Styles
  var modalStyle = {
    backgroundColor: color,
    border: "1px solid black",
    borderRadius: "5px",
    color: textColor,
    maxWidth: "300px",
    minHeight: "100px",
    minWidth: "min(100%, 300px)",
    padding: "10px",
    position: "absolute",
    width: "50%"
  };

  // Overlay style
  var overlayStyle = {
    backgroundColor: backgroundColor,
    bottom: 0,
    height: "100%",
    left: 0,
    position: "fixed",
    right: 0,
    top: 0,
    width: "100%"
  };

  // Position X : left, right, center
  if (positionX === "left") modalStyle.left = "50px";else if (positionX === "right") modalStyle.right = "50px";else if (positionX === "center") modalStyle.left = "calc(50% - min(50%, 150px))";

  // Position Y : top, bottom, center
  if (positionY === "top") modalStyle.top = "50px";else if (positionY === "bottom") modalStyle.bottom = "50px";else if (positionY === "center") modalStyle.top = "calc(50% - 100px)";

  // Cross button style
  var crossButtonStyle = {
    cursor: "pointer",
    marginLeft: "auto"
  };

  // Button style
  var buttonStyle = {
    backgroundColor: buttonBackgroundColor,
    borderRadius: "5px",
    color: buttonColor,
    cursor: "pointer",
    margin: "10px auto 0 auto",
    padding: "5px",
    shadow: "0 0 10px rgba(0,0,0,0.5)"
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: overlayStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-react-p14 rounded-md p-4",
    style: modalStyle
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    style: crossButtonStyle,
    onClick: onClose,
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    x: "0",
    fill: "none",
    width: "24",
    height: "24"
  }), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0 4-10.3.1-14.2zm-4.3 11.3L12 13.4l-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8-1.4 1.4z"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '0.5 rem'
    }
  }, modalMessage, buttonMessage && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClickButton,
    style: buttonStyle,
    className: "button-modal"
  }, buttonMessage))));
}
;