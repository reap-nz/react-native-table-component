import React, { ReactText } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { sum } from '../utils';
import { Cell } from './cell';
import { DefaultProps } from './types';

export const Row: React.FC<DefaultProps<ReactText[]>> = props => {
  const { data, style, widthArr, height, flexArr, textStyle, rowProps, ...rest } = props;
  let width = widthArr ? sum(widthArr) : 0;
  return data ? (
    <Pressable style={[height && { height }, width && { width }, styles.row, style]} {...rowProps}>
      {data.map((item, i) => {
        const flex = flexArr && flexArr[i];
        const wth = widthArr && widthArr[i];
        return <Cell key={i} data={item} width={wth} height={height} flex={flex} textStyle={textStyle} {...rest} />;
      })}
    </Pressable>
  ) : null;
};

export const Rows: React.FC<DefaultProps<ReactText[][]>> = props => {
  const { data, style, widthArr, heightArr, flexArr, textStyle, rowProps, ...rest } = props;
  const flex = flexArr ? sum(flexArr) : 0;
  const width = widthArr ? sum(widthArr) : 0;

  return data ? (
    <View style={[flex && { flex }, width && { width }]}>
      {data.map((item, i) => {
        const height = heightArr && heightArr[i];
        return (
          <Row
            key={i}
            data={item}
            widthArr={widthArr}
            height={height}
            flexArr={flexArr}
            style={style}
            textStyle={textStyle}
            rowProps={rowProps}
            {...rest}
          />
        );
      })}
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    overflow: 'hidden'
  }
});
