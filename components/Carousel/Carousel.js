import React, {useRef, useState} from 'react';
import {Text, View, Animated, Dimensions, Easing} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

import Card from '../Card.js';
import styles from './Carousel.style.js';

const width = Dimensions.get('window').width;

const Carousel = props => {
  const cardAnimations = {
    2: {
      cardAnimation: useRef(new Animated.Value(0)).current,
      cardImageAnimation: useRef(new Animated.Value(0)).current,
      cardTitleAnimation: useRef(new Animated.Value(0)).current,
      cardTextAnimation: useRef(new Animated.Value(0)).current,
      cardButtonAnimation: useRef(new Animated.Value(0)).current,
      cardTitleOpacity: useRef(new Animated.Value(0)).current,
      cardTextOpacity: useRef(new Animated.Value(0)).current,
      cardButtonOpacity: useRef(new Animated.Value(0)).current,
    },
    3: {
      cardAnimation: useRef(new Animated.Value(0)).current,
      cardImageAnimation: useRef(new Animated.Value(0)).current,
      cardTitleAnimation: useRef(new Animated.Value(0)).current,
      cardTextAnimation: useRef(new Animated.Value(0)).current,
      cardButtonAnimation: useRef(new Animated.Value(0)).current,
      cardTitleOpacity: useRef(new Animated.Value(0)).current,
      cardTextOpacity: useRef(new Animated.Value(0)).current,
      cardButtonOpacity: useRef(new Animated.Value(0)).current,
    },
    4: {
      cardAnimation: useRef(new Animated.Value(0)).current,
      cardImageAnimation: useRef(new Animated.Value(0)).current,
      cardTitleAnimation: useRef(new Animated.Value(0)).current,
      cardTextAnimation: useRef(new Animated.Value(0)).current,
      cardButtonAnimation: useRef(new Animated.Value(0)).current,
      cardTitleOpacity: useRef(new Animated.Value(0)).current,
      cardTextOpacity: useRef(new Animated.Value(0)).current,
      cardButtonOpacity: useRef(new Animated.Value(0)).current,
    },
  };

  const scrollAnimation = useRef(new Animated.Value(0)).current;
  const bulletsAnimation = useRef(new Animated.Value(0)).current;

  const [currentSlide, setCurrentSlide] = useState(1);
  const [slideBreakpoint, setSlideBreakpoint] = useState(1);
  const easing = Easing.bezier(0.85, 0, 0.15, 1);

  const gestureConfig = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 100,
  };

  const swipeRight = () => {
    if (currentSlide > 1) {
      props.timingAnimation(scrollAnimation, -(slideBreakpoint - width), 1000, easing).start(() => {
        setSlideBreakpoint(slideBreakpoint - width);
        setCurrentSlide(currentSlide - 1);
      });
      if (currentSlide > 2) {
        showCardInfo(currentSlide - 1).start();
      }
      hideCardInfo(currentSlide).start();
      if (currentSlide === 2) {
        props.hideElements();
        props.timingAnimation(bulletsAnimation, 0, 800, easing).start();
      }
    }
  };
  const swipeLeft = () => {
    if (currentSlide < 4) {
      props.timingAnimation(scrollAnimation, -(width * currentSlide), 1000, easing).start(() => {
        setSlideBreakpoint(width * currentSlide);
        setCurrentSlide(currentSlide + 1);
      });
      showCardInfo(currentSlide + 1).start();
      if (currentSlide > 1) {
        hideCardInfo(currentSlide).start();
      }
      if (currentSlide === 1) {
        props.showElements();
        props.timingAnimation(bulletsAnimation, -150, 800, easing).start();
      }
    }
  };

  const showCardInfo = currentSlideParam => {
    return Animated.parallel([
      props.timingAnimation(cardAnimations[currentSlideParam].cardAnimation, -40, 1000, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardImageAnimation, 1, 1000, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardTitleAnimation, -50, 700, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardTextAnimation, -50, 800, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardButtonAnimation, -50, 900, easing),

      props.timingAnimation(cardAnimations[currentSlideParam].cardTitleOpacity, 1, 800, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardTextOpacity, 1, 900, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardButtonOpacity, 1, 1000, easing),
    ]);
  };
  const hideCardInfo = currentSlideParam => {
    return Animated.parallel([
      props.timingAnimation(cardAnimations[currentSlideParam].cardAnimation, 0, 1000, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardImageAnimation, 0, 1000, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardTitleAnimation, 0, 1000, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardTextAnimation, 0, 900, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardButtonAnimation, 0, 800, easing),

      props.timingAnimation(cardAnimations[currentSlideParam].cardTitleOpacity, 0, 1000, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardTextOpacity, 0, 900, easing),
      props.timingAnimation(cardAnimations[currentSlideParam].cardButtonOpacity, 0, 800, easing),
    ]);
  };

  let bullets = [];
  for (let i = 2; i <= 4; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: currentSlide === i ? 1 : 0.5,
        }}>
        &bull;
      </Text>,
    );
  }

  return (
    <View style={[styles.container]}>
      <GestureRecognizer onSwipeRight={swipeRight} onSwipeLeft={swipeLeft} config={gestureConfig}>
        <Animated.View style={[styles.scrollView, {transform: [{translateX: scrollAnimation}]}]}>
          {/* Empty element at the beginnig */}
          <View style={[styles.defaulElement]} />
          <Card
            image={require('../../assets/images/rock_1.png')}
            title="Moonstone Keychain"
            text="Choosing the Best Gemstone for Your Necklace and Jewelry"
            buttonText="View"
            cardAnimation={cardAnimations[2].cardAnimation}
            cardImageAnimation={cardAnimations[2].cardImageAnimation}
            cardTitleAnimation={cardAnimations[2].cardTitleAnimation}
            cardTextAnimation={cardAnimations[2].cardTextAnimation}
            cardButtonAnimation={cardAnimations[2].cardButtonAnimation}
            cardTitleOpacity={cardAnimations[2].cardTitleOpacity}
            cardTextOpacity={cardAnimations[2].cardTextOpacity}
            cardButtonOpacity={cardAnimations[2].cardButtonOpacity}
          />
          <Card
            image={require('../../assets/images/rock_2.png')}
            imageStyle={[styles.cardImageStyle]}
            title="Sapphire Keychain"
            text="Choosing the Best Gemstone for Your Necklace and Jewelry"
            buttonText="View"
            cardAnimation={cardAnimations[3].cardAnimation}
            cardImageAnimation={cardAnimations[3].cardImageAnimation}
            cardTitleAnimation={cardAnimations[3].cardTitleAnimation}
            cardTextAnimation={cardAnimations[3].cardTextAnimation}
            cardButtonAnimation={cardAnimations[3].cardButtonAnimation}
            cardTitleOpacity={cardAnimations[3].cardTitleOpacity}
            cardTextOpacity={cardAnimations[3].cardTextOpacity}
            cardButtonOpacity={cardAnimations[3].cardButtonOpacity}
          />
          <Card
            icon={require('../../assets/images/plus.png')}
            title="Add a Wearable"
            text="Don’t See One You Like? Choosing the Best Gemstone for Your Necklace and Jewelry"
            cardAnimation={cardAnimations[4].cardAnimation}
            cardTitleAnimation={cardAnimations[4].cardTitleAnimation}
            cardTextAnimation={cardAnimations[4].cardTextAnimation}
            cardTitleOpacity={cardAnimations[4].cardTitleOpacity}
            cardTextOpacity={cardAnimations[4].cardTextOpacity}
          />
        </Animated.View>
      </GestureRecognizer>
      <Animated.View style={[styles.bullets, {transform: [{translateY: bulletsAnimation}]}]}>{bullets}</Animated.View>
    </View>
  );
};

export default Carousel;
