// import React from 'react';
// import { StyleSheet, View,Image,Text} from 'react-native';
// import Card  from '../app/component/card';
// function Cardlist ({title, subtitle,Image}){
//     return(
// <View style =
// { styles.card}>
// <Card> </Card>
// <Image style={ styles.image} source = { require( "../assets/jacket.jpg")}></Image>
// </View> 

//     );

// }
// const styles= StyleSheet.create(
//     {
//      card:{
           
//             borderRadius:15,
         
        
//             flex:1,
//            alignContent:'center',
//        justifyContent:'center',
    

// alignSelf:'center'

//         },
//          text:{
//    color:'black',   
//    fontSize:28,
//  textTransform:'uppercase',
//   fontWeight:'bold',
//   justifyContent:"center",
//   alignItems:"center",



//        },
//          image:{
//             height:50,
//             width:50
//         }
//     }
// )
// export default Cardlist;

import React from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity, } from 'react-native';
import Card from '../app/component/card';

function Cardlist(props) {
    return (
        <View style={styles.backgroundColor}>
            <View>
            <Image style={styles.logocss} source={require("../assets/jacket.jpg")}></Image>
           <Card></Card>
    
            </View>
            </View>
          
             
        
    );
}
const styles = StyleSheet.create({
    
    
    logocss:{
        width:340,
        height:200,
        borderRadius:20,
        top:50,
        left:15,
        right:15,
        padding:30,
  
       },
   
    textone:{
      fontWeight:"bold",
marginVertical:50,
marginBottom:40,


    },
    backgroundColor:{
      backgroundColor:"#f8f4f4",
      flex:0.5,
      top:50
    },
    texttwo:{
 fontWeight:"bold",
 fontSize:20,
 color:"#4ecdc4",
left:50
 
    }

})

export default Cardlist;