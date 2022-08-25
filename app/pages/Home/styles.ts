import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
  contentContainer: {
    width: '100%',
    paddingVertical: 20,
    // paddingHorizontal: 16,
  },
  topNoticeContainer: {
    width: '90%',
    height: 40,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#333333',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 25,
    paddingHorizontal: 12,
  },
  iconImage: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  topNoticeText: {
    fontSize: 12,
  },
});
