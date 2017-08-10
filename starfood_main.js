'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import TopBar from './common/topbar'
import {NativeModules} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class StarFoodMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }

    }

    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }

    render() {
        return (
            <ScrollView >
                <TopBar centerTitle="俺来也商家端" rightText="退出登录" rightClick={this.clickQuitLogin.bind(this)}/>
                <Image source={require('./img/starfood_logo.png')}/>

                <View style={{
                    backgroundColor: '#FFFFFF',
                    height: 161,
                    paddingTop: 26,
                    paddingBottom: 26,
                    paddingLeft: 20
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('./img/icon_current_store.png')}/>
                        <Text style={{color: '#9B9B9B'}}> 商家名称</Text>
                    </View>
                    <Text style={{color: '#000000', fontSize: 16, marginLeft: 20}}>陕西科技大学测试一店</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 18}}>
                        <Image source={require('./img/icon_handler.png')}/>
                        <Text style={{color: '#9B9B9B'}}> 店主</Text>
                    </View>
                    <Text style={{color: '#000000', fontSize: 16, marginLeft: 20}}>李晓明－18221731329</Text>


                </View>

                <View
                    style={{marginTop: 10, backgroundColor: '#FFFFFF', height: 189, padding: 14, flexDirection: 'row'}}>

                    <TouchableOpacity onPress={this.clickPrinter.bind(this)}
                                      style={{
                                          backgroundColor: '#FFB415',
                                          flex: 1,
                                          marginRight: 14,
                                          justifyContent: "center"
                                      }}>
                        <View >
                            <Text style={styles.moduleText}>连接打印机</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.clickGoH5.bind(this)}
                                      style={{
                                          backgroundColor: '#85D262',
                                          flex: 1, justifyContent: "center"
                                      }}>

                        <View >
                            <Text style={styles.moduleText}>立即进入</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <Text >{this.state.text}</Text>

            </ScrollView>
        )
    }


    clickQuitLogin() {
        NativeModules.NativeStarFoodLoginOutModule.loginOut();
    }

    clickPrinter() {
        NativeModules.NativeRouterModule.jump("/printer/setting");
    }

    clickGoH5() {
        NativeModules.NativeRouterModule.jump("/starfood/h5/main/");
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    moduleText: {color: '#ffffff', fontSize: 24, alignSelf: 'center'},
});

