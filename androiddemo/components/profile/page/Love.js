import React,{Component} from 'react'
import {View,Text} from 'react-native'

import { Card } from 'react-native-elements'

class Love extends Component {
  constructor() {
    super();
  }

  render () {
    return (
       <View style={{flex:1}}>
        <View style={{padding:10,flex:2}}>
          <Text>看的最多</Text>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/7.jpg')}>
              <Text style={{textAlign:'center'}}>
                保暖雪地靴
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/8.jpg')}>
              <Text style={{textAlign:'center'}}>
                可爱手工成品
              </Text>
            </Card>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/9.jpg')}>
              <Text style={{textAlign:'center'}}>
              修身外穿打底裤
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/10.jpg')}>
              <Text style={{textAlign:'center'}}>
                美味曲奇
              </Text>
            </Card>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/11.jpg')}>
              <Text style={{textAlign:'center'}}>
                Olay保湿乳套装
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/12.jpg')}>
              <Text style={{textAlign:'center'}}>
                Dior口红 
              </Text>
            </Card>
          </View>
        </View>
      </View>
    )
  }
}

export default Love;