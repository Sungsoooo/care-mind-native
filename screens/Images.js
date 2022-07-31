import React, {useState} from 'react';
import {View, StyleSheet, Image, ScrollView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';

export function Images({navigation}) {
  const [result, setResult] = useState(null);
  const getImages = async () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    const response = await launchImageLibrary(options);

    if (response.didCancel) {
      if (result == null) {
        navigation.navigate('Home');
      }
    } else if (response.error) {
      console.log(response.error);
    } else {
      setResult(response);
    }
  };

  const clearImages = () => {
    setResult(null);
  };

  return (
    <View>
      <ScrollView>
        {result?.assets &&
          result?.assets.map(({uri}) => (
            <View key={uri} style={s.image}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={{width: 200, height: 200}}
                source={{uri: uri}}
              />
            </View>
          ))}
        <View style={s.buttonWrapper}>
          <TouchableOpacity onPress={getImages}>
            <Text>사진 선택하기</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clearImages}>
            <Text>사진 초기화 하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
