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
      width: width,
      height: height,
      backgroundColor: '#00FFFF',
    },
    homeScreenAddAlarmButton: {
      bottom: 300,
      width: 30,
      height: 30,
      backgroundColor: '#E4EBE6',
    },
    alarmsContainer: {
      justifyContent: 'center',
      rowGap: 5,
      width: width < 500 ? width - 30 : width - 180,
    },
    alarmContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'nowrap',
      borderColor: 'black',
      borderWidth: 3,
      borderRadius: 5,
      backgroundColor: 'pink',
    },
    alarmContainerLeft: {
      width: '50%',
    },
    alarmContainerLeftTop: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      columnGap: 5,
      paddingBottom: 3,
      paddingLeft: 10,
    },
    alarmTextLeftTop: {
      color: 'white',
      fontSize: 15,
    },
    alarmContainerLeftBottom: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingLeft: 10,
      columnGap: 5,
    },
    alarmTextLeftBottom: {
      color: 'white',
      fontSize: 10,
    },
    alarmContainerRight: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: 5,
      width: '50%',
      backgroundColor: 'yellow',
    },
    alarmTextRight: {
      color: 'white',
      fontSize: 40,
      letterSpacing: 3,
      lineHeight: 50,
    },
    digitalClockScreenContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
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
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: 'blue',
    },
    screenClockContainer: {
      flexDirection: width > 500 ? 'row' : 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: '#F2D935',
    },
    screenClockText: {
      fontSize: 300,
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
    settingsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 100,
    },
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: width > 500 ? '30%' : '60%',
      left: -100,
      width: 300,
      height: 70,
      zIndex: 100,
      borderRadius: 20,
      backgroundColor: 'rgba(28, 18, 255, 1)',
    },
    modalOptionButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginRight: 10,
      marginLeft: 10,
    },
    toggleModalButton: {
      justifyContent: 'center',
      alignItems: 'center',
      top: 20,
      width: 40,
      height: 30,
      borderRadius: 5,
      backgroundColor: '#1AAB8A',
      padding: 2,
      cursor: 'pointer',
    },
    toggleModalButtonText: {
      color: '#fff',
      fontSize: 10,
      fontVariant: ['small-caps'],
    },
    bottomSheetContainer: {
      alignItems: 'center',
      width: width,
      height: height,
      backgroundColor: 'red',
    },
    bottomSheetSettings: {
      width: width,
      borderWidth: 5,
      borderColor: 'green',
      borderRadius: 5,
    },
    bottomSheetButton: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 50,
      paddingLeft: 5,
      paddingRight: 5,
      borderWidth: 1,
      color: 'white',
      backgroundColor: 'orange',
    },
    bottomSheetInput: {
      height: 50,
      paddingLeft: 5,
      paddingRight: 5,
      color: 'white',
    },
    bottomSheetSwitchView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 50,
      paddingLeft: 5,
      paddingRight: 5,
    },
    bottomSheetText: {
      color: 'white',
    },
    alarmSettingsRepeatOptionsPageContainer: {
      alignItems: 'center',
      width: width,
      height: height,
      paddingTop: 20,
      backgroundColor: 'green',
    },
    alarmSettingsRepeatOptionsContainer: {
      width: width - 30,
      marginTop: 50,
      borderColor: 'black',
      borderWidth: 5,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    alarmSettingsRepeatOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 40,
      paddingRight: 10,
      paddingLeft: 10,
      marginBottom: 5,
      backgroundColor: 'green',
    },
    alarmSettingsSoundPageContainer: {
      alignItems: 'center',
      width: width,
      height: height,
      paddingTop: 20,
      backgroundColor: '#FF00FF',
    },
    alarmSettingsSoundFlatListContainer: {
      width: width - 20,
      marginTop: 50,
      borderColor: 'black',
      borderWidth: 5,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    checkboxContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
    checkIcon: {
      color: 'black',
      fontSize: 20,
    },
    activeCheckIcon: {
      color: 'transparent',
      fontSize: 20,
    },
    alarmPickerButton: {
      position: 'relative',
      bottom: 320,
      left: 120,
      width: 20,
      height: 20,
      backgroundColor: 'red',
    },
  });
  return styles;
};
