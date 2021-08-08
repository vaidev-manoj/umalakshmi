import React from 'react';
import { StyleSheet, View,Image,Text} from 'react-native';
import colors from './config/colors';
function Card ({title, subtitle,Image}){
    return(
<View style =
{ styles.card}>

<Text style ={styles.text}> Red jacket for sale </Text>
<Text style={styles.texttwo}>$100</Text>
</View> 

    );

}
const styles= StyleSheet.create(
    {
     card:{
           
         
     marginVertical:50,
        
           right:5,
           left:10,
           
    backgroundColor:"#fff"


        },
         text:{
   color:'black',   
   fontSize:18,
 textTransform:'uppercase',
  fontWeight:'bold',
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"#fff"



       },
       texttwo:{
        fontWeight:"bold",
        fontSize:20,
        color:"#4ecdc4",
       left:10,
       backgroundColor:"#fff"
           }
    }
)
export default Card;

