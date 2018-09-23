import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image,ScrollView } from 'react-native';
import {RkButton,RkTheme,RkCard} from 'react-native-ui-kitten';
import {createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UtilStyles } from '../style/styles';



export default class TalksScreen extends React.Component {
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
			   <View style={styles.container}>
        <ScrollView
          automaticallyAdjustContentInsets
          style={ styles.screen}
        >
        <View style={{paddingVertical:25}}> 
			<RkCard >
  <Image rkCardImg style={styles.image}  source={require('../img/unnishanker.jpg')}/>
  <View rkCardContent>
    <Text style={styles.text}> SENIOR MANAGER</Text>
    <Text style={styles.text}>TECHNOLOGY EXCELLENCE GROUP,QUEST GLOBAL</Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"The Fast Growing Industry"</Text>
  </View>
</RkCard>
</View>


<View style={{paddingVertical:25}}> 
<RkCard>
   <Image rkCardImg style={styles.image}  source={require('../img/abhiram.jpeg')}/>
  <View rkCardContent>
    <Text style={styles.text}>SENIOR SOFTWARE DEVELOPER, AR VR </Text>
    <Text style={styles.text}>UST GLOBAL </Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"Unity(AR/VR)"</Text>
  </View>
</RkCard>
</View>


<View style={{paddingVertical:25}}> 
<RkCard>
   <Image rkCardImg style={styles.image}  source={require('../img/ArathiNair.jpg')}/>
  <View rkCardContent>
    <Text style={styles.text}> SENIOR AUTOMOTIVE EMBEDDED </Text>
    <Text style={styles.text}> SOFTWARE DEVELOPER -ADAS</Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"Mentoring"</Text>
  </View>
</RkCard>
</View>


<View style={{paddingVertical:25}}> 
<RkCard>
  <Image rkCardImg style={styles.image}  source={require('../img/Balaji.jpeg')}/>
  <View rkCardContent>
    <Text style={styles.text}> BLOCKCHAIN ARCHITECT , IBM</Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"BlockChain"</Text>
  </View>
</RkCard>
</View>


<View style={{paddingVertical:25}}> 
<RkCard>
  <Image rkCardImg style={styles.image}  source={require('../img/BSManoj.jpg')}/>
  <View rkCardContent>
    <Text style={styles.text}> HOD DEPT. OF AVIONICS , IIST</Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"Insight into Higher Studies in CS"</Text>
  </View>
</RkCard>
</View>


<View style={{paddingVertical:25}}> 
<RkCard>
  <Image rkCardImg style={styles.image}  source={require('../img/madhu.jpg')}/>
  <View rkCardContent>
    <Text style={styles.text}>PROFESSOR DEPT. OF COMPUTER SCIENCE </Text>
    <Text style={styles.text}>NIT CALICUT </Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"Insight into Research"</Text>
  </View>
</RkCard>
</View>


<View style={{paddingVertical:25}}> 
<RkCard>
  <Image rkCardImg style={styles.image}  source={require('../img/midhunmohan.jpg')}/>
  <View rkCardContent>
    <Text style={styles.text}>SECURITY ANALYST , E&Y</Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"Cyber Security & Forensics"</Text>
  </View>
</RkCard>
</View>


<View style={{paddingVertical:25}}> 
<RkCard>
  <Image rkCardImg style={styles.image}  source={require('../img/arjun.jpg')}/>
  <View rkCardContent>
    <Text style={styles.text}> DEVELOPER , TILTLABS</Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"Mixed Reality"</Text>
  </View>
</RkCard>
</View>


<View style={{paddingVertical:25}}> 
<RkCard>
  <Image rkCardImg style={styles.image}  source={require('../img/raghav.jpeg')}/>
  <View rkCardContent>
    <Text style={styles.text}> TECHNICAL ARCHITECT , IBM</Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"Artificial Intelligence"</Text>
  </View>
</RkCard>
</View>

<View style={{paddingVertical:25}}> 
<RkCard>
  <Image rkCardImg style={styles.image}  source={require('../img/suresh.jpg')}/>
  <View rkCardContent>
    <Text style={styles.text}> CTO , NEST GROUP</Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"An Insight Into The Corporate World"</Text>
  </View>
</RkCard>
</View>


<View style={{paddingVertical:25}}> 
<RkCard>
  <Image rkCardImg style={styles.image}  source={require('../img/minuphilip.jpg')}/>
  <View rkCardContent>
    <Text style={styles.text}> EMBEDDED ENGINEER , TACHLOG</Text>
  </View>
  <View rkCardContent>
    <Text style={styles.text2}>"Women in IOT"</Text>
  </View>
</RkCard>
</View>
</ScrollView>
</View>


			)
	}


}


let styles = StyleSheet.create({
  image:{
    height: 295,
  },
  screen: {
    backgroundColor: '#401c73',
    padding: 12,
  },
  text:{
    textAlign: 'center',
    fontStyle: 'italic' 
  },
  text2:{
    textAlign: 'center',
    fontWeight:'bold',
    fontStyle: 'italic'  
  },
  buttonIcon: {
    marginRight: 7,
    fontSize: 19.7,
  },
  footer: {
    marginHorizontal: 16,
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
