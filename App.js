/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React , {Component} from 'react';
import { View, StyleSheet , TextInput , Text ,Image} from 'react-native';
import DayItem from './src/day-item'
import moment from 'moment'

// var DAYS = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ]

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
          {/* <Text> Days of the week:</Text> */}
          {/* <Text>{moment().format('ddd')}</Text> */}

          {this.days()}
      </View>

    )
 }

 days(){
   var dayItems = []
   for(var i=0 ; i<7 ; i++){
     var day = moment().add(i,'days').format('dddd')
     dayItems.push(
       <DayItem day={day} daysUntil={i}/>
     )
   }
   return dayItems
  //  return DAYS.map(function(day, index) {
  //     return <DayItem day={day}/>
  //  })
 }
}




const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

});

export default App;
