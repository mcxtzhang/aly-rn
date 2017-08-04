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
    Linking
} from 'react-native';
import {NativeModules} from 'react-native';

export default class Settings extends React.Component {
    componentWillMount() {
        console.log("Settings----componentWillMount：" + this.props.account);
    }

    constructor(props) {
        super(props)
        this.state = {cacheSize: this.props.cacheSize};
    }

    render() {
        //var settingData = JSON.stringify(this.props.data);
        var settingData = JSON.parse(this.props.data);
        //var settingData = (this.props);
        console.log("Settings----settingData：" + settingData);
        return (
            <ScrollView>
                <View style={styles.topBarBg}>
                    <Text style={styles.topBarText}>设置</Text>
                </View>


                <View style={styles.settingItem10}>
                    <Text style={styles.settingsText}>账号</Text>
                    <Text style={styles.settingsValue}>{settingData["account"]}</Text>
                </View>


                <TouchableOpacity style={styles.settingItem10} onPress={() => {
                    this.onJumpPrinterConfig()
                }}>
                    <Text style={styles.settingsText}>打印机设置</Text>
                    <Image source={require('./img/icon_arrow.png')}></Image>
                </TouchableOpacity>

                {/*               <TouchableOpacity style={styles.settingItem10}>
                 <Text style={styles.settingsText}>通知与消息音设置</Text>
                 <Image source={require('./img/icon_arrow.png')}></Image>
                 </TouchableOpacity>*/}

                <TouchableOpacity style={styles.settingItem10}>
                    <Text style={styles.settingsText}>关于我们</Text>
                    <Image source={require('./img/icon_arrow.png')}></Image>
                </TouchableOpacity>
                <View style={styles.settingItem1}>
                    <Text style={styles.settingsText}>版本号</Text>
                    <Text style={styles.settingsValue}>{settingData.versionCode}</Text>
                </View>
                <TouchableOpacity style={styles.settingItem1} onPress={() => {
                    this.onPressClearCache()
                }}>
                    <Text style={styles.settingsText}>清理缓存</Text>
                    <Text style={styles.settingsValue}>{this.state.cacheSize}KB</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.settingItem10}
                                  onPress={()=> this.onCall(settingData.helpPhone)}>
                    <Text style={styles.settingsText}>客服电话</Text>
                    <Text style={[styles.settingsValue, {color: '#4990E2'}]}>{settingData.helpPhone}</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.settingItem10}>
                    <Text style={styles.settingsText}>退出登录</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }

    onCall(phone) {
        var url = 'tel:' + phone;

        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }


    onJumpPrinterConfig() {
        NativeModules.NativeRouterModule.jump("/setting");
    }


    onPressClearCache() {
        //console.log("You tapped the onPressClearCache!");
        NativeModules.ToastAndroid.show("清理成功", NativeModules.ToastAndroid.SHORT);
        this.setState({cacheSize: 0});
        //NativeModules.NativeRouterModule.jumpWith("/setting", null);
    }
}
var styles = StyleSheet.create({
    topBarBg: {
        height: 72,
        backgroundColor: '#00ACFF',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    topBarText: {
        marginBottom: 12,
        fontSize: 18,
        color: '#ffffff'
    },

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

