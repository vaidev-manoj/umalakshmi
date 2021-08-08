import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../app/component/config/colors";
import Constants from "expo-constants";
const DATA = [
  {
    id: "1",
    image:require('../assets/jacket.jpg'),
    title: "red jacket for sales",
    subtitle:'$100'
  },
  {
    id: "2",
    image:require('../assets/couch.jpg'),
    title: "couch in great condition",
    subtitle:'$1000'
  },
  
];

const Item = ({ item, onPress, backgroundColor, textColor ,image}) => (
  <TouchableOpacity onPress={() => { console.log("onPress") }} style={[styles.item, backgroundColor]}>
<Image source={item.image} style={styles.image}></Image>

{/* <Image source={require('../assets/couch.jpg')} style={styles.images}></Image> */}
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.subtitle}>{item.subtitle}</Text>
  </TouchableOpacity>
);

const MainScreen = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? " 	#F0F0F0" : " 	#DCDCDC";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem }
        keyExtractor={(item) => item.id
        }
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 10,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    textTransform:'uppercase',
    color:'black',
    fontWeight:"100"
  },
  image:{
      height:200,
      width:"100%",
borderTopLeftRadius:15,
borderTopRightRadius:15
  },
  subtitle:{
    fontSize: 16,
    textTransform:'uppercase',
    color:colors.secondary,
fontWeight:"bold"
  },
  images:{
    height:200,
    width:"100%",
borderTopLeftRadius:15,
borderTopRightRadius:15
  }
});

export default MainScreen;