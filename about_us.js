'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TopBar from './common/topbar'
import {NativeModules} from 'react-native';

export default class AboutUs extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TopBar leftIcon={require('./img/icon_back.png')} centerTitle="关于我们" />
                <Image source={require('./img/logo.png')} style={{marginTop: 54}}/>
                <Text style={{color: '#333333', fontSize: 20, marginTop: 20}}>俺来也商家版</Text>
                <Text style={{color: '#666666', fontSize: 14, marginTop: 2, flex: 1}}>版本：V2.0</Text>
                <Text style={{color: '#999999', fontSize: 12}}>俺来也（上海）网络科技有限公司</Text>
                <Text style={{color: '#999999', fontSize: 12, marginTop: 6, marginBottom: 20}}>Copyright@2014-2016
                    IMC</Text>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    hello: {
        fontSize: 20,
        margin: 10,
    },
});

