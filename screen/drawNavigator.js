import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image } from 'react-native';
import {RkButton,RkTheme} from 'react-native-ui-kitten';
import {createDrawerNavigator,createStackNavigator,DrawerItems} from 'react-navigation';
import HomeScreen from './homeScreen';
import ExpoScreen from './expoScreen';
import TalksScreen from './talksScreen';
import TabScreen from './tabScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Container,Body,Header,Icon,Content} from 'native-base';

const StackHome = createStackNavigator({
	TabNav : {
		screen : HomeScreen
	}
})
const StackTab = createStackNavigator({
	TabNav : {
		screen : TabScreen
	}
})
const StackExpo = createStackNavigator({
	TabNav : {screen : ExpoScreen}
}) 
const StackTalks = createStackNavigator({
	TabNav : {screen : TalksScreen}
})  

const CustomDrawer = (props) =>(
	<Container>
	<Header style={{height: 200,backgroundColor: '#401c73'}} >
	<Body>
		<Image  source={require('../index.png')}/>
	</Body>
	</Header>
	<Content>
		<DrawerItems styl{...props}/>
	</Content>
	</Container>
	)
const AppDrawNav = createDrawerNavigator({
	Schedule:{screen:StackTab},	
	Expo:{screen : StackExpo},
	Talks:{screen: StackTalks},
	// Venue:{screen : StackHome},
},{
	initailRoute:'Schedule',
	contentComponent:CustomDrawer,
	drawerOpenRoute:'DrawerOpen',
	drawerCloseRoute:'DrawerClose',
	drawerToggleRoute:'DrawerToggle'
})


styles = StyleSheet.create({
	drawerImage:{
		paddingTop: 50,
		height:110,
		width:110,
		borderRadius:80,
		justifyContent: 'center',
	},
	menu:{
		justifyContent: 'center',
		textAlign: 'center'
	}
})

export default AppDrawNav