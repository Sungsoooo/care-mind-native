import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {CameraView} from './screens/CameraView';
import {Home} from './screens/Home';
import {Images} from './screens/Images';

const RootStack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            title: '',
            gestureEnabled: true,
            headerBackTitleVisible: false,
          })}>
          <RootStack.Screen
            name="Home"
            component={Home}
            options={{headerLeft: () => null}}
          />
          <RootStack.Screen name="CameraView" component={CameraView} />
          <RootStack.Screen name="Images" component={Images} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
