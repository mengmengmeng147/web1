/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import Main from './components/main/Main';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends Component<Props> {
  constructor () {
    super();
    this.state = {
      selectedTab:'home'
    }
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Icon name="home" size={28} color="#D3D3D3"/>}
          renderSelectedIcon={() => <Icon name="home" size={26} color="#63B8FF"/>}
          onPress={() => this.setState({ selectedTab: 'home' })}
          >
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="热门"
          renderIcon={() => <Icon name="fire" size={28} color="#D3D3D3"/>}
          renderSelectedIcon={() => <Icon name="fire" size={26} color="#63B8FF"/>}
          onPress={() => this.setState({ selectedTab: 'profile' })}
          >
          <Profile />
        </TabNavigator.Item>
        
        <TabNavigator.Item
          selected={this.state.selectedTab === 'main'}
          title="我的"
          renderIcon={() => <Icon name="user" size={28} color="#D3D3D3"/>}
          renderSelectedIcon={() => <Icon name="user" size={26} color="#63B8FF"/>}
          onPress={() => this.setState({ selectedTab: 'main' })}
          >
          <Main />
        </TabNavigator.Item>
      </TabNavigator>
    
    );
  }
}

export default App; //暴露


