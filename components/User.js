import React from 'react';
import {Text, View, Animated} from 'react-native';
import styles from '../styles/App.style.js';

const User = props => {
  return (
    <View style={styles.userWrapper}>
      <Animated.Image
        style={[
          styles.photo,
          {transform: [{translateY: props.userImageTransition}]},
          {opacity: props.userImageOpacity},
        ]}
        source={props.userPhotoPath}
      />
      <Animated.Text
        style={[
          styles.name,
          {transform: [{translateY: props.userNameTransition}]},
          {opacity: props.userNameOpacity},
        ]}>
        {props.userName}
      </Animated.Text>
      <Animated.View
        style={[
          styles.productsNumberWrapper,
          {transform: [{translateY: props.productsNumberTransition}]},
          {opacity: props.productsNumberOpacity},
        ]}>
        <Text style={styles.productsNumber}>{props.productsTexts}</Text>
      </Animated.View>
    </View>
  );
};

export default User;
