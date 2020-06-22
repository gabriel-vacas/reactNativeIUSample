import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback, Animated} from 'react-native';
import styles from '../styles/App.style.js';

const Card = props => {
  return (
    <View style={[styles.cardWrapper]}>
      <Animated.View style={[styles.card, {transform: [{translateY: props.cardAnimation}]}]}>
        <View style={[styles.test]}>
          {props.image && (
            <Animated.Image
              style={[styles.cardImage, props.imageStyle, {transform: [{scale: props.cardImageAnimation}]}]}
              source={props.image}
            />
          )}
          {props.icon && (
            <View style={[styles.cardIconWrapper]}>
              <Image style={[styles.cardIconBackground]} source={require('../assets/images/Oval.png')} />
              <Image style={[styles.cardIcon]} source={props.icon} />
            </View>
          )}
          {props.cardTitleAnimation && (
            <Animated.Text
              style={[
                styles.cardTitle,
                {transform: [{translateY: props.cardTitleAnimation}]},
                {opacity: props.cardTitleOpacity},
              ]}>
              {props.title}
            </Animated.Text>
          )}
          {props.cardTextAnimation && (
            <Animated.Text
              style={[
                styles.cardText,
                {transform: [{translateY: props.cardTextAnimation}]},
                {opacity: props.cardTextOpacity},
              ]}>
              {props.text}
            </Animated.Text>
          )}
        </View>
        {props.buttonText && (
          <TouchableWithoutFeedback onPress={props.onPress}>
            <Animated.View
              style={[
                styles.cardButton,
                {transform: [{translateY: props.cardButtonAnimation}]},
                {opacity: props.cardButtonOpacity},
              ]}>
              <Text style={[styles.cardButtonText]}>{props.buttonText}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        )}
      </Animated.View>
    </View>
  );
};

export default Card;
