import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {useStyles} from '../hooks/useStyles';
import DigitalClockSvg from '../assets/digital-clock-icon.svg';
const Menu = ({navigation}) => {
  const styles = useStyles();
  return (
    <View style={styles.menuContainer}>
      <Pressable onPress={() => navigation.navigate('Screen Clock')}>
        <Text>Screen Clock</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Digital Clock')}>
        <Text>Digital Clock</Text>
        {/*<Image source={DigitalClockSvg} style={styles.menuLogoImage} />*/}
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text>Alarm Drawer</Text>
      </Pressable>
      <Text>Settings</Text>
    </View>
  );
};

export default Menu;
