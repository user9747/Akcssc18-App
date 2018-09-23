import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image } from 'react-native';
import img2 from './index.png';
import {RkButton,RkTheme} from 'react-native-ui-kitten';
import {createStackNavigator} from 'react-navigation';



import AppDrawNav from './screen/drawNavigator'
import WelcomeScreen from './screen/welcomeScreen'




export default class App extends React.Component {

 
  render() {
    return (
      <AppNav />
    );
  }
}

const AppNav = new createStackNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  AppDrawNav:{
    screen: AppDrawNav,
    navigationOptions :{
    header: null
  }

  }
})




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#401c73'
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
