import React, { useState } from "react";
import { SafeAreaView, Button, Text, View, Image, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DATA = [

  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    firstName: 'Dimitri',
    lastName: 'CERRATOPS',
    description: "User 1 : Lorem ipsum",

  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    firstName: 'Sarah',
    lastName: 'FISTOL',
    description: "User 2 : Lorem ipsum",
  },
  {

    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    firstName: 'Hervé',
    lastName: 'LOCIRAPTOR',
    description: "User 3 : Lorem ipsum",
  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={{ flexDirection: 'row' }}>
      {/*<Image
          style={styles.picture}
          source={{ uri: item.img}}
        />*/}
      <View>
        <Text style={[styles.title, textColor]}>{item.firstName}</Text>
        <Text style={[styles.title, textColor]}>{item.lastName}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane', adresse: 'Paris' })
        }
      />
      <Button
        title="Our Users"
        onPress={() =>
          navigation.navigate('User')
        }
      />
    </SafeAreaView>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is {route.params.name}'s profile</Text>
      <Text>This is {route.params.adresse}</Text>
    </SafeAreaView>)
    ;
};

const UserScreen = ({ navigation }) => {

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {

    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => navigation.navigate('UserDetails', { userId: item.id })}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    )

  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Our Users:</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const UserDetails = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>User: {route.params.userId}</Text>
    </SafeAreaView>
  );
}

const Nav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ name: 'Jane', adresse: 'Paris' }}
      />
      <Tab.Screen name="User" component={UserScreen} options={{ title: 'Our Users' }} />
     
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#f9c2ff" />


      <Stack.Navigator>
        <Stack.Screen name="Nav" component={Nav} options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="UserDetails" component={UserDetails} options={{ user: 1 }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 24,
  },
  picture: {
    height: 100,
    width: 100,
    marginRight: 16
  },
});

export default App;