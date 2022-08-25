import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    width: '90%',
    height: 400,
    alignSelf: 'center',
    padding: 20,
    marginTop: 25,
    marginBottom: 50,
    borderRadius: 32,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  imageContainer: {
    width: '100%',
    maxWidth: '100%',
    maxHeight: 300,
  },
  hotelImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 32,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 32,
      },
    }),
  },
  descContainer: {
    width: '100%',
    paddingLeft: 9,
    paddingRight: 9,
    flex: 1,
    alignItems: 'flex-start',
  },
  titleTextContainer: {
    paddingTop: 12,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#171C2E',
  },
  userNameText: {
    color: '#7A7A7A',
  },
  subTextTopContainer: {
    width: '100%',
    overflow: 'hidden',
    marginTop: 12,
    alignItems: 'flex-start',
  },
  subTextBottomContainer: {
    width: '100%',
    overflow: 'hidden',
    marginTop: 8,
    alignItems: 'flex-start',
  },
  subText: {
    lineHeight: 25,
    fontSize: 13,
    letterSpacing: 0.15,
    fontWeight: '600',
    color: '#171C2E',
  },
  aniContainer: {
    width: '100%',
    flex: 0.1,
    position: 'relative',
  },
  animationText: {
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 25,
    letterSpacing: 0.15,
    paddingBottom: 5,
  },
  fingerImage: {
    width: 24,
    height: 23,
  },
});
