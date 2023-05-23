import {
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Row from '../../row/Row';
import styles from './styles';
import icons from '../../assets/icons/icons';
import colors from '../../assets/colors/colors';
import CustomButton from '../../components/Button/Button';

const STYLES = ['default', 'light-content', 'dark-content'];

const MainScreen = () => {
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [themeIcon, setThemeIcon] = useState(true);
  const [number, setNumber] = useState(5);
  // const [statusBarTransition, setStatusBarTransition] = useState(
  //   TRANSITIONS[0],
  // );

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
            {number}
          </Text>
        </View>
      </View>
      <View style={styles.keyPad}>
        <Row>
          <CustomButton
            title={'Ac'}
            onPress={() => {}}
            backgroundColor={
              themeIcon ? colors.acButtonDark : colors.acButtonLight
            }
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'('}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={')'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'/'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
        <Row>
          <CustomButton
            title={'7'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'8'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'9'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'X'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
        <Row>
          <CustomButton
            title={'4'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'5'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'6'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'-'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
        <Row>
          <CustomButton
            title={'1'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'2'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'3'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'+'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
        <Row>
          <CustomButton
            title={'0'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'.'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'back'}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
          <CustomButton
            title={'='}
            onPress={() => {}}
            backgroundColor={themeIcon ? colors.buttonDark : colors.buttonLight}
            color={themeIcon ? colors.lightBackGround : colors.darkBackGround}
          />
        </Row>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;
