import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';

const tab = createBottomTabNavigator();

function AccueilScreen() {
  
  const[users,setUsers]=useState([]);
  /// Chargement des data

  useEffect(() => {
    getData();
  },[])

  const getData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>{
      //console.log(data);
      setUsers(data);
    })
  }

  
  return (<View style={styles.container}>
    {console.log(users)}
    <Text>Welcome to REACT native</Text>
    <StatusBar style="auto" />
    <View style={styles.container}>
      {users.map(_user=><Text key={_user.id}>{_user.name}***{_user.email}</Text>)}
    </View>
  </View>);
}

function SettingScreen() {
  return (<View style={styles.container}>
    <Text>Vos paramètres</Text>
    <StatusBar style="auto" />
  </View>);
}

export default function App() {

  return (
    <NavigationContainer>
      <tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "Home") { iconName = "home-outline"; }
            else if (route.name == "Setting") { iconName = "settings-outline"; }
        

            return (
              <Ionicons
                name={iconName}
                color={'red'}
                size={size}
              />
            );
          },
        })}
      >
        <tab.Screen name="Home" component={AccueilScreen} />
        <tab.Screen name="Setting" component={SettingScreen} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

