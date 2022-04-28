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
exports.Cols = exports.Col = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var utils_1 = require("../utils");
var cell_1 = require("./cell");
var Col = function (props) {
    var data = props.data, style = props.style, width = props.width, heightArr = props.heightArr, flex = props.flex, textStyle = props.textStyle, rest = __rest(props, ["data", "style", "width", "heightArr", "flex", "textStyle"]);
    return data ? (<react_native_1.View style={[width ? { width: width } : { flex: 1 }, flex && { flex: flex }, style]}>
      {data.map(function (item, i) {
            var height = heightArr && heightArr[i];
            return <cell_1.Cell key={i} data={item} width={width} height={height} textStyle={textStyle} {...rest}/>;
        })}
    </react_native_1.View>) : null;
};
exports.Col = Col;
var Cols = function (props) {
    var data = props.data, style = props.style, widthArr = props.widthArr, heightArr = props.heightArr, flexArr = props.flexArr, textStyle = props.textStyle, rest = __rest(props, ["data", "style", "widthArr", "heightArr", "flexArr", "textStyle"]);
    var width = widthArr ? (0, utils_1.sum)(widthArr) : 0;
    return data ? (<react_native_1.View style={[styles.cols, width && { width: width }]}>
      {data.map(function (item, i) {
            var flex = flexArr && flexArr[i];
            var wth = widthArr && widthArr[i];
            return (<exports.Col key={i} data={item} width={wth} heightArr={heightArr} flex={flex} style={style} textStyle={textStyle} {...props}/>);
        })}
    </react_native_1.View>) : null;
};
exports.Cols = Cols;
var styles = react_native_1.StyleSheet.create({
    cols: { flexDirection: 'row' }
});
