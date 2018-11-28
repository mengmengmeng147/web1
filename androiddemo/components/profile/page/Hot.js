import React,{Component} from 'react'
import {View,Text} from 'react-native'

import { Card } from 'react-native-elements'

class Hot extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View style={{flex:1}}>
        <View style={{padding:10,flex:2}}>
          <Text>今日热点</Text>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/1.jpg')}>
              <Text style={{textAlign:'center'}}>
                经典短款保暖棉衣
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/2.jpg')}>
              <Text style={{textAlign:'center'}}>
                经典长款棉衣
              </Text>
            </Card>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/3.jpg')}>
              <Text style={{textAlign:'center'}}>
              梦幻公主礼服
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/4.jpg')}>
              <Text style={{textAlign:'center'}}>
                中国红敬酒服
              </Text>
            </Card>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              titleStyle={{height:15,lineHeight:15}}
              imageStyle={{height:90}}
              image={require('./img/5.jpg')}>
              <Text style={{textAlign:'center'}}>
                新疆葡萄
              </Text>
            </Card>
            <Card
              containerStyle={{padding:2,width:'45%',height:130}}
              imageStyle={{height:90}}
              image={require('./img/6.jpg')}>
              <Text style={{textAlign:'center'}}>
                荷花模型装饰品
              </Text>
            </Card>

            
          </View>
        </View>
      </View>
    )
  }
}

export default Hot;