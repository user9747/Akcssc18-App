import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image } from 'react-native';
import splash from '../splashscreen1.jpg';
import img2 from '../index.png';
import {RkButton,RkTheme} from 'react-native-ui-kitten';
import {createStackNavigator} from 'react-navigation';




export default class WelcomeScreen extends React.Component {
  static navigationOptions ={
    header: null
  }

  render() {
    return (
      <View
  style={styles.container}
>
  <ImageBackground 
    source={splash}
    style={styles.image}
  >
      
      <Image source={img2}   />

      <View style={{padding:30}} >
        <RkButton
   style={{backgroundColor: '#4c247a',borderRadius: 20,height: 40}}
   contentStyle={{color: 'white'}} onPress={() => this.props.navigation.navigate('Schedule')} >Go!</RkButton>
      </View>
  </ImageBackground>
</View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#261a4e'
  },
  image: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
   

    
  },
  paragraph: {
    textAlign: 'center',
  },
});