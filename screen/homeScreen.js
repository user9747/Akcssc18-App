import React from 'react';
import { StyleSheet, Text, View ,ImageBackground,Image,ScrollView ,ListView,TouchableHighlight} from 'react-native';
import {RkButton,RkTheme,RkCard} from 'react-native-ui-kitten';
import {createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { UtilStyles } from '../style/styles';
import {Container,Body,Header,Icon,Content} from 'native-base';

import * as firebase from 'firebase';
var config = {
    
    apiKey: "AIzaSyA3O2MdLTIi7jsS8hlQzzUtukJJYkxqJ7s",
    authDomain: "akcssc18.firebaseapp.com",
    databaseURL: "https://akcssc18.firebaseio.com",
    projectId: "akcssc18",
    storageBucket: "akcssc18.appspot.com",
    

};

const firebaseApp = firebase.initializeApp(config);



export default class HomeScreen extends React.Component {


	constructor(props) {
	  super(props);
	  let ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});
	  this.state = {
	  	itemDataSource: ds
	  }
	  this.itemsRef=firebaseApp.database().ref().child('items');
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

	getItems(itemsRef){
		// let items = [{title:"hello"},{title:"hey"}]
		itemsRef.on('value',snap => {
			let items = [];
			snap.forEach((child)=>{
				items.push({
					title:child.val().room,
					_key:child.key
				})
			})
			this.setState({
				itemDataSource: this.state.itemDataSource.cloneWithRows(items)
		    })
		})

		
	}
	componentWillMount(){
		this.getItems(this.itemsRef);
	}
	componentDidMount(){
		this.getItems(this.itemsRef);
	}
	pressRow(item){
		console.log(item);
	}
	renderRow(item){
		return(
			
			<View style={{paddingVertical:10 }}>
			<RkCard  >
			  <View rkCardHeader style={styles.header}>
			    <Text style={{fontWeight: '900' }} >{ item._key}</Text>
			  </View>
			  <View rkCardContent style={styles.content}>
			   <Text style={{fontSize: 30}} >{ item.title}</Text>
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
  	backgroundColor: '#dbcdf4',
  	justifyContent: 'center', 
	alignItems: 'center'
  },
  content:{
  	backgroundColor: '#eee5ff',
  	justifyContent: 'center', 
	alignItems: 'center'
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

