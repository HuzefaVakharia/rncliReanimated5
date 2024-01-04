/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Animated, { useSharedValue,withTiming, withSpring, useAnimatedGestureHandler, useAnimatedStyle, withDelay, } from 'react-native-reanimated';


/* Search bar animation box Ref video: https://www.youtube.com/watch?v=Y7q7cOxPZ2Q */








// create a component








const App = () => {

  const animation=useSharedValue(0);
  const [value,setValue]=useState(0);
  const animatedStyle=useAnimatedStyle(()=>{
    return {
      width:animation.value==1?withTiming(300,{duration:500}):withTiming(0,{duration:500}),
    }
  });






  return (
    <View style={styles.container}>
      <Animated.View style={[{
        width:300,
        height:50,
        backgroundColor:'#E7E7E7',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
      },animatedStyle]}>
        <TextInput 
        style={{width:'85%'}} 
        placeholder='Search Here...'
        />

        <TouchableOpacity onPress={
          ()=>{
            if(animation.value==1){
              animation.value=0;
              setValue(0);
              }else{
                animation.value=1;
                setValue(1);
                }
          }
        }>
          <Image
            source={value==1?require('./images/cancel.png'):require('./images/searchIcon_blue.png')}
            style={{
              width:value==1?20:30,
              height:value==1?20:30,
            }}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;