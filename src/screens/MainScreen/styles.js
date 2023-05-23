import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
import fontsizes from '../../assets/fontsizes/fontsizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backGround,
  },
  screen: {
    // backgroundColor: colors.blue,
    flex: 0.4,
    borderBottomStartRadius: wp(7),
    borderBottomEndRadius: wp(7),
  },
  theme: {
    alignItems: 'flex-end',
    marginHorizontal: wp(2),
    marginBottom: wp(5),
  },
  themeIcon: {
    height: hp(5),
    width: wp(5),
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  value: {
    alignItems: 'flex-end',
    marginHorizontal: wp(4),
  },
  screenText: {
    fontSize: fontsizes.px_20,
    fontWeight: '600',
  },
  keyPad: {
    flex: 0.6,
    marginTop: hp(2),
    // marginBottom: hp(2),
    marginHorizontal: hp(2),
    // padding: wp(4),
  },
});

export default styles;
