import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';

const tab = createBottomTabNavigator();

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={{ backgroundColor }}>
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={styles.picture}
        source={{ uri: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg' }}
      />
      <View>
        <Text style={{ textColor }}>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.nom}</Text>
        <Text>{item.prenom}</Text>
        <Text>{item.password}</Text>
      </View>
    </View>
  </TouchableOpacity>
);


function AccueilScreen() {

  const [users, setUsers] = useState([]);
  const [fetchedState, setFetchedState] = useState(null);
  /// Chargement des data

 /* useEffect(() => {
    getData();
  }, [])*/

  useEffect(() => {
    setFetchedState('loading')
    setTimeout(()=>getData(),2000);
  },[])


  /*const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        setUsers(data);
      })
  }*/

  const getData=async()=>{
    //const response=await fetch('https://jsonplaceholder.typicode.com/users');
    //const data=await response.json();
    //setUsers(data)
    try{
      //const response=await fetch('https://jsonplaceholder.typicode.com/users');

      const response=await fetch('https://pharma.tunitransport.com/api/public/index.php/api/pharma/users');
      const data=await response.json();
      //console.log(data['hydra:member'])
      setUsers(data['hydra:member'])
    }
    catch(error){
      //console.log(error)
      console.log("Vérifier votre api...");
    }
    finally{
      setFetchedState(null);
    }


  }


  const renderItem = ({ item }) => {

    //const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    //const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        // onPress={() => navigation.navigate('UserDetails', {userId: item.id})}
        backgroundColor='#f9c2ff'
        textColor='blue'
      />
    )

  };


  return (

    <SafeAreaView style={styles.container}>
      <Text>Our Users:</Text>
      {
      fetchedState ?  <ActivityIndicator size="large" color="#0000ff" /> :
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      }
  </SafeAreaView>);
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

