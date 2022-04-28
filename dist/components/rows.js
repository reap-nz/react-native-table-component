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
exports.Rows = exports.Row = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var utils_1 = require("../utils");
var cell_1 = require("./cell");
var Row = function (props) {
    var data = props.data, style = props.style, widthArr = props.widthArr, height = props.height, flexArr = props.flexArr, textStyle = props.textStyle, onRowPress = props.onRowPress, rowIndex = props.rowIndex, rest = __rest(props, ["data", "style", "widthArr", "height", "flexArr", "textStyle", "onRowPress", "rowIndex"]);
    var width = widthArr ? (0, utils_1.sum)(widthArr) : 0;
    return data ? (<react_native_1.Pressable style={[height && { height: height }, width && { width: width }, styles.row, style]} onPress={function () { return onRowPress(rowIndex); }}>
      {data.map(function (item, i) {
            var flex = flexArr && flexArr[i];
            var wth = widthArr && widthArr[i];
            return <cell_1.Cell key={i} data={item} width={wth} height={height} flex={flex} textStyle={textStyle} {...rest}/>;
        })}
    </react_native_1.Pressable>) : null;
};
exports.Row = Row;
var Rows = function (props) {
    var data = props.data, style = props.style, widthArr = props.widthArr, heightArr = props.heightArr, flexArr = props.flexArr, textStyle = props.textStyle, onRowPress = props.onRowPress, rest = __rest(props, ["data", "style", "widthArr", "heightArr", "flexArr", "textStyle", "onRowPress"]);
    var flex = flexArr ? (0, utils_1.sum)(flexArr) : 0;
    var width = widthArr ? (0, utils_1.sum)(widthArr) : 0;
    return data ? (<react_native_1.View style={[flex && { flex: flex }, width && { width: width }]}>
      {data.map(function (item, i) {
            var height = heightArr && heightArr[i];
            return (<exports.Row key={i} data={item} rowIndex={i} widthArr={widthArr} height={height} flexArr={flexArr} style={style} textStyle={textStyle} onRowPress={onRowPress} {...rest}/>);
        })}
    </react_native_1.View>) : null;
};
exports.Rows = Rows;
var styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: 'row',
        overflow: 'hidden'
    }
});
