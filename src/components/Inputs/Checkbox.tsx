import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useStyles} from '../../hooks/useStyles';

type Option = {
  label: string;
  value: string;
};
interface CheckboxProps {
  options: Array<Option>;
  checkedValues: Array<string>;
  onChange: any;
  //onChange: React.Dispatch<React.SetStateAction<Array<string>>>;
}
const Checkbox = ({options, checkedValues, onChange}: CheckboxProps) => {
  const styles = useStyles();
  let updatedCheckedValues: Array<string> = [...checkedValues];
  console.log('checkedValues', checkedValues);
  return (
    <>
      <View style={styles.alarmSettingsRepeatOptionsContainer}>
        {options.map((option: Option) => {
          let isChecked = updatedCheckedValues.includes(option.value);
          return (
            <View style={styles.alarmSettingsRepeatOption}>
              <TouchableOpacity
                key={`${option.value}`}
                style={styles.checkboxContainer}
                onPress={() => {
                  console.log('\x1b[41m', 'option.value', option.value);
                  if (isChecked) {
                    updatedCheckedValues = updatedCheckedValues.filter(
                      (checkedValue) => checkedValue !== option.value,
                    );
                    console.log(
                      '\x1b[43m',
                      'if isChecked updatedCheckedValues',
                      updatedCheckedValues,
                    );
                    return onChange(updatedCheckedValues);
                  }

                  updatedCheckedValues.push(option.value);
                  onChange(updatedCheckedValues);
                }}
              >
                <Text>{option.label}</Text>
                <Text
                  style={isChecked ? styles.checkIcon : styles.activeCheckIcon}
                >
                  ✔️
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </>
  );
};
export default Checkbox;
