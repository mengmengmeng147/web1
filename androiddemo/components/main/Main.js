import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Avatar, ListItem } from 'react-native-elements';

const list = [
  {
    title: '我的订单',
    icon: 'reorder'
  },
  {
    title: '我的足迹',
    icon: 'history'
  },
  {
    title: '我的收藏',
    icon: 'star-o'
  },
  {
    title: '用户反馈',
    icon: 'envelope'
  },
  {
    title: '我的购物车',
    icon: 'shopping-cart'
  },
  {
    title: '检查更新',
    icon: 'refresh'
  },
  {
    title: '设置',
    icon: 'cog'
  },
]

class Main extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <View style={{flex:1}}>
        <View style={{height:100,backgroundColor:'skyblue'}}>
          <Avatar
            size='xlarge'
            rounded
            source={{uri: "http://img5q.duitang.com/uploads/item/201507/03/20150703224804_vHGrm.thumb.700_0.jpeg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ marginLeft: 40, marginTop: 30}}
          />
          <Text style={{marginLeft:27}}>登录/注册</Text>
        </View>

        <View style={{height:500}}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                titleStyle={{marginLeft:5}}
                leftIcon={<Icon name={item.icon} size={18} color='gray'/>}
              />
            ))
          }
        </View>

      </View>
    )
  }
}

export default Main;