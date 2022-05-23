import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
export declare type Data = JSX.Element | React.ReactText[][] | React.ReactText[] | React.ReactText;
export interface DefaultProps<DataType extends Data> {
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    borderStyle?: ViewStyle;
    rowIndex?: number;
    onRowPress?: (rowIndex: number) => void;
    data: DataType;
    width?: React.ReactText;
    height?: React.ReactText;
    flex?: number;
    heightArr?: number[];
    widthArr?: number[];
    flexArr?: number[];
}
export declare type TableComponent = React.FC<{
    style?: StyleProp<ViewStyle>;
    borderStyle?: ViewStyle;
}>;
export declare type TableProps = React.PropsWithChildren<{
    style?: StyleProp<ViewStyle>;
    borderStyle?: ViewStyle;
}>;
