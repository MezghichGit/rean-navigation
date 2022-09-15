import { StatusBar } from 'expo-status-bar';
import {TextInput, ScrollView, Button, StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
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
    setTimeout(()=>getData(),100);
  },[])

    
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
      <Button title="Add" onPress= {()=>  navigation.navigate('AddUser')} />
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


function AddUserScreen() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [nom, setNom] = useState([]);
  const [prenom, setPrenom] = useState([]);

    function addUser() {
      let user = {
        email: email,
        password: password,
        nom: nom,
        prenom: prenom
       };

    createUser( user );
    
    // 
  }

   return (
    <ScrollView style={{ padding: "1em" }}>
      <Image
        style={styles.logo}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1337422975151255553/AkeDXoIV_400x400.png',
        }} />
      <Text>Subscription form:</Text>
      <View style={{
        marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems:
          'center'
      }}>
        <Text style={styles.label}>Prenom: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPrenom}
          value={prenom}
          placeholder="Prenom"
        />
      </View>
     <View style={{
        marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems:
          'center'
      }}>
         <Text style={styles.label}>Nom: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setNom}
          value={nom}
          placeholder="Name"
        />
      </View>
      <View style={{
        marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems:
          'center'
      }}>
        <Text style={styles.label}>Email: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
      </View>
      <View style={{
        marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems:
          'center'
      }}>
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          textContentType={password}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <Button title="Add" onPress={addUser} />
      </View>
    </ScrollView>
  );
};


function SettingScreen() {
  return (<View style={styles.container}>
    <Text>Vos parametres</Text>
    <StatusBar style="auto" />
  </View>);
}


const createUser = async (user) => {
  // Simple POST request with a JSON body using fetch
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  try{
  const response = await fetch('https://pharma.tunitransport.com/api/public/index.php/api/pharma/users', requestOptions);
  const data = await response.json();
    if(data){
      
    } 
  }
  catch(error){
    console.log("KO pour l'ajout");
  }
  finally{
    //console.log("Ok pour l'ajout");
    navigation.navigate('Home');
  }

};

export default function App() {

  return (
    <NavigationContainer>
      <tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "Home") { iconName = "home-outline"; }
            else if (route.name == "AddUser") { iconName = "people-outline"; }
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
        <tab.Screen name="AddUser" component={AddUserScreen} />
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
  logo: {
    height: 50,
    width: 50,
    margin: 'auto'
    },
    label: {
    flex: 0.1
    },
    input: {
      flex: 0.9,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      },
      button: {
      marginTop: 20
      },
      checkbox: {
      flexDirection: "row",
      alignItems: "center"
      },
      radio: {
      flexDirection: "row",
      alignItems: "center"
      }
      });
    
