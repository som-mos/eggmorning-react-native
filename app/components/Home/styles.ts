import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ffffff',
    width: '100%',
    height: 'auto',
    alignSelf: 'center',
    padding: 20,
    marginTop: 25,
    marginBottom: 50,
    // borderRadius: 32,
    // shadowColor: '#171717',
    // shadowOffset: {width: 0, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 15,
  },
  imageContainer: {
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: 360,
    position: 'relative',
  },
  hotelImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 20,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: '#000000',
    //     shadowOpacity: 0.25,
    //     shadowOffset: {width: 0, height: 4},
    //     shadowRadius: 32,
    //   },
    // }),
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    bottom: 10,
  },
  bottomButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  descContainer: {
    width: '100%',
    flexDirection: 'column',
    paddingLeft: 5,
    paddingBottom: 10,
  },
  titleTextContainer: {
    // paddingTop: 12,
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
  subText: {
    fontSize: 13,
    letterSpacing: 0.15,
    fontWeight: '600',
    color: '#171C2E',
  },
});
