import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image,ScrollView } from 'react-native';
import {RkButton,RkTheme,RkCard} from 'react-native-ui-kitten';
import {createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UtilStyles } from '../style/styles';



export default class ExpoScreen extends React.Component {
	static navigationOptions = ({navigation}) => {
		return{
			headerTintColor: '#401c73',
    headerStyle: {
      backgroundColor: '#401c73'
    },
			headerLeft: (
				<View style = {{ padding: 7 }}>
				<Ionicons name="md-menu" size={38} color="#f6f8fa" onPress={() => navigation.openDrawer() } />
				</View>
				)
		
		}
	}
	render(){
		return(
  <View style={styles.container}>
        <ScrollView
          automaticallyAdjustContentInsets
          style={ styles.screen}
        >
	<View style={{paddingVertical:25}} >		
<RkCard  >
  
   <Image rkCardImg style={styles.image} source={require('../img/expo/3dprint.jpg')}/>
  <View rkCardFooter style={styles.footer}>
    <Text style={styles.text}>Room : Cellar 4</Text>
  </View>
</RkCard>
</View>

<View style={{paddingVertical:25}}> 
<RkCard>
   <Image  rkCardImg style={styles.image} source={require('../img/expo/alexa.jpg')}/>
  
  <View rkCardFooter>
    <Text style={styles.text}>Room : EEE305</Text>
  </View>
</RkCard>
</View>

<View style={{paddingVertical:25}}>
<RkCard>
  <Image rkCardImg style={styles.image} source={require('../img/expo/ar.jpg')}/>
  
  <View rkCardFooter>
    <Text style={styles.text}>Room : EEE308</Text>
  </View>
</RkCard>
</View>

<View style={{paddingVertical:25}}>
<RkCard>
  <Image rkCardImg style={styles.image} source={require('../img/expo/blockchain.jpg')}/>
  
  <View rkCardFooter>
    <Text style={styles.text}>Room : EEE306</Text>
  </View>
</RkCard>
</View>

<View style={{paddingVertical:25}}>
<RkCard>
  <Image rkCardImg style={styles.image} source={require('../img/expo/drone.jpg')}/>
  
  <View rkCardFooter>
    <Text style={styles.text}>Room : Cellar </Text>
  </View>
</RkCard>
</View>

<View style={{paddingVertical:25}}>
<RkCard>
  <Image rkCardImg style={styles.image} source={require('../img/expo/vr.jpg')}/>
  
  <View rkCardFooter>
    <Text style={styles.text}>Room : EEE206</Text>
  </View>
</RkCard>
</View>

<View style={{paddingVertical:25}}>
<RkCard>
  <Image rkCardImg style={styles.image} source={require('../img/expo/game.jpg')}/>
  
  <View rkCardFooter>
    <Text style={styles.text}>Room : EEE205</Text>
  </View>
</RkCard>
</View>

<View style={{paddingVertical:25}}>
<RkCard>
  <Image rkCardImg style={styles.image} source={require('../img/expo/cyber.jpg')}/>
  
  <View rkCardFooter>
    <Text style={styles.text}>Room : EEE307</Text>
  </View>
</RkCard>
</View>

<View style={{paddingVertical:25}}>
<RkCard>
  <Image rkCardImg style={styles.image} source={require('../img/expo/hover.jpg')}/>
  
  <View rkCardFooter>
    <Text style={styles.text}>Room : Cellar 3</Text>
  </View>
</RkCard>
</View>

</ScrollView>
</View>


			)
	}


}


let styles = StyleSheet.create({
  screen: {
    backgroundColor: '#401c73',
    padding: 12,
  },
  buttonIcon: {
    marginRight: 7,
    fontSize: 19.7,
  },
  text:{
    fontWeight:'bold',
    fontSize: 20,
    fontStyle: 'italic'  
  },
  footer: {

    
  },
  header:{
    opacity: 1,
  	
  },
  content:{

  },
  card:{
    borderWidth: 1,
    borderRadius: 50,
  },
  image:{
    height: 330,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 17,
  },
  dot: {
    fontSize: 6.5,
    color: '#0000008e',
    marginLeft: 2.5,
    marginVertical: 10,
  },
  floating: {
    width: 56,
    height: 56,
    position: 'absolute',
    zIndex: 200,
    right: 16,
    top: 173,
  },
  footerButtons: {
    flexDirection: 'row',
  },
  overlay: {
    justifyContent: 'flex-end',
    paddingVertical: 23,
    paddingHorizontal: 16,
  },
});
