"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Cell = function (props) {
    var data = props.data, width = props.width, height = props.height, flex = props.flex, style = props.style, textStyle = props.textStyle, borderStyle = props.borderStyle, rest = __rest(props, ["data", "width", "height", "flex", "style", "textStyle", "borderStyle"]);
    var textDom = react_1.default.isValidElement(data) ? (data) : (<react_native_1.Text style={[textStyle, styles.text]} {...rest}>
      {data}
    </react_native_1.Text>);
    var borderTopWidth = (borderStyle && borderStyle.borderWidth) || 0;
    var borderRightWidth = borderTopWidth;
    var borderColor = (borderStyle && borderStyle.borderColor) || '#000';
    return (<react_native_1.View style={[
            {
                borderTopWidth: borderTopWidth,
                borderRightWidth: borderRightWidth,
                borderColor: borderColor
            },
            styles.cell,
            width && { width: width },
            height && { height: height },
            flex && { flex: flex },
            !width && !flex && !height && !style && { flex: 1 },
            style
        ]}>
      {textDom}
    </react_native_1.View>);
};
exports.Cell = Cell;
var styles = react_native_1.StyleSheet.create({
    cell: { justifyContent: 'center' },
    text: { backgroundColor: 'transparent' }
});
