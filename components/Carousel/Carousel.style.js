import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '72%',
  },
  scrollView: {
    width: '400%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    paddingTop: 80,
  },
  bullets: {
    position: 'absolute',
    width: '100%',
    bottom: -130,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  bullet: {
    paddingHorizontal: 5,
    fontSize: 35,
    color: '#303371',
  },
  cardImageStyle: {
    top: -140,
  },
  defaulElement: {
    width: '25%',
  },
});
