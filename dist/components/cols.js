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
exports.Cols = exports.Col = void 0;
var React = __importStar(require("react"));
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
