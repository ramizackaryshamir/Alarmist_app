import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useStyles} from '../../../hooks/useStyles';
import Checkbox from '../../Inputs/Checkbox';

const AlarmSettingsRepeatOptionScreen = ({navigation, route}) => {
  const [selectedDays, setSelectedDays] = useState<[]>([]);
  console.log('selectedDays', selectedDays);
  const styles = useStyles();
  return (
    <View style={styles.alarmSettingsRepeatOptionsPageContainer}>
      <Checkbox
        options={[
          {label: 'Every Monday', value: 'Monday'},
          {label: 'Every Tuesday', value: 'Tuesday'},
          {label: 'Every Wednesday', value: 'Wednesday'},
          {label: 'Every Thursday', value: 'Thursday'},
          {label: 'Every Friday', value: 'Friday'},
          {label: 'Every Saturday', value: 'Saturday'},
          {label: 'Every Sunday', value: 'Sunday'},
        ]}
        checkedValues={selectedDays}
        onChange={setSelectedDays}
      />
      <TouchableOpacity
        style={{width: 20, height: 20, backgroundColor: 'blue'}}
        onPress={() => {
          route.params.onGoBack(
            //instead of passing back selectedDays, the data is serialized to be able to use state persistence and for screen components to have the right cointract for implementing deep linking.
            {selectedDays: selectedDays},
          );
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default AlarmSettingsRepeatOptionScreen;