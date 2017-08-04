'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default class Settings extends React.Component {


    onPressClearCache() {
        console.log("You tapped the onPressClearCache!");
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.settingItem10}>
                    <Text style={styles.settingsText}>账号</Text>
                    <Text style={styles.settingsValue}>xaxc001</Text>
                </View>


                <TouchableOpacity style={styles.settingItem10}>
                    <Text style={styles.settingsText}>打印机设置</Text>
                    <Image source={require('./img/icon_arrow.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem10}>
                    <Text style={styles.settingsText}>通知与消息音设置</Text>
                    <Image source={require('./img/icon_arrow.png')}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.settingItem10}>
                    <Text style={styles.settingsText}>关于我们</Text>
                    <Image source={require('./img/icon_arrow.png')}></Image>
                </TouchableOpacity>
                <View style={styles.settingItem1}>
                    <Text style={styles.settingsText}>版本号</Text>
                    <Text style={styles.settingsValue}>V1.0.0</Text>
                </View>
                <TouchableOpacity style={styles.settingItem1} onPress={() => {
                    this.onPressClearCache()
                }}>
                    <Text style={styles.settingsText}>清理缓存</Text>
                    <Text style={styles.settingsValue}>0.0KB</Text>
                </TouchableOpacity>


                <View style={styles.settingItem10}>
                    <Text style={styles.settingsText}>客服电话</Text>
                    <Text style={[styles.settingsValue, {color: '#4990E2'}]}>400-686-9933</Text>
                </View>


                <TouchableOpacity style={styles.settingItem10}>
                    <Text style={styles.settingsText}>退出登录</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingItem10: {
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        height: 48,
        backgroundColor: '#ffffff',
        //justifyContent: 'center',//main
        alignItems: 'center',
        flexDirection: 'row'
    },
    settingItem1: {
        marginTop: 1,
        paddingLeft: 15,
        paddingRight: 15,
        height: 48,
        backgroundColor: '#ffffff',
        //justifyContent: 'center',//main
        alignItems: 'center',
        flexDirection: 'row'
    },
    settingsText: {
        fontSize: 14,
        color: '#666666',
        flex: 1
    },
    settingsValue: {
        fontSize: 14,
        color: '#333333',
    },

});

