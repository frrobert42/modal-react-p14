"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
Modal.propTypes = {
  onClose: _propTypes["default"].func,
  errorMessage: _propTypes["default"].string,
  modalMessage: _propTypes["default"].string,
  color: _propTypes["default"].string
};
var Modal = exports.Modal = function Modal(_ref) {
  var onClose = _ref.onClose,
    errorMessage = _ref.errorMessage,
    modalMessage = _ref.modalMessage,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'blue' : _ref$color;
  var modalStyle = {
    backgroundColor: color,
    position: "absolute",
    top: "50px",
    left: "calc(50% - 150px)",
    width: "300px",
    minHeight: "100px",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "10px"
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-react-p14",
    style: modalStyle
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Modal"));
};