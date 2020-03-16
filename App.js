/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {Component} from 'react';
import { View, StyleSheet , TextInput , Text ,Image} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
          <Text> Days of the week </Text>
      </View>

    )
 }
}




const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'flex-start'
  }
});

export default App;
