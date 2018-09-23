import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image,ScrollView } from 'react-native';
import {RkButton,RkTheme,RkCard} from 'react-native-ui-kitten';
import {createMaterialTopTabNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UtilStyles } from '../style/styles';
import ScreenOne from './screenOne';
import ScreenTwo from './screenTwo';
import ScreenThree from './screenThree';

export default class TabScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return{
      headerTintColor: '#401c73',
    headerStyle: {
      backgroundColor: '#401c73'
    },
      headerLeft: (
        <View style = {{ padding: 7 }}>
        <Ionicons name="md-menu" size={35} color="#f6f8fa" onPress={() => navigation.openDrawer() } />
        </View>
        )
    
    }
  }
  render(){
    return(
        <TabNavigator/>
      )

  }
}
const TabNavigator = createMaterialTopTabNavigator({
  ScreenOne:{
    screen:ScreenOne,
    navigationOptions:{
      tabBarLabel:'DAY1',
      tabBarPosition :'bottom',
      tabBarOptions: {
        style: {
            backgroundColor: '#401c73',
        },
      }

    }
  },
  ScreenTwo:{
    screen:ScreenTwo,
    navigationOptions:{
      tabBarLabel:'DAY2',
      tabBarPosition :'bottom',
      tabBarOptions: {
        style: {
            backgroundColor: '#401c73',
        },
      }
    }
  },
  ScreenThree:{
    screen:ScreenThree,
    navigationOptions:{
      tabBarLabel:'VENUES',
      tabBarPosition :'bottom',
      tabBarOptions: {
        style: {
            backgroundColor: '#401c73',
        },
      }
    }
  }
})


let styles = StyleSheet.create({
 
});
