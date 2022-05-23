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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWrapper = exports.Table = void 0;
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var Table = function (props) {
    function renderChildren(_props) {
        return React.Children.map(_props.children, function (child) {
            return React.isValidElement(child)
                ? React.cloneElement(child, _props.borderStyle && child.type !== 'ScrollView' ? { borderStyle: _props.borderStyle } : {})
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
        return React.Children.map(_props.children, function (child) {
            return React.isValidElement(child)
                ? React.cloneElement(child, _props.borderStyle ? { borderStyle: _props.borderStyle } : {})
                : null;
        });
    }
    var style = props.style;
    return <react_native_1.View style={style}>{renderChildren(props)}</react_native_1.View>;
};
exports.TableWrapper = TableWrapper;
