import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {checkMultiple, PERMISSIONS, request} from 'react-native-permissions';

export function Home({navigation}) {
  if (Platform.OS === 'ios') {
    checkMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY]).then(
      statuses => {
        if (statuses[PERMISSIONS.IOS.CAMERA] !== 'granted') {
          request(PERMISSIONS.IOS.CAMERA);
        }

        if (statuses[PERMISSIONS.IOS.PHOTO_LIBRARY]) {
          request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        }
      },
    );
  } else {
    checkMultiple([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    ]).then(statuses => {
      if (statuses[PERMISSIONS.ANDROID.CAMERA] !== 'granted') {
        request(PERMISSIONS.ANDROID.CAMERA);
      }

      if (statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]) {
        request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
      }
    });
  }

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
