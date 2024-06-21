import React,{useState} from 'react';
import {View,StyleSheet, Text, TouchableOpacity, TextInput, Image} from 'react-native';

const Home=({navigation,route})=>{
	const [url,setUrl]=useState('')
	const changeScreen=(url)=>{
		navigation.navigate('Summary',{url:url})
	}
	return (
		<View style={styles.container}>
				<Image style={{height:200,width:200,resizeMode:'contain'}}source={require('../assets/home-logo.png')}/>
			<View style={styles.searchSection}>
				<TextInput style={styles.input} onChangeText={(text)=>setUrl(text)} value={url} placeholder='Enter url'/>
				<View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
				  <TouchableOpacity style={{backgroundColor:'#458588',width:120, height:40, borderRadius:50}} onPress={()=>changeScreen(url)}>
				    <Text style={{color:'#fff',textAlign:'center',paddingTop:5,fontSize:20, fontWeight:'bold'}}>Summarize</Text>
				  </TouchableOpacity>
				  <TouchableOpacity style={{backgroundColor:'#458588',width:110, height:40, borderRadius:50}} onPress={()=>{setUrl('')}}>
				    <Text style={{color:'#fff',textAlign:'center',paddingTop:5,fontSize:20, fontWeight:'bold'}}>clear</Text>
				  </TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#343d46',
    padding:20,
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  searchSection: {
    marginTop:'30%',
    marginBottom:20,
    width:'100%',
  },  
  input:{
    backgroundColor:'#fff',
    color:'#458588',
    height:40,
    borderRadius:50,
    textAlign:'center',
    fontSize:20,
    width:'100%',
    marginBottom:20,
    fontFamily:'SourceCodePro'
  },
})
export default Home;