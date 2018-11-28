import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Hot from './page/Hot'
import Love from './page/Love'

import ScrollableTabView, {DefaultTabBar } from 'react-native-scrollable-tab-view'

class Profile extends Component {
  constructor() {
    super();
  }

  render () {
    return (
        <ScrollableTabView>
          <Hot tabLabel="精选" />
          <Love tabLabel="猜你喜欢" />
        </ScrollableTabView>
    )
  }
}

export default Profile;