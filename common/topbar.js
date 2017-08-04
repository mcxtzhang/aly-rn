'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import {NativeModules} from 'react-native';

export default class TopBar extends React.Component {
    /*    componentWillMount() {
     console.log("Settings----componentWillMount：" + this.props.account);
     }*/

    constructor(props) {
        super(props)
        this.state = {
            leftIcon: this.props.leftIcon,
            leftText: this.props.leftText,
            leftClick: this.props.leftClick,
            centerTitle: this.props.centerTitle,
            rightText: this.props.rightText,

        };
    }

    render() {
        return (
            <View style={styles.topBarBg}>
                <TouchableOpacity style={styles.left} onPress={this.onLeftClick.bind(this)}>
                    <Image style={styles.leftIcon} source={(this.state.leftIcon) }></Image>
                    <Text style={styles.leftText}>{this.state.leftText}</Text>
                </TouchableOpacity>


                <Text style={styles.centerTitle}>{this.state.centerTitle}</Text>
                <Text style={styles.rightText}>{this.state.rightText}</Text>
            </View>
        )
    }

    onLeftClick() {
        //console.log("onLeftClick");
        //this.setState({centerTitle: 'dfada'});
        if (this.state.leftClick) {
            this.state.leftClick();
        } else if (this.state.leftIcon || this.state.leftText) {
            NativeModules.NativeRouterModule.finsih();
        }
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
    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftText: {
        fontSize: 18,
        color: '#ffffff',
        paddingLeft: 5,
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

