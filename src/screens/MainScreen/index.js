import {
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Row from '../../row/Row';
import styles from './styles';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import CustomButton from '../../components/Button/Button';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const STYLES = ['default', 'light-content', 'dark-content'];
const MainScreen = () => {
  const [initialState, setInitialState] = useState({
    currentValue: '0',
    operator: null,
    previousValue: null,
  });
  const [themeIcon, setThemeIcon] = useState(true);
  const handleNumber = value => {
    if (initialState.currentValue.length < 6) {
      if (initialState.currentValue === '0') {
        setInitialState(prevState => ({
          ...prevState,
          currentValue: `${value}`,
        }));
      } else {
        setInitialState(prevState => ({
          ...prevState,
          currentValue: `${initialState.currentValue}${value}`,
        }));
      }
    } else {
      console.log('reached limit');
    }
  };

  const calculator = (type, value) => {
    switch (type) {
      case 'number':
        handleNumber(value);
        break;
      case 'clear':
        setInitialState({
          currentValue: '0',
          operator: null,
          previousValue: null,
        });
        break;
      case 'posneg':
        setInitialState({
          currentValue: `${parseFloat(initialState.currentValue) * -1}`,
        });
        break;
      case 'percentage':
        setInitialState({
          currentValue: `${parseFloat(initialState.currentValue) * 0.01}`,
        });
        break;
      case 'operator':
        setInitialState({
          currentValue: '0',
          operator: value,
          previousValue: initialState.currentValue,
        });
        break;
      case 'equal':
        handleEqual(initialState);
        break;
      default:
        return initialState;
    }
  };

  const handleEqual = state => {
    const {currentValue, previousValue, operator} = state;
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);
    const resetState = {operator: null, previousValue: null};

    switch (operator) {
      case '+':
        setInitialState({
          currentValue: `${previous + current}`,
          ...resetState,
        });
        break;
      case '-':
        setInitialState({
          currentValue: `${previous - current}`,
          ...resetState,
        });
        break;
      case '*':
        setInitialState({
          currentValue: `${previous * current}`,
          ...resetState,
        });
        break;
      case '/':
        setInitialState({
          currentValue: `${previous / current}`,
          ...resetState,
        });
        break;
      default:
        return state;
    }
  };

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: themeIcon
          ? colors.darkBackGround
          : colors.lightBackGround,
      }}>
      <StatusBar
        backgroundColor={themeIcon ? colors.darkScreen : colors.lightScreen}
        barStyle={themeIcon ? STYLES[1] : STYLES[2]}
      />
      <View
        style={{
          ...styles.screen,
          backgroundColor: themeIcon ? colors.darkScreen : colors.lightScreen,
        }}>
        <View style={styles.theme}>
          <TouchableOpacity
            style={styles.themeIcon}
            onPress={() => {
              setThemeIcon(prev => !prev);
            }}>
            <Image
              source={themeIcon ? icons.sun : icons.moon}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.value}>
          <Text
            style={{
              ...styles.screenText,
              color: themeIcon ? colors.lightBackGround : colors.darkBackGround,
            }}>
            {parseFloat(initialState.currentValue).toLocaleString()}
          </Text>
        </View>
      </View>
      <View style={styles.keyPad}>
        <Row>
          <CustomButton
            title={'Ac'}
            onPress={() => calculator('clear')}
            backgroundColor={
              themeIcon ? colors.acButtonDark : colors.acButtonLight
            }
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'+/-'}
            onPress={() => calculator('posneg')}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'%'}
            onPress={() => calculator('percentage')}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'/'}
            onPress={() => calculator('operator', '/')}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
        <Row>
          <CustomButton
            title={'7'}
            onPress={() => calculator('number', 7)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'8'}
            onPress={() => calculator('number', 8)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'9'}
            onPress={() => calculator('number', 9)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'X'}
            onPress={() => calculator('operator', '*')}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
        <Row>
          <CustomButton
            title={'4'}
            onPress={() => calculator('number', 4)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'5'}
            onPress={() => calculator('number', 5)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'6'}
            onPress={() => calculator('number', 6)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'-'}
            onPress={() => calculator('operator', '-')}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
        <Row>
          <CustomButton
            title={'1'}
            onPress={() => calculator('number', 1)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'2'}
            onPress={() => calculator('number', 2)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'3'}
            onPress={() => calculator('number', 3)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'+'}
            onPress={() => calculator('operator', '+')}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
        <Row>
          <CustomButton
            title={'0'}
            onPress={() => calculator('number', 0)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'.'}
            onPress={() => calculator('number', '.', initialState)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'='}
            onPress={() => calculator('equal', '=')}
            width={widthPercentageToDP(44.8)}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
