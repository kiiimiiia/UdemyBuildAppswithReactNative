import React , {Component} from 'react';
import { View, StyleSheet , TextInput , Text ,Image} from 'react-native';

class DayItem extends Component{

    render(){
        return(
            <View >
                <Text style={this.style()}>{this.props.day}</Text>
            </View>
        )
    }
    style(){
        return{
            color:this.color().toString(),
            fontSize:this.fontSize().toString(),
            lineHeight:this.lineHeight().toString(),
            fontWeight:this.fontWeight().toString(),

        }

    }

    color(){
        var opacity = 1/this.props.daysUntil;
        return 'rgba(0,0,0,'+opacity.toString+')';
    }

    fontWeight(){
        var weight = 7 - this.props.daysUntil;
        return weight *100
    }
    fontSize(){
        return 60 - 6*this.props.daysUntil
    }
    lineHeight(){
        return 10 - 4* this.props.daysUntil
    }
}

// const styles = StyleSheet.create({
//   day:{
//     fontSize: 18,
//     color: '#0000FF'
// }
// });
export default DayItem;

