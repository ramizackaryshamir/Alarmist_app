import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useStyles} from './useTyles';

const Menu = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={styles.menuContainer}>
      <Pressable onPress={() => navigation.navigate('Screen Clock')}>
        <Text>Screen Clock</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Digital Clock')}>
        <Text>Digital Clock</Text>
      </Pressable>
      <Text>Alarm Drawer</Text>
      <Text>Settings</Text>
    </View>
  );
};

export default Menu;
