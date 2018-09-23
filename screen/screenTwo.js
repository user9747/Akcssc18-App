import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image,ScrollView ,ListView,TouchableHighlight} from 'react-native';
import {RkButton,RkTheme,RkCard} from 'react-native-ui-kitten';
import {createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UtilStyles } from '../style/styles';
import {Container,Body,Header,Icon,Content} from 'native-base';




export default class ScreenTwo extends React.Component {


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
		let items = [{time:"8:30-9:30AM",event:"BreakFast",child1:"",child2:"",child3:""},
					{time:"9:30-10:30AM",event:"Breakaway Tracks",child1:"Track 1\u2022 You Can't Be What You Can't See",child2:"Track 2\u2022 Fast Growing Industry",child3:"Track 3\u2022 Insight Into Higher Studies In CS"},
					{time:"10:30-11:30AM",event:"Breakaway Tracks",child1:"Track 1\u2022 Women In IoT",child2:"Track 2\u2022 An Insight Into The Corporate World",child3:"Track 3\u2022 Insight Into Research"},
					{time:"11:30-1:00PM",event:"Panel Discussion",child1:"\u2022 Benefits Of IEEE CS",child2:"",child3:""},
					{time:"1:00-2:00PM",event:"Lunch",child1:"",child2:"",child3:""},
					{time:"2:00-3:00PM",event:"SB Presentation",child1:"",child2:"",child3:""},
					{time:"3:00-3:45PM",event:"Closing Ceremony",child1:"",child2:"",child3:""},
					{time:"3:45-4:00PM",event:"Feed Back Session",child1:"",child2:"",child3:""}]
					
		
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

