import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { View ,StyleSheet, TouchableOpacity, Image, SafeAreaView,Text,Button} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const ViewImagescreen = () =>
{
    return(
        <View style ={ styles.container}>

<Icon  name= "close" size={30} style= { styles.closeIcon} color={"white"}> </Icon>
<Icon  name = "trash-can-outline"  size={30} style= { styles.deleteIcon} color={"white"}> </Icon>

      <TouchableOpacity><Image  resizeMode = "contain" source={require('../assets/chair.jpg')} style = {
          styles.image
      } /></TouchableOpacity>
    
 
{/*        
      <StatusBar style="auto" /> */}
    </View>
        

    ) 
}
const styles = StyleSheet.create({
    closeIcon:{
width:50,
height:50,
// backgroundColor:"#fc5c65",
position:'absolute',
top:40,
left:30,
color:"white"
    },
    deleteIcon:{
        width:50,
        height:50,
        // backgroundColor:"#4ECDC4",
        position:'absolute',
        top:40,
       right:30,
     
    },

    container: {
     flex: 1,
backgroundColor: 'black'
    
   },
image:
{

height:'100%',
width:'100%',
alignItems:'center',
justifyContent:'center',
resizeMode: 'contain'

}
    });
export default ViewImagescreen;