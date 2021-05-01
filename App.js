import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import defaultColors from "./data/defaultColors.json"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import oogwayExample from './components/oogway';

  let x = 2;
  let text1 = 'secondScreen';
  let text2 = 'testBad';
  if (x == 1){
    text1 = text2;
  }

  const allImages = [
    require('./assets/BruceLee.jpg'),
    require('./assets/frozen-anna-olaf.jpg'),
    require('./assets/masteroogway.jpg')
  ]

  function getImage(){
    var imageGetter = allImages[Math.floor(Math.random() * allImages.length)];
    return imageGetter;
  }

function firstScreen({ navigation: { navigate } }) {

  return (
    
    <View style = {[{flex: 1}, {flexDirection: 'column'}, {justifyContent: "space-around"}, {backgroundColor: "pink"}]}>
    <View>
      <Text style = {styles.question}>What did you just complete?</Text>
      </View>
      {<View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Assignment"
          color = "orange"
          onPress={() =>
          {
          navigate(text1)
          }
        }
          />
        </Text>
      </View>}
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Project"
          color = "red"
          onPress={() =>
          navigate('secondScreen')
        }
          />
        </Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Test"
          color = "green"
          onPress={() =>
          navigate('secondScreen')
        }
          />
        </Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Quiz"
          color = "blue"
          onPress={() =>
          navigate('secondScreen')
        }
          />
        </Text>
      </View>
      </View>
  );
}
//==================================================================================================
//=======================================
//============================================================================================

function secondScreen({ navigation: { navigate } }) {
  let x = 1;
  return (
    <View style = {[{flex: 1}, {flexDirection: 'column'}, {justifyContent: "space-around"}, {backgroundColor: 'darkred'}]}>
    <View>
      <Text style = {styles.question}>How do you think you did?</Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Good"
          color = "orange"
          onPress={() =>
          navigate('testGood')
        }
          />
        </Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Bad"
          onPress={() =>
          navigate('testBad')
        }
          />
        </Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Unsure but Nervous"
          color = "green"
          onPress={() =>
          navigate('testUnsure')
        }
          />
        </Text>
      </View>
      </View>
  );
}

//AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH 
//AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
function testBad({ navigation: { navigate } }) {
  return (
   <View style={[{flex: 1, justifyContent: "center", backgroundColor: 'green'}]}>
  
  <Image source={require('./assets/masteroogway.jpg')}
       style={{width: 400, height: 400}} />
       
  <Text style = {styles.nextNextBox}>"Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it's called the present."                                         -Master Oogway (Kung-Fu-Panda)

  </Text>
  <Button
          title = "Start Over"
          color = "white"
          onPress={() =>
          navigate('firstScreen')
        }
          />
  </View>
  );
}

//BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
//BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

function testGood({ navigation: { navigate } }) {
  return (
   <View style={[{flex: 1, justifyContent: "center", backgroundColor: 'black'}]}>
  
  <Image source={getImage()}
       style={{width: 400, height: 400}} />
       
  <Text style = {styles.nextNextBox}>“The successful warrior is the average man, with laser-like focus.”                 — Bruce Lee
  </Text>
  <Button
          title = "Start Over"
          color = "white"
          onPress={() =>
          navigate('firstScreen')
        }
          />
  </View>
  );
}
//GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH
//GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH
function testUnsure({ navigation: { navigate } }) {
  return (
   <View style={[{flex: 1, justifyContent: "center", backgroundColor: 'lightblue'}]}>
  
  <Image source={require('./assets/frozen-anna-olaf.jpg')}
       style={{width: 400, height: 400}} />
       
  <Text style = {styles.nextNextBox}>“ALL ONE CAN DO IS THE NEXT RIGHT THING.” -Ana (Frozen)
  </Text>
  <Button
          title = "Start Over"
          color = "white"
          onPress={() =>
          navigate('firstScreen')
        }
          />
  </View>
  );
}

//ALDFJLKASJFDL;ASJKDFFFFFFFFFFFFFFFFFFFFFFFFFFFD
//ASIL;DJFKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
function testUnsure1({ navigation: { navigate } }) {
  return (
   <View style={[{flex: 1, justifyContent: "center", backgroundColor: 'darkred'}]}>
  
  <Image source={require('./assets/socrates.jpg')}
       style={{width: 400, height: 400}} />
       
  <Text style = {styles.nextNextBox}>“The secret of change is to focus all of your energy, not on fighting the old, but on building the new.” — Socrates
  </Text>
  </View>
  );
}
//PROJECCCCCCCCCCCCCCCCCCCCTTTTTTTTTTTTTTTTTTTTT SCREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEN
//PROJECCCCCCCCCCCCCCCCCCCCTTTTTTTTTTTTTTTTTTTTT SCREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEN
function projectScreen({ navigation: { navigate } }) {
  return (
    <View style = {[{flex: 1}, {flexDirection: 'column'}, {justifyContent: "space-around"}, {backgroundColor: 'darkred'}]}>
    <View>
      <Text style = {styles.question}>Group or Individual?</Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Good"
          color = "orange"
          onPress={() =>
          navigate('testGood')
        }
          />
        </Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Bad"
          onPress={() =>
          navigate('testBad')
        }
          />
        </Text>
      </View>
      <View>
        <Text style = {styles.nextBox}>
          <Button
          title = "Unsure but Nervous"
          color = "green"
          onPress={() =>
          navigate('testUnsure')
        }
          />
        </Text>
      </View>
      </View>
  );
}
function ProfileScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>Friends: </Text>
      <Text>{route.params.names[0]}</Text>
      <Text>{route.params.names[1]}</Text>
      <Text>{route.params.names[2]}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
    const [backgroundColor, setBackgroundColor] = useState  ("pink")
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="firstScreen">
        <Stack.Screen name="testBad" component={testBad} options = {{headerShown: false}} />
        <Stack.Screen name="secondScreen" component={secondScreen} options = {{headerShown: false}}/>
        <Stack.Screen name="firstScreen" component={firstScreen} options = {{headerShown: false}} />
        <Stack.Screen name = "testGood" component = {testGood} options = {{headerShown: false}}/>
        <Stack.Screen name = "testUnsure" component = {testUnsure} options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  question: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    //flex: 1,
    //justifyContent: "flex-start",
    //alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: 20
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white"
  },
  nextBox: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    //justifyContent: 'center',
    //alignSelf: "stretch",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  nextNextBox: {
    //flexDirection: 'column',
    margin: 10,
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'flex-end',
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    fontSize: 20,
    fontWeight: 'bold'
  }



});
