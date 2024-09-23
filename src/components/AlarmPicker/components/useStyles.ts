import {StyleSheet} from 'react-native';

export const useStyles = () => {
  const styles = StyleSheet.create({
    bottomSheetRowView: {
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
  });
  return styles;
};