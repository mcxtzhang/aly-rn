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
                <View style={styles.settingItem}>
                    <Text style={styles.settingsText}>关于我们</Text>
                </View>
                <TouchableOpacity style={styles.settingItem}  onPress={() => {this.onPressClearCache()}} >
                    <Text style={styles.settingsText}>清理缓存</Text>
                </TouchableOpacity>


                <Image source={require('./img/logo.png')} style={{marginTop: 54}}/>
                <Text style={{color: '#333333', fontSize: 20, marginTop: 20}}>俺来也商22222222家版</Text>
                <Text style={{color: '#666666', fontSize: 14, marginTop: 2, flex: 1}}>版本：V2.0</Text>
                <Text style={{color: '#999999', fontSize: 12}}>俺来也（上海）网络科技有限公司</Text>
                <Text style={{color: '#999999', fontSize: 12, marginTop: 6, marginBottom: 20}}>Copyright@2014-2016
                    IMC</Text>

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
    settingItem: {
        marginTop: 15,
        paddingLeft: 15,
        height: 60,
        backgroundColor: '#ffffff',
        justifyContent: 'center',//main
    },
    settingsText: {
        fontSize: 16
    }


});

