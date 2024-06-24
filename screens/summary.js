import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, ScrollView,TextInput, View, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import Markdown from 'react-native-markdown-display';


const Summary=({navigation,route})=> {

  const url = route.params.url;
  console.log(url)
  const [loading,setLoading]=useState(false);
  const [summary,setSumm]=useState('');
  const [title,setTitle]=useState('');
  const [thumbnail,setThumb]=useState('');
  useEffect(()=>
  {
    const summarize=()=>{
      console.log(url);
      setLoading(true);
      fetch(`https://aware-jaynell-broski-dae2c0b2.koyeb.app/summarize?url=${url}`)
      .then((resp)=>resp.json())
      .then((resp)=>{
        setSumm(resp.summary);
        navigation.setOptions({title:resp.title});
        setThumb(resp.thumbnail);
    })
      .finally(()=>{
        setLoading(false);
    });
      console.log(summary);
      console.log(thumbnail)
    };
  summarize();
  },[url]);

  return (
    <View style={styles.container}>
      {loading?(
        <View style={{height:"100%",justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size={100}/>
          <Text style={{color:'#458588',textShadowColor:'#458588',textShadowRadius:2,fontSize:20,fontFamily:'monospace',fontWeight:'bold'}}>summarizing the video...</Text>
        </View>
        ):(
        <ScrollView style={{marginTop:20,marginLeft:0, marginRight:0}} showsVerticalScrollIndicator={false}>
          <Image source={{uri:thumbnail}} style={styles.thumbnail}/>
          <Markdown style={styles}>
            {summary}
          </Markdown>
        </ScrollView>
        )
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#343d46',
    padding:10,
  },
  thumbnail:{
    width:'100%',
    height:200,
    borderRadius:20,
    marginBottom:20,
  },
  body:{
    color:'#fff',
    lineHeight:20,
    fontSize:15,
    fontFamily:'monospace'
  },
  heading2:{
    color:'#458588',
    fontWeight:'bold',
    textShadowColor:'#458588',
    textShadowRadius:3,
    marginTop:20,
    lineHeight:30,
    fontFamily:'monospace'
  },
  strong:{
    color:'#8ec07c',
    textShadowColor:'#8ec07c',
    textShadowRadius:3
  },
  link:{
    color:'#f7d83b',
    textShadowColor:'#f7d83b',
    textShadowRadius:3
  },
  hr:{
    marginTop:10,
    marginBottom:5,
    backgroundColor:'#cc241d'
  },
  code_inline:{
    backgroundColor:'#333333',
    fontSize:14,
    color:'#EF3EA9',
    textShadowColor:'#EF3EA9',
    textShadowRadius:2

  },
  fence:{
    backgroundColor:'#333333'
  }
});

export default Summary;