"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
Modal.propTypes = {
  onClose: _propTypes["default"].func,
  errorMessage: _propTypes["default"].string,
  modalMessage: _propTypes["default"].string,
  color: _propTypes["default"].string
};
function Modal(_ref) {
  var onClose = _ref.onClose,
    modalMessage = _ref.modalMessage,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'blue' : _ref$color;
  var modalStyle = {
    position: "absolute",
    top: "50px",
    left: "calc(50% - min(50%, 150px))",
    width: "50%",
    maxWidth: "300px",
    minWidth: "min(100%, 300px)",
    minHeight: "100px",
    borderRadius: "5px",
    padding: "10px"
  };
  var buttonStyle = {
    marginLeft: "auto",
    marginTop: "-20px",
    marginRight: "-20px"
  };
  var overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    height: "100%",
    width: "100%"
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: overlayStyle
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-react-p14 rounded-md p-4",
    style: modalStyle
  }, /*#__PURE__*/_react["default"].createElement(Image, {
    src: "/img/cross.svg",
    onClick: onClose,
    style: buttonStyle
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2 text-sm font-medium"
  }, /*#__PURE__*/_react["default"].createElement("p", null, modalMessage))));
}
;