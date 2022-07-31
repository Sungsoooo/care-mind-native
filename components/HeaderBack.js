import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BackIcon from '../assets/images/BackIcon.svg';

export default function HeaderBack({navigation}) {
  return (
    <TouchableOpacity
      style={s.BackIcon}
      onPress={() => {
        print(123);
        navigation.pop();
      }}>
      <BackIcon />
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  BackIcon: {
    width: 40,
    height: 40,
    marginLeft: 24,
    marginTop: 14,
  },
});
