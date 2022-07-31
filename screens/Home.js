import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

export function Home({navigation}) {
  return (
    <View style={s.homeContainer}>
      <TouchableOpacity
        style={s.button}
        onPress={() => {
          navigation.navigate('CameraView');
        }}>
        <Text style={s.buttonText}>카메라 촬영하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={s.button}
        onPress={() => {
          navigation.navigate('Images');
        }}>
        <Text style={s.buttonText}>사진첩 확인하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  homeContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 280,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
  },
});
