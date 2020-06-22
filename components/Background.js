import React from 'react';
import {View, Animated} from 'react-native';
import styles from '../styles/App.style.js';

const Background = props => {
  return (
    <View style={styles.backgroundWrapper}>
      <Animated.Image
        style={[styles.lightBlue2Bg, {transform: [{translateY: props.backGroundElement1}]}]}
        source={require('../assets/images/Light_Blue_BG_2.png')}
      />
      <Animated.Image
        style={[styles.lightBlueBg, {transform: [{translateY: props.backGroundElement2}]}]}
        source={require('../assets/images/Light_Blue_BG.png')}
      />
      <Animated.Image
        style={[styles.greenBg, {transform: [{translateY: props.backGroundElement2}]}]}
        source={require('../assets/images/Green_BG.png')}
      />
      <Animated.Image
        style={[styles.pinkBg, {transform: [{translateY: props.backGroundElement2}]}]}
        source={require('../assets/images/Pink_BG.png')}
      />
      <Animated.Image
        style={[styles.darkestBlueBg, {transform: [{translateY: props.backGroundElement3}]}]}
        source={require('../assets/images/Darkest_Blue_BG.png')}
      />
      <Animated.Image
        style={[styles.rectangleBg, {transform: [{translateY: props.backGroundElement4}]}]}
        source={require('../assets/images/Rectangle.png')}
      />
    </View>
  );
};

export default Background;
