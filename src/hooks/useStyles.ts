import {StyleSheet, useWindowDimensions} from 'react-native';

export const useStyles = () => {
  const {height, width} = useWindowDimensions();

  const styles = StyleSheet.create({
    homeScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      width: width,
      backgroundColor: '#F2D935',
    },
    digitalClockScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      width: width,
      backgroundColor: '#F2D935',
    },
    digitalClockContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: width > 500 ? '35%' : '80%',
      height: height > 600 ? '20%' : '50%',
      borderWidth: 8,
      borderColor: '#0A3A40',
      borderRadius: 15,
      backgroundColor: '#223240',
    },
    digitalClockRight: {
      flexDirection: 'row',
    },
    digitalClockText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 80,
      color: 'white',
    },
    screenClockScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: height,
      width: width,
      backgroundColor: 'blue',
    },
    screenClockContainer: {
      justifyContent: 'space-around',
      width: width,
      height: height > 500 ? '100%' : '100%',
      backgroundColor: '#F2D935',
    },
    screenClockTop: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    screenClockBottom: {
      alignItems: 'center',
    },
    screenClockText: {
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 100,
      color: 'white',
    },
    menuContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      position: 'relative',
      bottom: 0,
      paddingTop: 15,
      width: width,
      height: 55,
      backgroundColor: '#B2A137',
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: width > 500 ? '75%' : '60%',
      width: 300,
      height: 70,
      zIndex: 100,
      backgroundColor: 'blue',
    },
    modalOptionButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginRight: 10,
      marginLeft: 10,
    },
    toggleModalButton: {
      position: 'relative',
      top: 20,
      width: 20,
      height: 20,
      backgroundColor: 'green',
    },
  });
  return styles;
};
