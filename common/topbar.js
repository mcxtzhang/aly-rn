'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import {NativeModules} from 'react-native';

export default class TopBar extends React.Component {
    componentWillMount() {
        console.log("Settings----componentWillMount：" + this.props.account);
    }

    constructor(props) {
        super(props)
        this.state = {
            leftIcon: this.props.leftIcon,
            leftText: this.props.leftText,
            centerTitle: this.props.centerTitle,
            rightText: this.props.rightText,

        };
    }

    render() {
        return (
            <View style={styles.topBarBg}>
                <Image style={styles.leftIcon} source={(this.state.leftIcon)}></Image>
                <Text style={styles.leftText}>{this.state.leftText}</Text>
                <Text style={styles.centerTitle}>{this.state.centerTitle}</Text>
                <Text style={styles.rightText}>{this.state.rightText}</Text>
            </View>
        )
    }


}
var styles = StyleSheet.create({
    topBarBg: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#00ACFF',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,

    },
    leftText: {
        fontSize: 18,
        color: '#ffffff',
        flex: 1
    }, leftIcon: {},
    centerTitle: {
        fontSize: 18,
        color: '#ffffff',
    },
    rightText: {
        fontSize: 18,
        color: '#ffffff',
        flex: 1
    },
});

