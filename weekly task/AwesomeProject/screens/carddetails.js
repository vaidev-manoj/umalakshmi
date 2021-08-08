

import React from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity, } from 'react-native';
import Lister from '../app/component/lister';

import Cardlist from './cardlist';

function Carddetails(props) {
    return (
     
        
<View style = {styles.details}>
    <Cardlist>

    </Cardlist>  
    <Image  style={styles.person} source= { require("../assets/images.jpg")}></Image> 
  <Lister></Lister>
</View>
       
      
          
             
        
    );
}
const styles = StyleSheet.create({
    
    
 details:{
        backgroundColor:'#fff',
        marginVertical:10,
        flex:1
       },
    person:{
         height:20,
         width:20,
         borderRadius:10,
         top:50,
        left:15,
        right:15,
        padding:30,
       
    
    },
    textg:{
        color:'black',   
        fontSize:10,
      textTransform:'uppercase',
       fontWeight:'bold',
       position:'absolute',
       backgroundColor:"#fff",
       padding:30

    }

})

export default Carddetails;