'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import AboutUs from './about_us'
import Settings from './settings'
import StarFoodMain from './starfood_main'

class HelloWorld extends React.Component {
    render() {
        var whitch = this.props.path;

        if (whitch == "settings") {
            return (
                <View style={styles.container}>
                    <Settings {...this.props}/>
                </View>
            )
        } else if (whitch == "AboutUs") {
            return (
                <View style={styles.container}>
                    <AboutUs/>
                </View>

            )
        } else if (whitch == "StarFoodMain") {
            return (
                <View style={styles.container}>
                    <StarFoodMain/>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                </View>
            )
        }

    }

    componentWillMount() {
        console.log("zxt----componentWillMount：" + this.props);
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#333333',

    },
});

AppRegistry.registerComponent('AlyXiaoChaoAppProject', () => HelloWorld);
