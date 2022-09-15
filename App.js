/*
import * as React from 'react';
import {Button,Text, View } from 'react-native';
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
  <View>
  <Text>This is {route.params.name}'s profile</Text>
  <Text>This is {route.params. adresse}</Text>
  </View>)
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

*/
/*
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;*/
/*
import React, { useState } from "react";
import {View,Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";


  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },*/
/*
  const DATA = [

    {
  
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      img: "https://img.cuisineaz.com/660x660/2013/12/20/i18445-margherite.webp",
      prix: "10€",
      ingredients: "Tomate, Fromage",
      title: "Marguerite",

    },
  
    {
  
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      img: "https://cdn.pratico-pratiques.com/app/uploads/sites/3/2018/08/15142009/pizza-aux-fruits-de-mer.jpg",
      prix: "11€",
      ingredients: "Tomate, Fromage, fruits de mer",
      title: "Fruit de mer",
    },
  
    {
  
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      img: "https://assets.afcdn.com/recipe/20161130/7916_w1024h778c1cx2808cy1872.webp",
      prix: "15€",
      ingredients: "Tomate, Fromage, jambon",
      title: "Calzone",
    },

  ];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.row}>
        <Image style={styles.logo}  source={{ uri: item.img}}/>
        <View style={styles.col}>
           <Text style={[styles.title, textColor]}>Titre : {item.title}</Text>
           <Text style={[styles.title, textColor]}>Prix : {item.prix}</Text>
           <Text style={[styles.title, textColor]}>Ingrédients : {item.ingredients}</Text>
        </View>
     </View>
  </TouchableOpacity>
  
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const monItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={monItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  
  row: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    flex:0.5,
    flexDirection: "col",
    flexWrap: "wrap",
    marginHorizontal:10
  },
  logo: {
    flex:0.5,
    width: 150,
    height: 150,
  },
});

export default App;*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const tab = createBottomTabNavigator();
function AccueilScreen() {
  return (<View style={styles.container}>
    <Text>Welcome to REACT native</Text>
    <StatusBar style="auto" />
  </View>);
}

function UsersScreen() {
  return (<View style={styles.container}>
    <Text>Liste des utilisateurs</Text>
    <StatusBar style="auto" />
  </View>);
}

/*function ContactScreen() {
  return (<View style={styles.container}>
    <Text>Leave a message here</Text>
    <StatusBar style="auto" />
  </View>);
}*/
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
            if (route.name == "Home") { iconName = "home"; }
            else if (route.name == "Setting") { iconName = "settings"; }
            else if (route.name == "Users") { iconName = "people"; }
        

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
        <tab.Screen name="Users" component={UsersScreen} />
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
