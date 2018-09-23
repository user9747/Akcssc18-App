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
		let items = [{track:"Track 1",venue:"EEE PG SEMINAR HALL"},
					{track:"Track 2",venue:"EEE SEMINAR HALL"},
					{track:"Track 3",venue:"CETAA HALL"}
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
			    <Text style={{fontSize: 18,fontWeight: '600' }} >{item.track}</Text>
			  </View>
			  <View rkCardContent style={styles.content}>
			   <Text style={{fontSize: 24,fontWeight: '900'}} >{ item.venue}</Text>
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

