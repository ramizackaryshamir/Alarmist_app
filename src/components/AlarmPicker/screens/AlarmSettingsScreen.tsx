import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, TextInput, Text, Button} from 'react-native';
import TimePicker from '../components/TimePicker';
import AlarmSettingsSnoozeOption from '../components/AlarmSettingsSnoozeOption';
import {useStyles} from '../../../hooks/useStyles';

const AlarmSettingsScreen = ({navigation, route}: any) => {
  const styles = useStyles();

  const [alarmTime, setAlarmTime] = useState<any>(new Date());
  const [alarmRepeat, setAlarmRepeat] = useState<Array<string>>([]);
  const [alarmName, setAlarmName] = useState<string>('');
  const [alarmSound, setAlarmSound] = useState<string>('');
  const [isSnoozed, setIsSnoozed] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsSnoozed((prevState: boolean) => !prevState);
  };
  const handleAlarmTimeChange = (value: any) => {
    setAlarmTime(value);
  };
  const navigateToRepeatOptionsScreen = () => {
    navigation.navigate('Repeat', {
      onGoBack: (data: Array<string>) => {
        console.log(data);
        setAlarmRepeat(data);
      },
    });
  };

  useEffect(() => {
    const handleSaveAndGoBackToHomeScreen = () => {
      route.params.onGoBack({
        alarmTime: alarmTime.toString(),
        alarmRepeat,
        alarmName,
        alarmSound,
        isSnoozed,
      });
      navigation.goBack();
    };
    navigation.setOptions({
      headerRight: () => (
        <Button title="Save" onPress={handleSaveAndGoBackToHomeScreen} />
      ),
    });
  }, [
    navigation,
    alarmTime,
    alarmRepeat,
    alarmName,
    alarmSound,
    isSnoozed,
    route.params,
  ]);

  useEffect(() => {
    //Params 1a/2:
    //Screen receives params data from AlarmSettingsRepeatOptionsScreen and sets data to alarmSettinngs
    if (route.params?.alarmRepeat) {
      setAlarmRepeat(alarmRepeat);
    }
    //Params 1b/2:
    //Screen receives params data from AlarmSettingsSoundOptionsScreen and sets data to alarmSettinngs
    if (route.params?.alarmSound) {
      setAlarmSound(alarmSound);
    }

    console.group('\x1b[41m');
    console.log('Alarm Settings Screen');
    console.log('alarmTime:', alarmTime);
    console.log('alarmRepeat:', alarmRepeat);
    console.log('alarmName:', alarmName);
    console.log('alarmSound:', alarmSound);
    console.log('isSnoozed:', isSnoozed);
    console.groupEnd();
  }, [
    route.params?.alarmRepeat,
    route.params?.alarmSound,
    alarmRepeat,
    alarmSound,
    isSnoozed,
    alarmName,
    alarmTime,
  ]);

  return (
    <View style={styles.bottomSheetContainer}>
      <TimePicker alarmTime={alarmTime} onChange={handleAlarmTimeChange} />
      <View style={styles.bottomSheetSettings}>
        {/*TODO This Button Goes Forward*/}
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={navigateToRepeatOptionsScreen}
        >
          <Text style={styles.bottomSheetText}>Repeat</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.bottomSheetInput}
          placeholder="Alarm"
          onChangeText={(value) => setAlarmName(value)}
          value={alarmName}
        />
        {/*TODO This Button Goes Forward*/}
        <TouchableOpacity
          style={styles.bottomSheetButton}
          onPress={() => {
            navigation.navigate('Sound', {
              onGoBack: (data: string) => {
                setAlarmSound(data);
              },
            });
          }}
        >
          <Text style={styles.bottomSheetText}>Sound</Text>
        </TouchableOpacity>
        <AlarmSettingsSnoozeOption
          option={{label: 'Snooze', value: isSnoozed}}
          onToggle={toggleSwitch}
        />
      </View>
    </View>
  );
};

export default AlarmSettingsScreen;
