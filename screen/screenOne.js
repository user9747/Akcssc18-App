import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image,ScrollView ,ListView,TouchableHighlight} from 'react-native';
import {RkButton,RkTheme,RkCard} from 'react-native-ui-kitten';
import {createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UtilStyles } from '../style/styles';
import {Container,Body,Header,Icon,Content} from 'native-base';



export default class ScreenOne extends React.Component {


	constructor(props) {
	  super(props);
	  let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});
	  this.state = {
	  	itemDataSource: ds
	  }
	  this.renderRow=this.renderRow.bind(this);
	  this.pressRow=this.pressRow.bind(this);
	}
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

	getItems(){
		let items = [{time:"9:00-10:00AM",event:"Registration And Ice Breaker",child1:"",child2:"",child3:""},
					{time:"10:00-10:20AM",event:"Sessions On Future Tech(Intro To AKCSSC)",child1:"\u2022 How Technology Is Going To Impact Todays Age",child2:"",child3:""},
					{time:"10:20-10:30AM",event:"Break Away Time With Working Tea",child1:"",child2:"",child3:""},
					{time:"10:30-11:30AM",event:"Future Technology Track",child1:"Track 1\u2022 Mixed Reality ",
																				   child2:"Track 2\u2022 AI & IBM WATSON ",
																				   child3:"Track 3\u2022 Unity(AR/VR) "},
					{time:"11:30-12:30PM",event:"Future Technology Track",child1:"Track 1\u2022 Industrial IoT  ",
																		  child2:"Track 2\u2022 Cyber Security & Forensics ",
																	      child3:"Track 3\u2022 BlockChain "},
					{time:"12:30-1:30PM",event:"Lunch",child1:"",child2:"",child3:""},
					{time:"1:30-6:45PM",event:"Expo",child1:"",child2:"",child3:""},
					{time:"6:45-7:30PM",event:"Dinner,Robo Dance",child1:"",child2:"",child3:""}
					]
		
			this.setState({
				itemDataSource: this.state.itemDataSource.cloneWithRows(items)
		    })
		

		
	}
	componentWillMount(){
		this.getItems();
	}
	componentDidMount(){
		this.getItems();
	}
	pressRow(item){
		console.log(item);
	}
	renderRow(item){
		return(
			
			<View style={{paddingVertical:10 }}>
			<RkCard  >
			  <View rkCardHeader style={styles.header}>
			    <Text style={{fontWeight: '900' }} >{item.time}</Text>
			  </View>
			  <View rkCardContent style={styles.content}>
			   <Text style={{fontSize: 20,fontWeight: '900'}} >{ item.event}</Text>
			   <Text style={{fontSize: 15}} >{ item.child1}</Text>
			   <Text style={{fontSize: 15}} >{ item.child2}</Text>
			   <Text style={{fontSize: 15}} >{ item.child3}</Text>
			  </View>
			</RkCard>		
			</View>
			

			);
	}


	render(){
		return(
		          
			    
	
				  <ListView   dataSource={this.state.itemDataSource}
			    	renderRow={this.renderRow}/>
			

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
  footer: {
    
    
  },
  header:{
  	backgroundColor: '#dbcdf4'
  },
  content:{
  	backgroundColor: '#eee5ff'
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

