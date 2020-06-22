import React from 'react';
import {Text, View, Image, Animated} from 'react-native';
import styles from '../styles/App.style.js';

const Menu = props => {
  return (
    <Animated.View style={[styles.menu, {transform: [{translateY: props.menuTransition}]}]}>
      <View style={styles.menuElement}>
        <Image source={require('../assets/images/wearables.png')} />
        <Text style={[styles.menuElementText, styles.blackColor]}>Wearables</Text>
      </View>
      <View style={styles.menuElement}>
        <Image source={require('../assets/images/profile.png')} />
        <Text style={styles.menuElementText}>Profile</Text>
      </View>
      <View style={styles.menuElement}>
        <Image source={require('../assets/images/help.png')} />
        <Text style={styles.menuElementText}>Help</Text>
      </View>
    </Animated.View>
  );
};

export default Menu;
