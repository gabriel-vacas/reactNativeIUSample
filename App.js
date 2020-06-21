/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState, Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Easing,
  Dimensions,
} from 'react-native';
import styles from './styles/App.style.js';

const height = Dimensions.get('window').height;

const App: () => React$Node = () => {
  const [isUp, setIsUp] = useState(false);
  const backGroundElement1 = useRef(new Animated.Value(0)).current;
  const backGroundElement2 = useRef(new Animated.Value(0)).current;
  const backGroundElement3 = useRef(new Animated.Value(0)).current;
  const backGroundElement4 = useRef(new Animated.Value(0)).current;

  const userImageTransition = useRef(new Animated.Value(0)).current;
  const userNameTransition = useRef(new Animated.Value(0)).current;
  const productsNumberTransition = useRef(new Animated.Value(0)).current;

  const userImageOpacity = useRef(new Animated.Value(0)).current;
  const userNameOpacity = useRef(new Animated.Value(0)).current;
  const productsNumberOpacity = useRef(new Animated.Value(0)).current;

  const menuTransition = useRef(new Animated.Value(0)).current;

  const easing = Easing.bezier(0.85, 0, 0.15, 1);

  const timingAnimation = (value, toValue, duration, easingParam, delay = 0) => {
    return Animated.timing(value, {
      toValue,
      duration,
      easing: easingParam,
      delay,
      useNativeDriver: true,
    });
  };

  const test1 = Animated.parallel([
    timingAnimation(backGroundElement1, -150, 700, easing),
    timingAnimation(backGroundElement2, -150, 800, easing),
    timingAnimation(backGroundElement3, -50, 900, easing),
    timingAnimation(backGroundElement4, 410 - height, 800, easing),

    timingAnimation(userImageTransition, -100, 800, easing),
    timingAnimation(userNameTransition, -120, 900, easing),
    timingAnimation(productsNumberTransition, -130, 1000, easing),

    timingAnimation(userImageOpacity, 1, 800, easing),
    timingAnimation(userNameOpacity, 1, 900, easing),
    timingAnimation(productsNumberOpacity, 1, 1000, easing),
  ]);

  const test2 = Animated.parallel([
    timingAnimation(backGroundElement1, 0, 800, easing),
    timingAnimation(backGroundElement2, 0, 700, easing),
    timingAnimation(backGroundElement3, 0, 600, easing),
    timingAnimation(backGroundElement4, 0, 700, easing),

    timingAnimation(userImageTransition, 0, 1000, easing),
    timingAnimation(userNameTransition, 0, 900, easing),
    timingAnimation(productsNumberTransition, 0, 800, easing),

    timingAnimation(userImageOpacity, 0, 1000, easing),
    timingAnimation(userNameOpacity, 0, 900, easing),
    timingAnimation(productsNumberOpacity, 0, 800, easing),
  ]);

  const onPress = () => {
    if (isUp) {
      Animated.sequence([test1, timingAnimation(menuTransition, -120, 700, easing)]).start();
      setIsUp(false);
    } else {
      Animated.sequence([timingAnimation(menuTransition, 0, 700, easing), test2]).start();
      setIsUp(true);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Fragment>
        <SafeAreaView style={styles.topStatusBar} />
        <SafeAreaView style={styles.bottomStatusBar}>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.body}>
              <View style={styles.main}>
                <Animated.Image
                  style={[
                    styles.photo,
                    {transform: [{translateY: userImageTransition}]},
                    {opacity: userImageOpacity},
                  ]}
                  source={require('./assets/images/hian-oliveira-n_L_ppO4QtY.png')}
                />
                <Animated.Text
                  style={[
                    styles.name,
                    {transform: [{translateY: userNameTransition}]},
                    {opacity: userNameOpacity},
                  ]}>
                  Lottie Curtis
                </Animated.Text>
                <Animated.View
                  style={[
                    styles.productsNumberWrapper,
                    {transform: [{translateY: productsNumberTransition}]},
                    {opacity: productsNumberOpacity},
                  ]}>
                  <Text style={styles.productsNumber}>You have 3 Products</Text>
                </Animated.View>

                <View style={[styles.card]}>
                  <View style={[styles.test]}>
                    <Image
                      style={[styles.cardImage]}
                      source={require('./assets/images/rock_1.png')}
                    />
                    <Text style={[styles.cardTitle]}>Moonstone Keychain</Text>
                    <Text style={[styles.cardText]}>
                      Choosing the Best Gemstone for Your Necklace and Jewelry
                    </Text>
                  </View>
                  <TouchableWithoutFeedback onPress={onPress}>
                    <View style={[styles.cardButton]}>
                      <Text style={[styles.cardButtonText]}>View</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>

                <Animated.View style={[styles.menu, {transform: [{translateY: menuTransition}]}]}>
                  <View style={styles.menuElement}>
                    <Image source={require('./assets/images/wearables.png')} />
                    <Text style={[styles.menuElementText, styles.blackColor]}>Wearables</Text>
                  </View>
                  <View style={styles.menuElement}>
                    <Image source={require('./assets/images/profile.png')} />
                    <Text style={styles.menuElementText}>Profile</Text>
                  </View>
                  <View style={styles.menuElement}>
                    <Image source={require('./assets/images/help.png')} />
                    <Text style={styles.menuElementText}>Help</Text>
                  </View>
                </Animated.View>
              </View>
              <Animated.Image
                style={[styles.lightBlue2Bg, {transform: [{translateY: backGroundElement1}]}]}
                source={require('./assets/images/Light_Blue_BG_2.png')}
              />
              <Animated.Image
                style={[styles.lightBlueBg, {transform: [{translateY: backGroundElement2}]}]}
                source={require('./assets/images/Light_Blue_BG.png')}
              />
              <Animated.Image
                style={[styles.greenBg, {transform: [{translateY: backGroundElement2}]}]}
                source={require('./assets/images/Green_BG.png')}
              />
              <Animated.Image
                style={[styles.pinkBg, {transform: [{translateY: backGroundElement2}]}]}
                source={require('./assets/images/Pink_BG.png')}
              />
              <Animated.Image
                style={[styles.darkestBlueBg, {transform: [{translateY: backGroundElement3}]}]}
                source={require('./assets/images/Darkest_Blue_BG.png')}
              />
              <Animated.Image
                style={[styles.rectangleBg, {transform: [{translateY: backGroundElement4}]}]}
                source={require('./assets/images/Rectangle.png')}
              />
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </Fragment>
    </>
  );
};

export default App;
