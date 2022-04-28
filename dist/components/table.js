"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWrapper = exports.Table = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Table = function (props) {
    function renderChildren(_props) {
        return react_1.default.Children.map(_props.children, function (child) {
            return react_1.default.isValidElement(child)
                ? react_1.default.cloneElement(child, _props.borderStyle && child.type !== 'ScrollView' ? { borderStyle: _props.borderStyle } : {})
                : null;
        });
    }
    var borderStyle = props.borderStyle;
    var borderLeftWidth = (borderStyle && borderStyle.borderWidth) || 0;
    var borderBottomWidth = borderLeftWidth;
    var borderColor = (borderStyle && borderStyle.borderColor) || '#000';
    return (<react_native_1.View style={[
            props.style,
            {
                borderLeftWidth: borderLeftWidth,
                borderBottomWidth: borderBottomWidth,
                borderColor: borderColor
            }
        ]}>
      {renderChildren(props)}
    </react_native_1.View>);
};
exports.Table = Table;
var TableWrapper = function (props) {
    function renderChildren(_props) {
        return react_1.default.Children.map(_props.children, function (child) {
            return react_1.default.isValidElement(child)
                ? react_1.default.cloneElement(child, _props.borderStyle ? { borderStyle: _props.borderStyle } : {})
                : null;
        });
    }
    var style = props.style;
    return <react_native_1.View style={style}>{renderChildren(props)}</react_native_1.View>;
};
exports.TableWrapper = TableWrapper;
