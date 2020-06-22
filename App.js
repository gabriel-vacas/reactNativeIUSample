/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, Fragment} from 'react';
import {SafeAreaView, StatusBar, View, Animated, Easing, Dimensions} from 'react-native';

import User from './components/User.js';
import Carousel from './components/Carousel/Carousel.js';
import Menu from './components/Menu.js';
import Background from './components/Background.js';

import styles from './styles/App.style.js';

const height = Dimensions.get('window').height;

const App: () => React$Node = () => {
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

  const showContentAnimation = Animated.parallel([
    timingAnimation(backGroundElement1, -150, 700, easing),
    timingAnimation(backGroundElement2, -150, 800, easing),
    timingAnimation(backGroundElement3, -50, 900, easing),
    timingAnimation(backGroundElement4, 410 - height, 800, easing),

    timingAnimation(userImageTransition, -100, 800, easing),
    timingAnimation(userNameTransition, -120, 900, easing),
    timingAnimation(productsNumberTransition, -125, 1000, easing),

    timingAnimation(userImageOpacity, 1, 800, easing),
    timingAnimation(userNameOpacity, 1, 900, easing),
    timingAnimation(productsNumberOpacity, 1, 1000, easing),
  ]);

  const hideContentAnimation = Animated.parallel([
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

  const showElements = () => {
    Animated.sequence([
      showContentAnimation,
      timingAnimation(menuTransition, -100, 700, easing),
    ]).start();
  };
  const hideElements = () => {
    Animated.parallel([
      timingAnimation(menuTransition, 0, 700, easing),
      hideContentAnimation,
    ]).start();
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Fragment>
        <SafeAreaView style={styles.topStatusBar} />
        <SafeAreaView style={styles.bottomStatusBar}>
          <View style={styles.body}>
            <View style={styles.main}>
              <User
                userPhotoPath={require('./assets/images/hian-oliveira-n_L_ppO4QtY.png')}
                userName={'Lottie Curtis'}
                productsTexts={'You have 3 Products'}
                userImageTransition={userImageTransition}
                userImageOpacity={userImageOpacity}
                userNameTransition={userNameTransition}
                userNameOpacity={userNameOpacity}
                productsNumberTransition={productsNumberTransition}
                productsNumberOpacity={productsNumberOpacity}
              />
              <Carousel
                timingAnimation={timingAnimation}
                showElements={showElements}
                hideElements={hideElements}
              />
              <Menu menuTransition={menuTransition} />
            </View>
            <Background
              backGroundElement1={backGroundElement1}
              backGroundElement2={backGroundElement2}
              backGroundElement3={backGroundElement3}
              backGroundElement4={backGroundElement4}
            />
          </View>
        </SafeAreaView>
      </Fragment>
    </>
  );
};

export default App;
