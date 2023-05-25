import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import fontsizes from '../../assets/fontsizes/fontsizes';

const CustomButton = ({title, onPress, backgroundColor, color, width}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: backgroundColor ? backgroundColor : null,
        width: width ? width : wp(22),
      }}
      onPress={onPress}>
      <Text style={{...styles.text, color: color ? color : null}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    height: hp(9.5),

    marginBottom: hp(2),
    borderRadius: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fontsizes.px_16,
    fontWeight: '600',
  },
});
