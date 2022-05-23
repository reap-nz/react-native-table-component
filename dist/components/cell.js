"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cell = void 0;
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var Cell = function (props) {
    var data = props.data, width = props.width, height = props.height, flex = props.flex, style = props.style, textStyle = props.textStyle, borderStyle = props.borderStyle, rest = __rest(props, ["data", "width", "height", "flex", "style", "textStyle", "borderStyle"]);
    var textDom = React.isValidElement(data) ? (data) : (<react_native_1.Text style={[textStyle, styles.text]} {...rest}>
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
