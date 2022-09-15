import * as React from 'react';
import {Button,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' , adresse:'Paris'})
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return (
  <view>
  <Text>This is {route.params.name}'s profile</Text>
  <Text>This is {route.params. adresse}</Text>
  </view>)
  ;
};


const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Me' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;

